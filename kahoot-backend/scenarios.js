// scenarios.js (o gameData.js)
const gameData = {
    // Escenario 1: Lanzamiento de Producto
    'lockdown-completo': {
    name: 'Lockdown Completo',
    description: 'Activación de protocolo por amenaza interna o externa.',
    roles: {
        'Operador_1': [
            {
                id: 'lc-1',
                question: "¿Cuál es la primera acción ante una situación de lockdown completo?",
                options: [
                    "Esperar instrucciones del supervisor",
                    "Salir del edificio rápidamente",
                    "Activar botón de pánico",
                    "Llamar al proveedor de seguridad privada",
                    "Esconderse en la zona de descanso",
                    "Cerrar cortinas metálicas"
                ],
                answer: "Activar botón de pánico"
            },
            {
                id: 'lc-2',
                question: "¿Qué información se debe recabar durante un evento de lockdown?",
                options: [
                    "Ubicación del café más cercano",
                    "Datos del último simulacro",
                    "Información general del evento (tipo, lugar, hora)",
                    "Clima actual",
                    "Nombre del CEO",
                    "Número de visitantes registrados"
                ],
                answer: "Información general del evento (tipo, lugar, hora)"
            },
            {
                id: 'lc-3',
                question: "¿A qué número se debe llamar en caso de una emergencia crítica?",
                options: [
                    "066",
                    "01800-MELI-SOS",
                    "123",
                    "911",
                    "112",
                    "800-EMERGENCIA"
                ],
                answer: "911"
            },
            {
                id: 'lc-4',
                question: "¿Qué debe activarse internamente para comunicar el evento?",
                options: [
                    "Alarma sísmica",
                    "Sistema de luces de emergencia",
                    "Escalamiento de comunicación interna (LP)",
                    "Correo masivo a todos",
                    "Protocolo de redes sociales",
                    "Boletín informativo mensual"
                ],
                answer: "Escalamiento de comunicación interna (LP)"
            },
            {
                id: 'lc-5',
                question: "¿A qué entidad interna debes informar del evento?",
                options: [
                    "Personal de limpieza",
                    "HR (Recursos Humanos)",
                    "El área de logística",
                    "SOC (Hytera / WhatsApp)",
                    "Administración de ventas",
                    "Capacitación y desarrollo"
                ],
                answer: "SOC (Hytera / WhatsApp)"
            },
            {
                id: 'lc-6',
                question: "¿Qué rol debe asumir el operador ante el personal MELI durante el evento?",
                options: [
                    "Observador silencioso",
                    "Intermediario con prensa externa",
                    "Vocero, compartiendo actualizaciones",
                    "Controlador de accesos",
                    "Encargado de cámaras",
                    "Moderador de conflictos internos"
                ],
                answer: "Vocero, compartiendo actualizaciones"
            }
        ]
    }
},
    // Escenario 2: Crisis de Ciberseguridad
    'crisis-ciberseguridad': {
        name: 'Crisis de Ciberseguridad',
        description: '¡Alerta! Un ataque de ciberseguridad ha', // <-- Descripción corregida y completa para este escenario
        roles: {
            'programador': [
                { id: 'cc-prog-1', question: "¿Qué es un ataque de 'Phishing'?", options: ["Inyección de código malicioso", "Robo de datos a través de engaño", "Sobrecarga de servidor"], answer: "Robo de datos a través de engaño" },
                { id: 'cc-prog-2', question: "¿Qué protocolo asegura la comunicación web?", options: ["FTP", "SMTP", "HTTPS"], answer: "HTTPS" },
                { id: 'cc-prog-3', question: "¿Qué técnica se usa para proteger contraseñas en bases de datos?", options: ["Encriptación", "Hashing", "Obfuscación"], answer: "Hashing" }
            ],
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
    // Puedes añadir más escenarios aquí
};

module.exports = gameData;