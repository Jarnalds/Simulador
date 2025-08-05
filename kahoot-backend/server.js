const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const gameData = require('./scenarios.js');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://jarnalds.github.io',
    methods: ['GET', 'POST']
}));

const io = socketIo(server, {
    cors: {
        origin: "https://jarnalds.github.io",
        methods: ["GET", "POST"]
    }
});

let gameStarted = false;
let players = {};
let adminSocketId = null;
let acceptNewPlayers = true;
let currentScenarioId = null;

app.get('/', (req, res) => {
    res.send('Servidor de Simulacros (Backend) funcionando.');
});

// ... (otros endpoints si los tienes)

io.on('connection', (socket) => {
    console.log(`Nuevo usuario conectado: ${socket.id}`);

    socket.on('joinGame', ({ name, role, isAdmin }) => {
        if (isAdmin) {
            if (adminSocketId) {
                socket.emit('error', 'Ya hay un administrador conectado.');
                return;
            }
            adminSocketId = socket.id;
            const scenariosList = Object.entries(gameData).map(([id, data]) => ({
                id,
                name: data.name
            }));
            io.to(adminSocketId).emit('adminConnected', { scenarios: scenariosList });
            io.to(adminSocketId).emit('currentPlayers', Object.values(players).map(p => ({
                id: p.id,
                name: p.name,
                role: p.role
            })));
            console.log(`Administrador conectado: ${name}`);
        } else {
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
            if (gameStarted && currentScenarioId) {
                const scenarioInfo = gameData[currentScenarioId];
                if (scenarioInfo) {
                    // Enviar solo preguntas del rol para este jugador
                    const questionsForRole = scenarioInfo.roles[players[socket.id].role] || [];
                    io.to(socket.id).emit('gameStarted', {
                        scenarioName: scenarioInfo.name,
                        scenarioDescription: scenarioInfo.description,
                        questions: questionsForRole,
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
        Object.values(players).forEach(player => {
            player.score = 0;
            player.currentQuestionIndex = 0;
        });
        const scenarioInfo = gameData[currentScenarioId];
        io.emit('gameStartedAdmin');
        io.emit('gameStarted', {
            scenarioName: scenarioInfo.name,
            scenarioDescription: scenarioInfo.description,
            questions: [], // no envíes todas, enviarás pregunta por pregunta
        });
        io.emit('playGameStartSound');
        console.log('Juego iniciado');
    });

    socket.on('playerReadyForQuestions', () => {
        const player = players[socket.id];
        if (!player) return;
        const scenario = gameData[currentScenarioId];
        if (!scenario) return;
        const questionsForRole = scenario.roles[player.role] || [];
        const currentQuestion = questionsForRole[player.currentQuestionIndex];
        if (currentQuestion) {
            io.to(socket.id).emit('newQuestion', {
                id: currentQuestion.id,
                question: currentQuestion.question,
                options: currentQuestion.options,
            });
        } else {
            io.to(socket.id).emit('gameFinishedForPlayer', { finalScore: player.score });
        }
    });

socket.on('submitAnswer', ({ selectedOption }) => {
    const player = players[socket.id];
    if (!player) return;

    if (!gameStarted || !currentScenarioId) {
        console.log('Respuesta recibida:', selectedOption);
        io.to(socket.id).emit('error', 'El juego no está activo.');
        return;
    }

    const scenario = gameData[currentScenarioId];
    if (!scenario) return;

    const questionsForRole = scenario.roles[player.role] || [];
    const currentQuestion = questionsForRole[player.currentQuestionIndex];
    if (!currentQuestion) {
        io.to(socket.id).emit('error', 'No hay pregunta actual.');
        return;
    }

    console.log(`Jugador: ${player.name}`);
    console.log(`Respuesta recibida: "${selectedOption}"`);
    console.log(`Respuesta correcta: "${currentQuestion.answer}"`);

    const isCorrect = selectedOption === currentQuestion.answer;

    if (isCorrect) {
        player.score += 1;
    }

    player.currentQuestionIndex++;

    io.to(socket.id).emit('answerResult', {
        correct: isCorrect,
        score: player.score,
        correctOption: currentQuestion.answer,
    });

    // Enviar siguiente pregunta automáticamente
    const nextQuestion = questionsForRole[player.currentQuestionIndex];
    if (nextQuestion) {
        io.to(socket.id).emit('newQuestion', {
            id: nextQuestion.id,
            question: nextQuestion.question,
            options: nextQuestion.options,
        });
    } else {
        io.to(socket.id).emit('gameFinishedForPlayer', { finalScore: player.score });
    }

    // Si todos terminan, mandar resultados
    const allFinished = Object.values(players).every(p => {
        const qs = scenario.roles[p.role] || [];
        return p.currentQuestionIndex >= qs.length;
    });

    if (allFinished) {
        const finalScores = Object.values(players).map(p => ({
            name: p.name,
            role: p.role,
            score: p.score,
        }));
        io.emit('finalResults', finalScores);
        gameStarted = false;
        acceptNewPlayers = true;
        currentScenarioId = null;
        console.log('Juego finalizado, resultados enviados');
    }
});


    // Enviar siguiente pregunta automáticamente
    const nextQuestion = questionsForRole[player.currentQuestionIndex];
    if (nextQuestion) {
        io.to(socket.id).emit('newQuestion', {
            id: nextQuestion.id,
            question: nextQuestion.question,
            options: nextQuestion.options,
        });
    } else {
        io.to(socket.id).emit('gameFinishedForPlayer', { finalScore: player.score });
    }

    // Si todos terminan, mandar resultados
    const allFinished = Object.values(players).every(p => {
        const qs = scenario.roles[p.role] || [];
        return p.currentQuestionIndex >= qs.length;
    });

    if (allFinished) {
        const finalScores = Object.values(players).map(p => ({
            name: p.name,
            role: p.role,
            score: p.score,
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
