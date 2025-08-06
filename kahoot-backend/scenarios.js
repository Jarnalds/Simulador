const gameData = {
    'emergencia-medica': {
        name: 'Código Azul',
        description: 'Emergencia Médica en cortina 1',
        roles: {
            'diseñador': [
                { id: 'cc-dis-1', question: "¿Cómo ayuda el UX a prevenir ataques de ingeniería social?", options: ["Diseñando interfaces complejas", "Creando alertas claras y comprensibles", "Limitando la funcionalidad"], answer: "Creando alertas claras y comprensibles" },
                { id: 'cc-dis-2', question: "¿Qué aspecto del diseño es clave en un mensaje de alerta de seguridad?", options: ["Animaciones complejas", "Claridad y urgencia", "Uso de colores vibrantes"], answer: "Claridad y urgencia" },
                { id: 'cc-dis-3', question: "¿Qué papel juega la 'confianza' en la experiencia de usuario durante una crisis?", options: ["Es irrelevante", "Es fundamental para mantener la credibilidad", "Solo afecta a los nuevos usuarios"], answer: "Es fundamental para mantener la credibilidad" }
            ],
            'comunicador': [
                { id: 'cc-com-1', question: "¿Qué debe incluir un comunicado de prensa sobre una violación de datos?", options: ["Solo el nombre del CEO", "Transparencia, acciones tomadas y ayuda a afectados", "Justificaciones y evasivas"], answer: "Transparencia, acciones tomadas y ayuda a afectados" },
                { id: 'cc-com-2', question: "¿Cuál es el propósito de un plan de comunicación de crisis?", options: ["Evitar que la noticia salga", "Preparar respuestas y controlar la narrativa", "Culpar a los responsables"], answer: "Preparar respuestas y controlar la narrativa" },
                { id: 'cc-com-3', question: "¿Qué canal es vital para informar rápidamente a los afectados?", options: ["Vallas publicitarias", "Email y sitio web oficial", "Redes sociales personales"], answer: "Email y sitio web oficial" }
            ]
        }
    },

    'crisis-ciberseguridad': {
        name: 'Crisis de Ciberseguridad',
        description: '¡Alerta! Un ataque de ciberseguridad ha ocurrido.',
        roles: {
            'diseñador': [
                { id: 'cc-dis-4', question: "¿Qué aspecto es esencial en el diseño para crisis?", options: ["Claridad visual", "Colores brillantes", "Animaciones largas"], answer: "Claridad visual" },
                { id: 'cc-dis-5', question: "¿Cómo puede el diseño prevenir errores humanos?", options: ["Interfaces confusas", "Alertas claras y directas", "Reduciendo funciones"], answer: "Alertas claras y directas" },
                { id: 'cc-dis-6', question: "¿Qué es la accesibilidad en diseño?", options: ["Hacer interfaces solo para expertos", "Hacer interfaces usables para todos", "Eliminar funcionalidades"], answer: "Hacer interfaces usables para todos" }
            ],
            'comunicador': [
                { id: 'cc-com-4', question: "¿Qué debe contener un comunicado de crisis?", options: ["Excusas", "Transparencia y acciones tomadas", "Nada"], answer: "Transparencia y acciones tomadas" },
                { id: 'cc-com-5', question: "¿Cuál es el objetivo de un plan de comunicación?", options: ["Controlar la narrativa", "Esconder información", "Culpar a terceros"], answer: "Controlar la narrativa" },
                { id: 'cc-com-6', question: "¿Qué canal es más rápido para informar?", options: ["Email", "Vallas publicitarias", "Redes sociales personales"], answer: "Email" }
            ]
        }
    },
};

module.exports = gameData;