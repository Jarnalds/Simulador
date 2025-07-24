// backend/kahoot-backend/server.js

// 1. Importaciones de módulos necesarios
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Asegúrate de tener 'cors' instalado (npm install cors)
console.log('1. Módulos importados: express, http, socket.io, cors.'); // <-- LOG DE DEPURACIÓN

// 2. Importar las preguntas desde el archivo questions.js
const questionsByRole = require('./questions.js');
console.log('2. Preguntas cargadas desde questions.js.'); // <-- LOG DE DEPURACIÓN
console.log('2a. Estructura de questionsByRole:', Object.keys(questionsByRole)); // <-- LOG DE DEPURACIÓN: Verifica las claves del objeto

// 3. Configuración inicial del servidor Express y Socket.IO
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000; // Usa el puerto de entorno de Render o 3000
console.log(`3. Servidor Express y Socket.IO configurados. Puerto asignado: ${PORT}`); // <-- LOG DE DEPURACIÓN

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
// Esto permite que tu frontend (ej. en Netlify) se conecte a tu backend (en Render)
app.use(cors({
  origin: 'https://jarnalds.github.io', // Permite cualquier origen (NO USAR EN PRODUCCIÓN REAL)
  methods: ['GET', 'POST']
}));


console.log('4. Middleware CORS configurado para Express.'); // <-- LOG DE DEPURACIÓN

// Configuración de Socket.IO para permitir conexiones desde cualquier origen
const io = socketIo(server, {
    cors: {
        origin: "https://jarnalds.github.io", // ¡Asegúrate de que esta URL sea exactamente la de tu frontend!
        methods: ["GET", "POST"]
    }
});
console.log('5. Socket.IO configurado con CORS para origen:', io.engine.opts.cors.origin); // <-- LOG DE DEPURACIÓN

// 4. Ruta simple para verificar que el servidor está funcionando
// Al visitar la URL raíz del backend (ej. backend-6ya4.onrender.com/), verás este mensaje.
app.get('/', (req, res) => {
    res.send('Servidor de Mini Kahoot (Backend) está funcionando.');
    console.log('Ruta "/" accedida. Enviando mensaje de confirmación.'); // <-- LOG DE DEPURACIÓN
});
console.log('6. Ruta GET / configurada.'); // <-- LOG DE DEPURACIÓN

// ... (tu código server.js existente, después de app.get('/'))

// Nueva ruta para descargar resultados
app.get('/download-results', (req, res) => {
    console.log('Solicitud recibida para /download-results'); // Log de depuración

    // 1. Recopilar los datos de los jugadores (incluyendo puntuaciones)
    const finalScores = Object.values(players).map(player => ({
        name: player.name,
        role: player.role,
        score: player.score // Asegúrate de que player.score se actualice correctamente en tu lógica
    }));

    if (finalScores.length === 0) {
        console.log('No hay jugadores con resultados para descargar.');
        return res.status(404).send('No hay resultados disponibles para descargar.');
    }

    // 2. Convertir los datos a formato CSV
    const headers = ['Nombre', 'Rol', 'Puntuación'];
    const csvRows = [];

    // Añadir encabezados
    csvRows.push(headers.join(','));

    // Añadir datos de cada jugador
    finalScores.forEach(player => {
        csvRows.push([player.name, player.role, player.score].join(','));
    });

    const csvString = csvRows.join('\n');
    console.log('CSV generado:\n', csvString); // Log para ver el CSV generado

    // 3. Enviar el archivo CSV como descarga
    res.header('Content-Type', 'text/csv');
    res.attachment('resultados_kahoot.csv'); // Nombre del archivo que se descargará
    res.send(csvString);
    console.log('Archivo CSV enviado para descarga.'); // Log de depuración
});

// ... (el resto de tu código server.js, incluyendo io.on('connection'))



// 5. Variables de estado del juego
let gameStarted = false; // Indica si el juego ha sido iniciado por el administrador
// Objeto para almacenar los datos de los jugadores, incluyendo su puntuación y el índice de la pregunta actual
let players = {}; // Formato: { socketId: { name: "...", role: "...", score: 0, currentQuestionIndex: 0 } }
let adminSocketId = null; // Almacena el ID de socket del administrador conectado
console.log('7. Variables de estado del juego inicializadas.'); // <-- LOG DE DEPURACIÓN

// 6. Manejo de conexiones de Socket.IO
io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado:', socket.id); // Log cuando alguien se conecta

    // Evento 'joinGame': Un usuario intenta unirse como jugador o administrador
    socket.on('joinGame', ({ name, role, isAdmin }) => {
        console.log(`Evento joinGame recibido de ${socket.id}: ${name}, ${role}, Admin: ${isAdmin}`); // <-- LOG
        if (isAdmin) {
            // Lógica para el administrador
            if (adminSocketId) {
                socket.emit('error', 'Ya hay un administrador conectado.');
                console.log(`Intento de conexión de admin ${name} fallido: ya hay uno.`); // <-- LOG
                return;
            }
            adminSocketId = socket.id; // Asignar el socket actual como administrador
            io.to(adminSocketId).emit('adminConnected'); // Notificar al admin que se conectó exitosamente
            io.to(adminSocketId).emit('currentPlayers', Object.values(players).map(p => ({ id: p.id, name: p.name, role: p.role })));
            console.log(`Admin ${name} conectado: ${socket.id}`);
        } else {
            // Lógica para los jugadores
            if (players[socket.id]) {
                socket.emit('error', 'Ya estás conectado al juego.');
                console.log(`Intento de conexión de jugador ${name} fallido: ya conectado.`); // <-- LOG
                return;
            }
            players[socket.id] = { id: socket.id, name, role, score: 0, currentQuestionIndex: 0 };
            console.log(`Jugador ${name} (${role}) conectado: ${socket.id}`);
            io.emit('playerJoined', { id: socket.id, name, role }); // Emitir a todos que un jugador se unió

            if (adminSocketId) {
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

    // Evento 'startGame': El administrador inicia el juego
    socket.on('startGame', () => {
        console.log(`Evento startGame recibido de ${socket.id}. AdminSocketId: ${adminSocketId}, GameStarted: ${gameStarted}`); // <-- LOG
        if (socket.id === adminSocketId && !gameStarted) {
            if (Object.keys(players).length === 0) {
                io.to(adminSocketId).emit('error', 'No hay jugadores conectados para iniciar el juego.');
                console.log('Admin intentó iniciar juego sin jugadores.'); // <-- LOG
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
            console.log('Jugador intentó iniciar juego.'); // <-- LOG
        } else {
            socket.emit('error', 'El juego ya ha comenzado.');
            console.log('Admin intentó iniciar juego ya iniciado.'); // <-- LOG
        }
    });

    // Evento 'submitAnswer': Un jugador envía su respuesta a una pregunta
    socket.on('submitAnswer', ({ questionId, selectedOption }) => {
        console.log(`Evento submitAnswer de ${socket.id} para QID: ${questionId}, Option: ${selectedOption}`); // <-- LOG
        const player = players[socket.id];
        if (!player || !gameStarted) {
            console.log('Respuesta recibida pero jugador no válido o juego no iniciado.'); // <-- LOG
            return;
        }

        const roleQuestions = questionsByRole[player.role];
        if (!roleQuestions) {
            console.log(`No hay preguntas para el rol ${player.role} del jugador ${player.name}.`); // <-- LOG
            return;
        }

        const currentQuestion = roleQuestions[player.currentQuestionIndex];
        if (!currentQuestion || currentQuestion.id !== questionId) {
            socket.emit('error', 'Esta pregunta ya no es válida o ya fue respondida.');
            console.log(`Pregunta no válida para ${player.name}. Expected ID: ${currentQuestion ? currentQuestion.id : 'N/A'}, Received ID: ${questionId}`); // <-- LOG
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
            player.currentQuestionIndex++;
            sendQuestionToPlayer(socket.id);
        }, 1000);
    });

    // Evento 'disconnect': Un usuario se desconecta
    socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id); // <-- LOG
        if (socket.id === adminSocketId) {
            adminSocketId = null;
            gameStarted = false;
            Object.values(players).forEach(player => {
                io.to(player.id).emit('adminDisconnectedNotification', 'El administrador se ha desconectado. Tu juego puede continuar, pero no habrá más control central.');
            });
            console.log('Administrador desconectado. Estado del juego reseteado.'); // <-- LOG
        } else if (players[socket.id]) {
            const disconnectedPlayer = players[socket.id];
            delete players[socket.id];
            io.emit('playerLeft', { id: socket.id, name: disconnectedPlayer.name });
            if (adminSocketId) {
                io.to(adminSocketId).emit('playerLeft', { id: socket.id, name: disconnectedPlayer.name });
            }
            console.log(`Jugador ${disconnectedPlayer.name} ha dejado el juego.`); // <-- LOG
        }
    });

    // 7. Función auxiliar para enviar una pregunta a un jugador específico
    function sendQuestionToPlayer(playerId) {
        const player = players[playerId];
        if (!player) {
            console.log(`Error: No se encontró el jugador con ID ${playerId} para enviar pregunta.`); // <-- LOG
            return;
        }

        const playerRoleQuestions = questionsByRole[player.role];
        if (!playerRoleQuestions) {
            console.log(`Error: No hay preguntas definidas para el rol ${player.role} del jugador ${player.name}.`); // <-- LOG
            return;
        }

        if (player.currentQuestionIndex < playerRoleQuestions.length) {
            const questionToSend = { ...playerRoleQuestions[player.currentQuestionIndex] };
            delete questionToSend.answer; // ¡MUY IMPORTANTE! No enviar la respuesta al cliente
            io.to(playerId).emit('newQuestion', questionToSend);
            console.log(`Enviando pregunta ${questionToSend.id} a ${player.name} (${player.role}). Índice: ${player.currentQuestionIndex}`); // <-- LOG
        } else {
            io.to(playerId).emit('gameFinishedForPlayer', { finalScore: player.score });
            console.log(`${player.name} (${player.role}) ha terminado sus preguntas con una puntuación de ${player.score}.`); // <-- LOG
        }
    }
}); // Fin de io.on('connection')

console.log('8. Listener de Socket.IO "connection" y función sendQuestionToPlayer definidos.'); // <-- LOG DE DEPURACIÓN

// Esto debería ser lo último que se ejecuta para iniciar el servidor HTTP.
console.log('9. Intentando iniciar el servidor HTTP en server.listen()...'); // <-- LOG DE DEPURACIÓN
server.listen(PORT, () => {
    console.log(`Servidor de Mini Kahoot (Backend) escuchando en el puerto ${PORT}`);
    console.log(`Accede a http://localhost:${PORT}/ para verificar.`); // <-- LOG DE DEPURACIÓN
});

// ¡IMPORTANTE! Si ves este mensaje en la consola, algo está mal.
// Significa que la llamada a server.listen() no está manteniendo el proceso abierto,
// o que hay un error muy inusual que se produce *después* de que server.listen() es llamado,
// pero *antes* de que el callback de listen se ejecute, y que no detiene el proceso de forma limpia.
console.log('10. NOTA: Esta línea solo debería aparecer si el servidor no se inicia correctamente o se cierra inesperadamente después de listen.'); // <-- LOG DE DEPURACIÓN
