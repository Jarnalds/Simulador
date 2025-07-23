// backend/kahoot-backend/server.js

// 1. Importaciones de módulos necesarios
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Asegúrate de tener 'cors' instalado (npm install cors)

// 2. Importar las preguntas desde el archivo questions.js
const questionsByRole = require('./questions.js');

// 3. Configuración inicial del servidor Express y Socket.IO
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000; // Usa el puerto de entorno de Render o 3000

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
// Esto permite que tu frontend (ej. en Netlify) se conecte a tu backend (en Render)
app.use(cors());

// Configuración de Socket.IO para permitir conexiones desde cualquier origen
const io = socketIo(server, {
    cors: {
        origin: "*", // Permite conexiones desde cualquier origen (Frontend en Netlify, etc.)
        methods: ["GET", "POST"]
    }
});

// 4. Ruta simple para verificar que el servidor está funcionando
// Al visitar la URL raíz del backend (ej. backend-6ya4.onrender.com/), verás este mensaje.
app.get('/', (req, res) => {
    res.send('Servidor de Mini Kahoot (Backend) está funcionando.');
});

// 5. Variables de estado del juego
let gameStarted = false; // Indica si el juego ha sido iniciado por el administrador
// Objeto para almacenar los datos de los jugadores, incluyendo su puntuación y el índice de la pregunta actual
let players = {}; // Formato: { socketId: { name: "...", role: "...", score: 0, currentQuestionIndex: 0 } }
let adminSocketId = null; // Almacena el ID de socket del administrador conectado

// 6. Manejo de conexiones de Socket.IO
io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado:', socket.id); // Log cuando alguien se conecta

    // Evento 'joinGame': Un usuario intenta unirse como jugador o administrador
    socket.on('joinGame', ({ name, role, isAdmin }) => {
        if (isAdmin) {
            // Lógica para el administrador
            if (adminSocketId) {
                // Si ya hay un administrador, enviar error al nuevo intento
                socket.emit('error', 'Ya hay un administrador conectado.');
                return;
            }
            adminSocketId = socket.id; // Asignar el socket actual como administrador
            io.to(adminSocketId).emit('adminConnected'); // Notificar al admin que se conectó exitosamente
            // Enviar la lista actual de jugadores al admin al conectarse
            io.to(adminSocketId).emit('currentPlayers', Object.values(players).map(p => ({ id: p.id, name: p.name, role: p.role })));
            console.log(`Admin ${name} conectado: ${socket.id}`);
        } else {
            // Lógica para los jugadores
            if (players[socket.id]) {
                // Si el socket ya está en la lista de jugadores, enviar error
                socket.emit('error', 'Ya estás conectado al juego.');
                return;
            }
            // Inicializar datos del nuevo jugador, incluyendo su índice de pregunta en 0
            players[socket.id] = { id: socket.id, name, role, score: 0, currentQuestionIndex: 0 };
            console.log(`Jugador ${name} (${role}) conectado: ${socket.id}`);
            io.emit('playerJoined', { id: socket.id, name, role }); // Emitir a todos que un jugador se unió

            // Notificar al admin si está conectado sobre el nuevo jugador
            if (adminSocketId) {
                io.to(adminSocketId).emit('playerJoined', { id: socket.id, name, role });
            }

            // Si el juego ya ha comenzado, enviar la primera pregunta de inmediato al nuevo jugador
            if (gameStarted) {
                io.to(socket.id).emit('gameStarted'); // Notificarle que el juego ya empezó
                sendQuestionToPlayer(socket.id); // Enviar su primera pregunta
            } else {
                io.to(socket.id).emit('waitingForGameToStart'); // Mensaje para esperar
            }
        }
    });

// backend/kahoot-backend/server.js

// ... (código existente hasta el final del io.on('connection', ...) bloque) ...

// Nuevo endpoint para descargar resultados en CSV
app.get('/download-results', (req, res) => {
    // Asegúrate de que el juego haya terminado o que quieras los resultados en cualquier momento
    if (Object.keys(players).length === 0) {
        return res.status(404).send('No hay resultados de jugadores para descargar.');
    }

    let csvContent = "Nombre,Rol,Puntuacion\n"; // Encabezados del CSV

    // Itera sobre los jugadores para construir el contenido CSV
    Object.values(players).forEach(player => {
        csvContent += `${player.name},${player.role},${player.score}\n`;
    });

    // Configura las cabeceras para que el navegador descargue el archivo
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="resultados_kahoot.csv"');
    res.status(200).send(csvContent);
    console.log('Archivo CSV de resultados solicitado y enviado.');
});


// 8. Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor de Kahoot escuchando en http://localhost:${PORT}`);
});

    // Evento 'startGame': El administrador inicia el juego
    socket.on('startGame', () => {
        // Solo el admin puede iniciar el juego y solo si no ha comenzado ya
        if (socket.id === adminSocketId && !gameStarted) {
            if (Object.keys(players).length === 0) {
                // Si no hay jugadores, el admin no puede iniciar el juego
                io.to(adminSocketId).emit('error', 'No hay jugadores conectados para iniciar el juego.');
                return;
            }
            gameStarted = true; // Establecer el estado del juego como iniciado

            io.emit('gameStarted'); // Notificar a todos los jugadores que el juego comenzó
            console.log('Juego iniciado por el admin. Enviando primera pregunta a cada jugador.');

            // Enviar la primera pregunta a CADA jugador activo
            Object.values(players).forEach(player => {
                player.currentQuestionIndex = 0; // Resetear el índice para todos al iniciar el juego
                sendQuestionToPlayer(player.id); // Llamar a la función para enviar la pregunta
            });

            // Notificar al admin que el juego ha empezado
            io.to(adminSocketId).emit('gameStartedAdmin');

        } else if (socket.id !== adminSocketId) {
            socket.emit('error', 'Solo el administrador puede iniciar el juego.');
        } else {
            socket.emit('error', 'El juego ya ha comenzado.');
        }
    });

    // Evento 'submitAnswer': Un jugador envía su respuesta a una pregunta
    socket.on('submitAnswer', ({ questionId, selectedOption }) => {
        const player = players[socket.id];
        if (!player || !gameStarted) return; // Si no es un jugador o el juego no ha comenzado, ignorar

        const roleQuestions = questionsByRole[player.role]; // Obtener preguntas para el rol del jugador
        if (!roleQuestions) return; // Si no hay preguntas para el rol, ignorar

        // Obtener la pregunta actual del jugador basándose en su índice
        const currentQuestion = roleQuestions[player.currentQuestionIndex];
        if (!currentQuestion || currentQuestion.id !== questionId) {
             // Si la pregunta no coincide o ya ha avanzado, ignorar (o manejar como error)
             socket.emit('error', 'Esta pregunta ya no es válida o ya fue respondida.');
             return;
        }

        // Comprobar si la respuesta seleccionada es correcta
        if (selectedOption === currentQuestion.answer) {
            player.score++; // Incrementar la puntuación si es correcta
            socket.emit('answerResult', { correct: true, score: player.score, correctOption: currentQuestion.answer });
            console.log(`${player.name} (${player.role}) respondió correctamente. Puntuación: ${player.score}`);
        } else {
            socket.emit('answerResult', { correct: false, correctOption: currentQuestion.answer });
            console.log(`${player.name} (${player.role}) respondió incorrectamente.`);
        }
        io.to(socket.id).emit('disableOptions'); // Deshabilitar opciones después de responder

        // *** CAMBIO CLAVE PARA EL AVANCE AUTOMÁTICO ***
        // Después de un pequeño retraso (1 segundo), avanzamos al jugador a la siguiente pregunta
        setTimeout(() => {
            player.currentQuestionIndex++; // Incrementar el índice de la pregunta para este jugador
            sendQuestionToPlayer(socket.id); // Enviar la siguiente pregunta (o la pantalla final)
        }, 1000); // Retraso de 1 segundo (1000 milisegundos)
    });

    // Evento 'disconnect': Un usuario se desconecta
    socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id);
        if (socket.id === adminSocketId) {
            // Si el admin se desconecta, resetear el estado del juego
            adminSocketId = null;
            gameStarted = false;
            // Notificar a todos los jugadores que el admin se fue
            Object.values(players).forEach(player => {
                io.to(player.id).emit('adminDisconnectedNotification', 'El administrador se ha desconectado. Tu juego puede continuar, pero no habrá más control central.');
            });
            console.log('Administrador desconectado.');
        } else if (players[socket.id]) {
            // Si es un jugador, eliminarlo de la lista
            const disconnectedPlayer = players[socket.id];
            delete players[socket.id];
            io.emit('playerLeft', { id: socket.id, name: disconnectedPlayer.name });
            // Notificar al admin si está conectado sobre el jugador que se fue
            if (adminSocketId) {
                io.to(adminSocketId).emit('playerLeft', { id: socket.id, name: disconnectedPlayer.name });
            }
            console.log(`Jugador ${disconnectedPlayer.name} ha dejado el juego.`);
        }
    });

    // 7. Función auxiliar para enviar una pregunta a un jugador específico
    function sendQuestionToPlayer(playerId) {
        const player = players[playerId];
        if (!player) return;

        const playerRoleQuestions = questionsByRole[player.role];

        // Verificar si el jugador tiene más preguntas para su rol
        if (playerRoleQuestions && player.currentQuestionIndex < playerRoleQuestions.length) {
            // Si hay más preguntas, preparar y enviar la siguiente
            const questionToSend = { ...playerRoleQuestions[player.currentQuestionIndex] };
            delete questionToSend.answer; // ¡MUY IMPORTANTE! No enviar la respuesta al cliente
            io.to(playerId).emit('newQuestion', questionToSend);
            console.log(`Enviando pregunta ${questionToSend.id} a ${player.name} (${player.role})`);
        } else {
            // Si el jugador ha terminado todas sus preguntas, enviar su puntuación final
            io.to(playerId).emit('gameFinishedForPlayer', { finalScore: player.score });
            console.log(`${player.name} (${player.role}) ha terminado sus preguntas con una puntuación de ${player.score}.`);
        }
    }
});

// 8. Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor de Kahoot escuchando en http://localhost:${PORT}`);
});