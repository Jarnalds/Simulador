// backend/kahoot-backend/server.js

// 1. Importaciones de módulos necesarios
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Asegúrate de tener 'cors' instalado (npm install cors)
console.log('1. Módulos importados: express, http, socket.io, cors.');

// 2. Importar los datos del juego (escenarios, roles y preguntas)
const gameData = require('./scenarios.js'); // Asegúrate de que este archivo exista y esté en la misma carpeta
console.log('2. Datos del juego (escenarios y preguntas) cargados.');
console.log('2a. Escenarios disponibles:', Object.keys(gameData));

// 3. Configuración inicial del servidor Express y Socket.IO
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000; // Usa el puerto de entorno de Render o 3000
console.log(`3. Servidor Express y Socket.IO configurado. Puerto asignado: ${PORT}`);

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
// Permite que tu frontend (https://jarnalds.github.io) se conecte a tu backend
app.use(cors({
    origin: 'https://jarnalds.github.io', // ¡Asegúrate de que esta sea exactamente la URL de tu frontend!
    methods: ['GET', 'POST']
}));
console.log('4. Middleware CORS configurado para Express con origen:', 'https://jarnalds.github.io');

// Configuración de Socket.IO para permitir conexiones desde el origen de tu frontend
const io = socketIo(server, {
    cors: {
        origin: "https://jarnalds.github.io", // ¡Asegúrate de que esta sea exactamente la URL de tu frontend!
        methods: ["GET", "POST"]
    }
});
console.log('5. Socket.IO configurado con CORS para origen:', io.engine.opts.cors.origin);

// 4. Variables de estado del juego
let gameStarted = false; // Indica si el juego ha sido iniciado por el administrador
let players = {}; // Formato: { socketId: { id, name, role, score, currentQuestionIndex } }
let adminSocketId = null; // Almacena el ID de socket del administrador conectado
let acceptNewPlayers = true; // Controla si nuevos jugadores pueden unirse
let currentScenarioId = null; // Almacena el ID del escenario de juego activo
console.log('7. Variables de estado del juego inicializadas.');

// 5. Rutas HTTP
// Ruta simple para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor de Simulacros (Backend) está funcionando.');
    console.log('Ruta "/" accedida. Enviando mensaje de confirmación.');
});

// Nueva ruta para descargar resultados en formato CSV
app.get('/download-results', (req, res) => {
    console.log('Solicitud recibida para /download-results');

    if (!currentScenarioId || !gameData[currentScenarioId]) {
        console.log('No hay un escenario activo o válido para descargar resultados.');
        return res.status(400).send('No hay un escenario activo o válido para descargar resultados.');
    }

    const scenarioName = gameData[currentScenarioId].name || 'Sin Nombre'; // Obtener nombre amigable del escenario

    // Recopilar los datos de los jugadores (incluyendo puntuaciones)
    const finalScores = Object.values(players).map(player => ({
        name: player.name,
        role: player.role,
        score: player.score
    }));

    if (finalScores.length === 0) {
        console.log('No hay jugadores con resultados para descargar.');
        return res.status(404).send('No hay resultados disponibles para descargar.');
    }

    // Convertir los datos a formato CSV
    const headers = ['Nombre', 'Rol', 'Puntuación'];
    const csvRows = [];

    // Añadir encabezados
    csvRows.push(headers.join(','));

    // Añadir datos de cada jugador
    finalScores.forEach(player => {
        // Asegúrate de escapar comas si los nombres/roles pueden contenerlas
        const sanitizedName = `"${player.name.replace(/"/g, '""')}"`;
        const sanitizedRole = `"${player.role.replace(/"/g, '""')}"`;
        csvRows.push([sanitizedName, sanitizedRole, player.score].join(','));
    });

    const csvString = csvRows.join('\n');
    console.log('CSV generado para descarga.');

    // Enviar el archivo CSV como descarga
    res.header('Content-Type', 'text/csv');
    res.attachment(`resultados_simulacro_${scenarioName.replace(/\s+/g, '_').toLowerCase()}.csv`); // Nombre del archivo dinámico
    res.send(csvString);
    console.log('Archivo CSV enviado para descarga.');
});

console.log('6. Rutas HTTP configuradas: "/" y "/download-results".');

// 7. Manejo de conexiones de Socket.IO
io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado:', socket.id);

    // Evento 'joinGame': Un usuario intenta unirse como jugador o administrador
    socket.on('joinGame', ({ name, role, isAdmin }) => {
        console.log(`Evento joinGame recibido de ${socket.id}: ${name}, ${role}, Admin: ${isAdmin}`);
        if (isAdmin) {
            // Lógica para el administrador
            if (adminSocketId) {
                socket.emit('error', 'Ya hay un administrador conectado.');
                console.log(`Intento de conexión de admin ${name} fallido: ya hay uno.`);
                return;
            }
            adminSocketId = socket.id; // Asignar el socket actual como administrador
            io.to(adminSocketId).emit('adminConnected'); // Notificar al admin que se conectó exitosamente
            io.to(adminSocketId).emit('currentPlayers', Object.values(players).map(p => ({ id: p.id, name: p.name, role: p.role })));
            console.log(`Admin ${name} conectado: ${socket.id}`);
        } else {
            // Lógica para los jugadores
            if (!acceptNewPlayers) { // No permitir nuevas conexiones si las inscripciones están cerradas
                socket.emit('error', 'El juego ha cerrado las inscripciones o ya ha finalizado.');
                console.log(`Jugador ${name} intentó unirse, pero las inscripciones están cerradas.`);
                return;
            }
            if (players[socket.id]) {
                socket.emit('error', 'Ya estás conectado al juego.');
                console.log(`Intento de conexión de jugador ${name} fallido: ya conectado.`);
                return;
            }
            players[socket.id] = { id: socket.id, name, role, score: 0, currentQuestionIndex: 0 };
            console.log(`Jugador ${name} (${role}) conectado: ${socket.id}`);
            io.emit('playerJoined', { id: socket.id, name, role }); // Emitir a todos que un jugador se unió

            if (adminSocketId) { // Notificar al admin si ya está conectado
                io.to(adminSocketId).emit('playerJoined', { id: socket.id, name, role });
            }

            // Aquí YA NO enviamos la primera pregunta si el juego está iniciado.
            // Ahora el jugador recibirá el evento 'gameStarted' con los detalles del escenario y luego
            // enviará 'playerReadyForQuestions' cuando esté listo.
            if (gameStarted && currentScenarioId) {
                const scenarioInfo = gameData[currentScenarioId];
                if (scenarioInfo) {
                    io.to(socket.id).emit('gameStarted', {
                        scenarioName: scenarioInfo.name,
                        scenarioDescription: scenarioInfo.description
                    });
                    io.to(socket.id).emit('playGameStartSound');
                } else {
                    io.to(socket.id).emit('error', 'Error: Escenario no encontrado o incompleto.');
                    console.error(`Error: Escenario ${currentScenarioId} no encontrado para nuevo jugador que se une a juego ya iniciado.`);
                }
            } else {
                io.to(socket.id).emit('waitingForGameToStart');
            }
        }
    });

    // Evento 'selectScenario': El administrador selecciona el escenario de juego
    socket.on('selectScenario', (scenarioId) => {
        if (socket.id === adminSocketId) {
            if (gameData[scenarioId]) {
                currentScenarioId = scenarioId;
                io.to(adminSocketId).emit('scenarioSelected', gameData[scenarioId].name);
                console.log(`Admin ${socket.id} seleccionó el escenario: ${gameData[scenarioId].name}`);
                // Opcional: Notificar a los jugadores que el escenario ha sido seleccionado
                // io.emit('scenarioSet', gameData[scenarioId].name);
            } else {
                io.to(adminSocketId).emit('error', 'Escenario no válido.');
                console.log(`Admin ${socket.id} intentó seleccionar escenario inválido: ${scenarioId}`);
            }
        } else {
            socket.emit('error', 'Solo el administrador puede seleccionar el escenario.');
        }
    });

    // Evento 'startGame': El administrador inicia el juego
    socket.on('startGame', () => {
        console.log(`Evento startGame recibido de ${socket.id}. AdminSocketId: ${adminSocketId}, GameStarted: ${gameStarted}`);
        if (socket.id === adminSocketId && !gameStarted) {
            if (!currentScenarioId) { // Verificar que se haya seleccionado un escenario
                io.to(adminSocketId).emit('error', 'Por favor, selecciona un escenario antes de iniciar el juego.');
                console.log('Admin intentó iniciar juego sin escenario seleccionado.');
                return;
            }
            if (Object.keys(players).length === 0) {
                io.to(adminSocketId).emit('error', 'No hay jugadores conectados para iniciar el juego.');
                console.log('Admin intentó iniciar juego sin jugadores.');
                return;
            }
            gameStarted = true;
            acceptNewPlayers = false; // Cierra las inscripciones una vez que el juego ha iniciado
            console.log('Inscripciones cerradas: acceptNewPlayers = false');

            const scenarioInfo = gameData[currentScenarioId];
            if (scenarioInfo && scenarioInfo.name && scenarioInfo.description) { // Asegúrate de que la descripción exista
                // Modificado: Ahora enviamos el nombre Y la descripción del escenario
                io.emit('gameStarted', {
                    scenarioName: scenarioInfo.name,
                    scenarioDescription: scenarioInfo.description
                });
                io.emit('playGameStartSound'); // Notificar a los clientes que reproduzcan el sonido de inicio
                console.log(`Juego iniciado con escenario "${scenarioInfo.name}". Enviando detalles a jugadores.`);
            } else {
                io.to(adminSocketId).emit('error', 'Error: El escenario seleccionado no tiene información completa (nombre o descripción).');
                console.error(`Error: Escenario ${currentScenarioId} no encontrado o incompleto en gameData.`);
                gameStarted = false; // Resetear estado si hay un error crítico
                acceptNewPlayers = true;
                return;
            }

            // --- IMPORTANTE: ELIMINAR O COMENTAR ESTAS LÍNEAS AQUÍ ---
            // Object.values(players).forEach(player => {
            //     player.currentQuestionIndex = 0;
            //     sendQuestionToPlayer(player.id); // ¡NO enviamos la primera pregunta aquí!
            // });
            // --- FIN DE LA ELIMINACIÓN ---

            io.to(adminSocketId).emit('gameStartedAdmin');

        } else if (socket.id !== adminSocketId) {
            socket.emit('error', 'Solo el administrador puede iniciar el juego.');
            console.log('Jugador intentó iniciar juego.');
        } else {
            socket.emit('error', 'El juego ya ha comenzado.');
            console.log('Admin intentó iniciar juego ya iniciado.');
        }
    });

    // NUEVO EVENTO: El jugador notifica que está listo para las preguntas
    socket.on('playerReadyForQuestions', () => {
        const player = players[socket.id];
        if (player && gameStarted && currentScenarioId) {
            console.log(`Jugador ${player.name} (${player.id}) está listo para las preguntas del escenario ${currentScenarioId}.`);
            // Asegúrate de que el índice de pregunta esté en 0 solo si es el inicio del juego para ese jugador.
            // Esto ya debería estar manejado cuando el jugador se une o el admin inicia el juego.
            // Aquí simplemente enviamos la pregunta actual/primera.
            sendQuestionToPlayer(socket.id);
        } else {
            console.log(`playerReadyForQuestions recibido de ${socket.id} pero no válido (jugador no encontrado, juego no iniciado o escenario no seleccionado).`);
            socket.emit('error', 'No estás en un estado válido para recibir preguntas.');
        }
    });


    // Evento 'submitAnswer': Un jugador envía su respuesta a una pregunta
    socket.on('submitAnswer', ({ questionId, selectedOption }) => {
        console.log(`Evento submitAnswer de ${socket.id} para QID: ${questionId}, Option: ${selectedOption}`);
        const player = players[socket.id];
        if (!player || !gameStarted || !currentScenarioId) {
            console.log('Respuesta recibida pero jugador no válido, juego no iniciado o escenario no seleccionado.');
            return;
        }

        const roleQuestions = gameData[currentScenarioId].roles[player.role]; // Obtener preguntas del escenario y rol
        if (!roleQuestions) {
            console.log(`No hay preguntas para el rol ${player.role} del jugador ${player.name} en el escenario ${currentScenarioId}.`);
            return;
        }

        const currentQuestion = roleQuestions[player.currentQuestionIndex];
        if (!currentQuestion || currentQuestion.id !== questionId) {
            socket.emit('error', 'Esta pregunta ya no es válida o ya fue respondida.');
            console.log(`Pregunta no válida para ${player.name}. Expected ID: ${currentQuestion ? currentQuestion.id : 'N/A'}, Received ID: ${questionId}`);
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

        setTimeout(() => {
            player.currentQuestionIndex++;
            sendQuestionToPlayer(socket.id);
        }, 1000); // Dar un pequeño retraso antes de la siguiente pregunta/fin
    });

    // Evento 'disconnect': Un usuario se desconecta
    socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id);
        if (socket.id === adminSocketId) {
            adminSocketId = null;
            gameStarted = false;
            acceptNewPlayers = true; // Si el admin se desconecta, las inscripciones se abren
            currentScenarioId = null; // El escenario también se resetea
            Object.values(players).forEach(player => {
                io.to(player.id).emit('adminDisconnectedNotification', 'El administrador se ha desconectado. El juego ha terminado.');
            });
            console.log('Administrador desconectado. Estado del juego y escenario reseteado.');
            players = {}; // Limpiar jugadores al desconectarse el admin
            io.emit('resetGameFrontend'); // Notificar a los frontends que reseteen
        } else if (players[socket.id]) {
            const disconnectedPlayer = players[socket.id];
            delete players[socket.id];
            io.emit('playerLeft', { id: socket.id, name: disconnectedPlayer.name });
            if (adminSocketId) {
                io.to(adminSocketId).emit('playerLeft', { id: socket.id, name: disconnectedPlayer.name });
            }
            console.log(`Jugador ${disconnectedPlayer.name} ha dejado el juego.`);
        }
        checkGameEndAndSendResults(); // Revisar si el juego termina después de una desconexión
    });

    // Función auxiliar para enviar una pregunta a un jugador específico
    function sendQuestionToPlayer(playerId) {
        const player = players[playerId];
        if (!player) {
            console.log(`Error: No se encontró el jugador con ID ${playerId} para enviar pregunta.`);
            return;
        }

        if (!currentScenarioId || !gameData[currentScenarioId]) {
            console.log('Error: No hay escenario seleccionado o el escenario es inválido para enviar preguntas.');
            io.to(playerId).emit('error', 'Error interno: No hay escenario de juego activo.');
            return;
        }
        const scenarioQuestions = gameData[currentScenarioId].roles[player.role];

        if (!scenarioQuestions) {
            console.log(`Error: No hay preguntas definidas para el rol ${player.role} en el escenario ${currentScenarioId}.`);
            io.to(playerId).emit('error', `Error: No hay preguntas para tu rol en este escenario.`);
            return;
        }

        if (player.currentQuestionIndex < scenarioQuestions.length) {
            const questionToSend = { ...scenarioQuestions[player.currentQuestionIndex] };
            delete questionToSend.answer; // ¡MUY IMPORTANTE! No enviar la respuesta al cliente
            io.to(playerId).emit('newQuestion', questionToSend);
            console.log(`Enviando pregunta ${questionToSend.id} a ${player.name} (${player.role}) en escenario ${currentScenarioId}. Índice: ${player.currentQuestionIndex}`);
        } else {
            io.to(playerId).emit('gameFinishedForPlayer', { finalScore: player.score });
            console.log(`${player.name} (${player.role}) ha terminado sus preguntas en escenario ${currentScenarioId} con una puntuación de ${player.score}.`);
            // Después de que un jugador termina, verificar si todos han terminado para enviar resultados al admin.
            checkGameEndAndSendResults();
        }
    }

    // Función auxiliar para verificar si el juego ha terminado para todos los jugadores
    function checkGameEndAndSendResults() {
        if (!gameStarted || !currentScenarioId || Object.keys(players).length === 0) {
            // El juego no ha comenzado, no hay escenario, o no hay jugadores
            return;
        }

        const allPlayersFinished = Object.values(players).every(player => {
            const roleQuestions = gameData[currentScenarioId].roles[player.role];
            return player.currentQuestionIndex >= (roleQuestions ? roleQuestions.length : 0);
        });

        if (allPlayersFinished) {
            console.log('Todos los jugadores han terminado. Recopilando resultados finales.');
            gameStarted = false;
            acceptNewPlayers = false; // Cierra las inscripciones al finalizar el juego
            
            const finalScores = Object.values(players).map(player => ({
                id: player.id,
                name: player.name,
                role: player.role,
                score: player.score
            }));

            if (adminSocketId) {
                io.to(adminSocketId).emit('finalResults', finalScores);
                console.log('Resultados finales enviados al administrador.');
            } else {
                console.log('No hay administrador conectado para enviar los resultados finales.');
            }
        }
    }
}); // Fin de io.on('connection')

console.log('8. Listeners de Socket.IO "connection" y funciones auxiliares definidas.');

// Esto debería ser lo último que se ejecuta para iniciar el servidor HTTP.
console.log('9. Intentando iniciar el servidor HTTP en server.listen()...');
server.listen(PORT, () => {
    console.log(`Servidor de Simulacros (Backend) escuchando en el puerto ${PORT}`);
    console.log(`Accede a http://localhost:${PORT}/ para verificar (si es local).`);
});

console.log('10. NOTA: Esta línea solo debería aparecer si el servidor no se inicia correctamente o se cierra inesperadamente después de listen.');