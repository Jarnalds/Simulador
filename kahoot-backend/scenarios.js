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

'evacuacion-parcial': {
    name: 'Evacuación Parcial',
    description: 'Preguntas sobre los protocolos de actuación en un incidente de evacuación parcial, con enfoque en los roles y sus acciones.',
    roles: {
        'Operador_1': [
            {
                id: 'op1-q1',
                question: "¿Cuál es el primer paso del Operador 1 al iniciar el protocolo de evacuación parcial?",
                options: [
                    "Llamar a emergencias",
                    "Recabar información del evento",
                    "Validar si el área evacuada incluye el CCM",
                    "Escalar a LP",
                    "Asumir el rol de vocero",
                    "Comunicarse con los guardias"
                ],
                answer: "Validar si el área evacuada incluye el CCM"
            },
            {
                id: 'op1-q2',
                question: "Si el CCM NO evacua, ¿cuál es el siguiente paso para el Operador 1 después de recabar la información?",
                options: [
                    "Mantener el rol de vocero",
                    "Comunicarse con los guardias",
                    "Llamar a emergencias",
                    "Monitorear cámaras",
                    "Colocar el seguro",
                    "Describir la zona visualizada en voz alta"
                ],
                answer: "Llamar a emergencias"
            },
            {
                id: 'op1-q3',
                question: "¿Cuál es la responsabilidad principal del Operador 1 una vez que el protocolo está en marcha?",
                options: [
                    "Seguimiento de cámaras",
                    "Comunicación verbal constante en voz alta",
                    "Validar si el CCM es evacuado",
                    "Informar novedades a los operadores 3 y 4",
                    "Mantener el rol de vocero",
                    "Escribir un informe detallado del incidente"
                ],
                answer: "Mantener el rol de vocero"
            }
        ],
        'Operador_2': [
            {
                id: 'op2-q1',
                question: "Si el CCM NO evacua, ¿cuál es la primera acción del Operador 2?",
                options: [
                    "Recabar información del evento",
                    "Monitorear cámaras",
                    "Colocar seguro",
                    "Llamar a emergencias",
                    "Validar área evacuada",
                    "Informar novedades al vocero"
                ],
                answer: "Colocar seguro"
            },
            {
                id: 'op2-q2',
                question: "¿Qué rol asume el Operador 2 una vez que el seguro está colocado?",
                options: [
                    "Comunicación con guardias",
                    "Despacho de emergencias",
                    "Seguimiento de cámaras",
                    "Validación del área evacuada",
                    "Informe de novedades al vocero",
                    "Colocación del seguro"
                ],
                answer: "Monitorear cámaras"
            },
            {
                id: 'op2-q3',
                question: "¿A quién debe informar el Operador 2 sobre las novedades del incidente?",
                options: [
                    "Al Operador 3",
                    "A los guardias",
                    "Al vocero (Operador 1)",
                    "A su supervisor",
                    "Al equipo de emergencias",
                    "A la policía"
                ],
                answer: "Al vocero (Operador 1)"
            }
        ],
        'Operador_3': [
            {
                id: 'op3-q1',
                question: "Si el CCM NO es evacuado, ¿cuál es la principal responsabilidad del Operador 3?",
                options: [
                    "Llamar a emergencias",
                    "Monitorear cámaras",
                    "Recabar información del evento",
                    "Comunicación verbal en voz alta",
                    "Validar si el CCM es evacuado",
                    "Seguimiento de cámaras (monitoreo interno/externo)"
                ],
                answer: "Seguimiento de cámaras (monitoreo interno/externo)"
            },
            {
                id: 'op3-q2',
                question: "¿Cuál es el requisito de comunicación específico para el Operador 3?",
                options: [
                    "Comunicación verbal constante en voz alta",
                    "Enviar un correo con las novedades",
                    "Comunicación a través de chat",
                    "Informar únicamente al vocero",
                    "Solo comunicarse si hay un incidente grave",
                    "No comunicarse para evitar pánico"
                ],
                answer: "Comunicación verbal constante en voz alta"
            }
        ],
        'Operador_4': [
            {
                id: 'op4-q1',
                question: "Al igual que el Operador 3, si el CCM NO es evacuado, ¿cuál es la principal responsabilidad del Operador 4?",
                options: [
                    "Comunicación con guardias",
                    "Comunicación clara y continua",
                    "Seguimiento con cámaras",
                    "Validar si el CCM es evacuado",
                    "Informar novedades al vocero",
                    "Escalamiento a LP"
                ],
                answer: "Seguimiento con cámaras"
            },
            {
                id: 'op4-q2',
                question: "¿Qué tipo de comunicación debe mantener el Operador 4?",
                options: [
                    "Comunicación únicamente a través de radio",
                    "Comunicación intermitente para no saturar los canales",
                    "Comunicación clara y continua sobre la zona visualizada",
                    "Comunicación solo con los guardias",
                    "Comunicación únicamente a través de chat",
                    "Comunicación en voz alta y constante"
                ],
                answer: "Comunicación clara y continua sobre la zona visualizada"
            }
        ]
    }
}

};

module.exports = gameData;