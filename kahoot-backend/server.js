// backend/kahoot-backend/server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Asegúrate de tener cors instalado (npm install cors)

// *** IMPORTAR LAS PREGUNTAS DESDE EL NUEVO ARCHIVO ***
const questionsByRole = require('./questions.js');
// ****************************************************

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

let gameStarted = false;
let players = {}; // { socketId: { name: "...", role: "...", score: 0, currentQuestionIndex: 0 } }
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
            io.to(adminSocketId).emit('currentPlayers', Object.values(players).map(p => ({ id: p.id, name: p.name, role: p.role })));
            console.log(`Admin ${name} conectado: ${socket.id}`);
        } else {
            if (players[socket.id]) {
                socket.emit('error', 'Ya estás conectado al juego.');
                return;
            }
            players[socket.id] = { id: socket.id, name, role, score: 0, currentQuestionIndex: 0 };
            console.log(`Jugador ${name} (${role}) conectado: ${socket.id}`);
            io.emit('playerJoined', { id: socket.id, name, role });
            if (adminSocketId) { // Notificar al admin sobre el nuevo jugador
                io.to(adminSocketId).emit('playerJoined', { id: socket.id, name, role });
            }
            if (gameStarted) {
                io.to(socket.id).emit('gameStarted');
                sendQuestionToPlayer(socket.id);
            } else {
                io.to(socket.id).emit('waitingForGameToStart');
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

            Object.values(players).forEach(player => {
                player.currentQuestionIndex = 0;
                sendQuestionToPlayer(player.id);
            });

            io.to(adminSocketId).emit('gameStartedAdmin');

        } else if (socket.id !== adminSocketId) {
            socket.emit('error', 'Solo el administrador puede iniciar el juego.');
        } else {
            socket.emit('error', 'El juego ya ha comenzado.');
        }
    });

    socket.on('requestNextQuestionForPlayer', () => {
        const player = players[socket.id];
        if (player && gameStarted) {
            player.currentQuestionIndex++;
            sendQuestionToPlayer(socket.id);
        }
    });

    socket.on('submitAnswer', ({ questionId, selectedOption }) => {
        const player = players[socket.id];
        if (!player || !gameStarted) return;

        const roleQuestions = questionsByRole[player.role];
        if (!roleQuestions) return;

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
        io.to(socket.id).emit('disableOptions');

        setTimeout(() => {
            io.to(socket.id).emit('readyForNextQuestion');
        }, 1500);
    });


    socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id);
        if (socket.id === adminSocketId) {
            adminSocketId = null;
            gameStarted = false;
            Object.values(players).forEach(player => {
                io.to(player.id).emit('adminDisconnectedNotification', 'El administrador se ha desconectado. Tu juego puede continuar.');
            });
            console.log('Administrador desconectado.');
        } else if (players[socket.id]) {
            const disconnectedPlayer = players[socket.id];
            delete players[socket.id];
            io.emit('playerLeft', { id: socket.id, name: disconnectedPlayer.name });
            if (adminSocketId) { // Notificar al admin si está conectado
                io.to(adminSocketId).emit('playerLeft', { id: socket.id, name: disconnectedPlayer.name });
            }
            console.log(`Jugador ${disconnectedPlayer.name} ha dejado el juego.`);
        }
    });

    function sendQuestionToPlayer(playerId) {
        const player = players[playerId];
        if (!player) return;

        const playerRoleQuestions = questionsByRole[player.role];

        if (playerRoleQuestions && player.currentQuestionIndex < playerRoleQuestions.length) {
            const questionToSend = { ...playerRoleQuestions[player.currentQuestionIndex] };
            delete questionToSend.answer;
            io.to(playerId).emit('newQuestion', questionToSend);
            console.log(`Enviando pregunta ${questionToSend.id} a ${player.name} (${player.role})`);
        } else {
            io.to(playerId).emit('gameFinishedForPlayer', { finalScore: player.score });
            console.log(`${player.name} (${player.role}) ha terminado sus preguntas con una puntuación de ${player.score}.`);
        }
    }
});

server.listen(PORT, () => {
    console.log(`Servidor de Kahoot escuchando en http://localhost:${PORT}`);
});