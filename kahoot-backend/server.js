// backend/kahoot-backend/server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const gameData = require('./scenarios.js'); // archivo con escenarios

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://jarnalds.github.io', // Cambia según tu frontend
    methods: ['GET', 'POST']
}));

const io = socketIo(server, {
    cors: {
        origin: "https://jarnalds.github.io", // Cambia según tu frontend
        methods: ["GET", "POST"]
    }
});

let gameStarted = false;
let players = {};
let adminSocketId = null;
let acceptNewPlayers = true;
let currentScenarioId = null;

// Ruta para test básico
app.get('/', (req, res) => {
    res.send('Servidor de Simulacros (Backend) funcionando.');
});

// Endpoint para obtener roles únicos de todos los escenarios
app.get('/roles', (req, res) => {
  const rolesSet = new Set();

  Object.values(gameData).forEach(scenario => {
    Object.keys(scenario.roles).forEach(role => rolesSet.add(role));
  });

  const rolesArray = Array.from(rolesSet);
  res.json(rolesArray);
});





// Ruta para descargar resultados en CSV
app.get('/download-results', (req, res) => {
    if (!currentScenarioId || !gameData[currentScenarioId]) {
        return res.status(400).send('No hay un escenario activo o válido para descargar resultados.');
    }

    const scenarioName = gameData[currentScenarioId].name || 'Sin_Nombre';

    const finalScores = Object.values(players).map(player => ({
        name: player.name,
        role: player.role,
        score: player.score
    }));

    if (finalScores.length === 0) {
        return res.status(404).send('No hay resultados disponibles para descargar.');
    }

    const headers = ['Nombre', 'Rol', 'Puntuación'];
    const csvRows = [];
    csvRows.push(headers.join(','));

    finalScores.forEach(player => {
        const sanitizedName = `"${player.name.replace(/"/g, '""')}"`;
        const sanitizedRole = `"${player.role.replace(/"/g, '""')}"`;
        csvRows.push([sanitizedName, sanitizedRole, player.score].join(','));
    });

    const csvString = csvRows.join('\n');

    res.header('Content-Type', 'text/csv');
    res.attachment(`resultados_simulacro_${scenarioName.replace(/\s+/g, '_').toLowerCase()}.csv`);
    res.send(csvString);
});

io.on('connection', (socket) => {
    console.log(`Nuevo usuario conectado: ${socket.id}`);

    socket.on('joinGame', ({ name, role, isAdmin }) => {
        console.log(`joinGame: ${name}, admin: ${isAdmin}`);

        if (isAdmin) {
            if (adminSocketId) {
                socket.emit('error', 'Ya hay un administrador conectado.');
                return;
            }
            adminSocketId = socket.id;

            // Enviar lista de escenarios al admin
            const scenariosList = Object.entries(gameData).map(([id, data]) => ({
                id,
                name: data.name
            }));

            io.to(adminSocketId).emit('adminConnected', { scenarios: scenariosList });

            // Enviar lista actual de jugadores al admin
            io.to(adminSocketId).emit('currentPlayers', Object.values(players).map(p => ({
                id: p.id,
                name: p.name,
                role: p.role
            })));

            console.log(`Administrador conectado: ${name}`);
        } else {
            // Jugador normal
            if (!acceptNewPlayers) {
                socket.emit('error', 'El juego ha cerrado las inscripciones o ya ha finalizado.');
                return;
            }
            if (players[socket.id]) {
                socket.emit('error', 'Ya estás conectado al juego.');
                return;
            }
            players[socket.id] = {
                id: socket.id,
                name,
                role: role || 'Jugador',
                score: 0,
                currentQuestionIndex: 0,
            };

            io.emit('playerJoined', { id: socket.id, name, role: players[socket.id].role });

            if (adminSocketId) {
                io.to(adminSocketId).emit('playerJoined', { id: socket.id, name, role: players[socket.id].role });
            }

            // Si juego ya inició, mandar escenario y empezar para este jugador
            if (gameStarted && currentScenarioId) {
                const scenarioInfo = gameData[currentScenarioId];
                if (scenarioInfo) {
                    io.to(socket.id).emit('gameStarted', {
                        scenarioName: scenarioInfo.name,
                        scenarioDescription: scenarioInfo.description,
                        questions: scenarioInfo.questions,
                    });
                    io.to(socket.id).emit('playGameStartSound');
                } else {
                    io.to(socket.id).emit('error', 'Error: Escenario no encontrado o incompleto.');
                }
            } else {
                io.to(socket.id).emit('waitingForGameToStart');
            }
        }
    });

    socket.on('selectScenario', (scenarioId) => {
        if (socket.id !== adminSocketId) {
            socket.emit('error', 'Solo el administrador puede seleccionar escenarios.');
            return;
        }
        if (!gameData[scenarioId]) {
            socket.emit('error', 'Escenario no válido.');
            return;
        }

        currentScenarioId = scenarioId;
        gameStarted = false;
        acceptNewPlayers = true;

        io.emit('scenarioSelected', gameData[scenarioId].name);
        console.log(`Escenario seleccionado: ${gameData[scenarioId].name}`);
    });

    socket.on('startGame', () => {
        if (socket.id !== adminSocketId) {
            socket.emit('error', 'Solo el administrador puede iniciar el juego.');
            return;
        }
        if (!currentScenarioId) {
            socket.emit('error', 'No se ha seleccionado un escenario.');
            return;
        }
        gameStarted = true;
        acceptNewPlayers = false;

        // Reiniciar puntajes y preguntas de los jugadores
        Object.values(players).forEach(player => {
            player.score = 0;
            player.currentQuestionIndex = 0;
        });

        const scenarioInfo = gameData[currentScenarioId];

        io.emit('gameStartedAdmin');
        io.emit('gameStarted', {
            scenarioName: scenarioInfo.name,
            scenarioDescription: scenarioInfo.description,
            questions: scenarioInfo.questions,
        });
        io.emit('playGameStartSound');

        console.log('Juego iniciado');
    });

    socket.on('submitAnswer', ({ playerId, answerIndex }) => {
        const player = players[playerId];
        if (!player) return;

        if (!gameStarted || !currentScenarioId) {
            socket.to(playerId).emit('error', 'El juego no está activo.');
            return;
        }

        const scenario = gameData[currentScenarioId];
        if (!scenario) return;

        const questions = scenario.questions || [];
        const currentQuestion = questions[player.currentQuestionIndex];
        if (!currentQuestion) {
            socket.to(playerId).emit('error', 'No hay pregunta actual.');
            return;
        }

        const isCorrect = answerIndex === currentQuestion.correctAnswerIndex;

        if (isCorrect) {
            player.score += currentQuestion.points || 1;
        }

        player.currentQuestionIndex++;

        // Informar al jugador si fue correcto y cuál es la siguiente pregunta o final
        io.to(playerId).emit('answerResult', {
            correct: isCorrect,
            currentScore: player.score,
            nextQuestion: questions[player.currentQuestionIndex] || null
        });

        // Si ya terminó todas las preguntas, revisar si todos terminaron para enviar resultados
        const allFinished = Object.values(players).every(p => p.currentQuestionIndex >= questions.length);
        if (allFinished) {
            // Enviar resultados finales a admin y a todos
            const finalScores = Object.values(players).map(p => ({
                name: p.name,
                role: p.role,
                score: p.score
            }));

            io.emit('finalResults', finalScores);
            gameStarted = false;
            acceptNewPlayers = true;
            currentScenarioId = null;
            console.log('Juego finalizado, resultados enviados');
        }
    });

    socket.on('disconnect', () => {
        console.log(`Usuario desconectado: ${socket.id}`);

        if (socket.id === adminSocketId) {
            // Resetear estado del juego al desconectar admin
            adminSocketId = null;
            gameStarted = false;
            acceptNewPlayers = true;
            currentScenarioId = null;
            players = {};

            io.emit('adminDisconnectedNotification', 'El administrador se ha desconectado. El juego ha sido reiniciado.');
            io.emit('resetGameFrontend');
            console.log('Administrador desconectado, juego reiniciado');
        } else if (players[socket.id]) {
            const player = players[socket.id];
            delete players[socket.id];
            io.emit('playerLeft', player);
            if (adminSocketId) {
                io.to(adminSocketId).emit('playerLeft', player);
            }
            console.log(`Jugador ${player.name} desconectado`);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor de Simulacros (Backend) escuchando en el puerto ${PORT}`);
});
