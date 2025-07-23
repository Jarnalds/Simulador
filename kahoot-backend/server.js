// backend/kahoot-backend/server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Asegúrate de tener cors instalado (npm install cors)

// *** 1. IMPORTAR LAS PREGUNTAS DESDE EL NUEVO ARCHIVO ***
const questionsByRole = require('./questions.js');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

// Middleware para CORS
app.use(cors());

const io = socketIo(server, {
    cors: {
        origin: "*", // Permite conexiones desde cualquier origen. En producción, especifica tu dominio.
        methods: ["GET", "POST"]
    }
});

// Ruta simple para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor de Mini Kahoot (Backend) está funcionando.');
});

// *** 2. VARIABLES DE ESTADO ACTUALIZADAS ***
let gameStarted = false;
// 'players' ahora incluye el índice de pregunta actual por cada jugador
let players = {}; // Formato: { socketId: { name: "...", role: "...", score: 0, currentQuestionIndex: 0 } }
let adminSocketId = null;


io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado:', socket.id);

    socket.on('joinGame', ({ name, role, isAdmin }) => {
        if (isAdmin) {
            if (adminSocketId) {
                socket.emit('error', 'Ya hay un administrador conectado.');
                return;
            }
            adminSocketId = socket.id;
            io.to(adminSocketId).emit('adminConnected');
            // Enviamos la lista actual de jugadores al admin al conectarse
            io.to(adminSocketId).emit('currentPlayers', Object.values(players).map(p => ({ id: p.id, name: p.name, role: p.role })));
            console.log(`Admin ${name} conectado: ${socket.id}`);
        } else {
            if (players[socket.id]) {
                socket.emit('error', 'Ya estás conectado al juego.');
                return;
            }
            // *** Inicializamos currentQuestionIndex en 0 para cada nuevo jugador ***
            players[socket.id] = { id: socket.id, name, role, score: 0, currentQuestionIndex: 0 };
            console.log(`Jugador ${name} (${role}) conectado: ${socket.id}`);
            io.emit('playerJoined', { id: socket.id, name, role });
            // *** Notificamos al admin si está conectado ***
            if (adminSocketId) {
                io.to(adminSocketId).emit('playerJoined', { id: socket.id, name, role });
            }

            // Si el juego ya ha comenzado, enviarle la primera pregunta de inmediato
            if (gameStarted) {
                io.to(socket.id).emit('gameStarted'); // Notificarle que el juego ya empezó
                sendQuestionToPlayer(socket.id); // Enviar su primera pregunta
            } else {
                io.to(socket.id).emit('waitingForGameToStart'); // Mensaje para esperar
            }
        }
    });

    socket.on('startGame', () => {
        if (socket.id === adminSocketId && !gameStarted) {
            if (Object.keys(players).length === 0) {
                io.to(adminSocketId).emit('error', 'No hay jugadores conectados para iniciar el juego.');
                return;
            }
            gameStarted = true;

            io.emit('gameStarted');
            console.log('Juego iniciado por el admin. Enviando primera pregunta a cada jugador.');

            // *** Enviar la primera pregunta a CADA jugador activo ***
            Object.values(players).forEach(player => {
                player.currentQuestionIndex = 0; // Resetear el índice para todos al iniciar juego
                sendQuestionToPlayer(player.id);
            });

            // Notificar al admin que el juego ha empezado
            io.to(adminSocketId).emit('gameStartedAdmin');

        } else if (socket.id !== adminSocketId) {
            socket.emit('error', 'Solo el administrador puede iniciar el juego.');
        } else {
            socket.emit('error', 'El juego ya ha comenzado.');
        }
    });

    // *** NUEVO EVENTO: el jugador solicita la siguiente pregunta ***
    socket.on('requestNextQuestionForPlayer', () => {
        const player = players[socket.id];
        if (player && gameStarted) {
            player.currentQuestionIndex++; // Avanzar el índice de este jugador
            sendQuestionToPlayer(socket.id); // Enviar su siguiente pregunta
        }
    });

    socket.on('submitAnswer', ({ questionId, selectedOption }) => {
        const player = players[socket.id];
        if (!player || !gameStarted) return;

        const roleQuestions = questionsByRole[player.role];
        if (!roleQuestions) return;

        // *** Buscamos la pregunta en el índice actual del jugador, no solo por ID ***
        const currentQuestion = roleQuestions[player.currentQuestionIndex];
        if (!currentQuestion || currentQuestion.id !== questionId) {
             socket.emit('error', 'Esta pregunta ya no es válida o ya fue respondida.');
             return;
        }

        if (selectedOption === currentQuestion.answer) {
            player.score++;
            socket.emit('answerResult', { correct: true, score: player.score, correctOption: currentQuestion.answer });
            console.log(`${player.name} (${player.role}) respondió correctamente. Puntuación: ${player.score}`);
        } else {
            socket.emit('answerResult', { correct: false, correctOption: currentQuestion.answer });
            console.log(`${player.name} (${player.role}) respondió incorrectamente.`);
        }
        io.to(socket.id).emit('disableOptions'); // Deshabilitar opciones después de responder

        // Después de un pequeño retraso para que el jugador vea el resultado, permitirle pedir la siguiente
        setTimeout(() => {
            io.to(socket.id).emit('readyForNextQuestion'); // El cliente decidirá cuándo pedirla
        }, 1500); // 1.5 segundos para mostrar el resultado
    });


    socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id);
        if (socket.id === adminSocketId) {
            adminSocketId = null;
            gameStarted = false;
            // Notificamos a los jugadores que el admin se fue
            Object.values(players).forEach(player => {
                io.to(player.id).emit('adminDisconnectedNotification', 'El administrador se ha desconectado. Tu juego puede continuar.');
            });
            console.log('Administrador desconectado.');
        } else if (players[socket.id]) {
            const disconnectedPlayer = players[socket.id];
            delete players[socket.id];
            io.emit('playerLeft', { id: socket.id, name: disconnectedPlayer.name });
            // Notificamos al admin si está conectado
            if (adminSocketId) {
                io.to(adminSocketId).emit('playerLeft', { id: socket.id, name: disconnectedPlayer.name });
            }
            console.log(`Jugador ${disconnectedPlayer.name} ha dejado el juego.`);
        }
    });

    // *** FUNCIÓN AUXILIAR PARA ENVIAR UNA PREGUNTA A UN JUGADOR ESPECÍFICO ***
    function sendQuestionToPlayer(playerId) {
        const player = players[playerId];
        if (!player) return;

        const playerRoleQuestions = questionsByRole[player.role];

        // Verificar si el jugador tiene más preguntas de su rol
        if (playerRoleQuestions && player.currentQuestionIndex < playerRoleQuestions.length) {
            const questionToSend = { ...playerRoleQuestions[player.currentQuestionIndex] };
            delete questionToSend.answer; // ¡Importante! No enviar la respuesta al cliente
            io.to(playerId).emit('newQuestion', questionToSend);
            console.log(`Enviando pregunta ${questionToSend.id} a ${player.name} (${player.role})`);
        } else {
            // *** El jugador ha terminado todas sus preguntas, enviar puntuación final ***
            io.to(playerId).emit('gameFinishedForPlayer', { finalScore: player.score });
            console.log(`${player.name} (${player.role}) ha terminado sus preguntas con una puntuación de ${player.score}.`);
        }
    }
});

server.listen(PORT, () => {
    console.log(`Servidor de Kahoot escuchando en http://localhost:${PORT}`);
});