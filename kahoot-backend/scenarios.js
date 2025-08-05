const gameData = {
    // Escenario 1: Lanzamiento de Producto
    'lanzamiento-producto': {
        name: 'Código Azul',
        description: 'Emergencia Médica en cortina 1',
        roles: {
            'Operador_1': [
                { id: 'lp-prog-1', question: "¿Qué código se activa con este escenario?", options: ["Azul", "Amarillo", "Rojo", "Púrpura"], answer: 2 },
                { id: 'lp-prog-2', question: "¿Cuál es el escenario que seguiremos?", options: ["Lockdown Completo", "Lockdown Parcial", "Evacuación Parcial", "Evacuación Total", "Cierre total, Repliegue a Zonas de Resguardo"], answer: 2 },
                { id: 'lp-prog-3', question: "¿Cuál es la siguiente acción?", options: ["Una bandera para errores", "Un switch para activar/desactivar funciones", "Un tipo de test de rendimiento"], answer: 2 }
            ],
            'Operador_2': [
                { id: 'lp-dis-1', question: "¿Qué es el 'branding' en el contexto de un lanzamiento?", options: ["El diseño del producto físico", "La estrategia para construir la identidad de marca", "La interfaz de usuario del software"], answer: "La estrategia para construir la identidad de marca" },
                { id: 'lp-dis-2', question: "¿Qué importancia tiene el 'feedback' del usuario post-lanzamiento?", options: ["Solo para marketing", "No es importante", "Crucial para iterar y mejorar el producto"], answer: "Crucial para iterar y mejorar el producto" },
                { id: 'lp-dis-3', question: "¿Qué es un 'mood board'?", options: ["Un panel de estado de ánimo", "Una colección de inspiración visual", "Un gráfico de flujo de usuario"], answer: "Una colección de inspiración visual" }
            ],
            'Operador_3': [
                { id: 'lp-com-1', question: "¿Qué tipo de evento es común antes de un lanzamiento importante?", options: ["Hackathon", "Press Release", "Code Review"], answer: "Press Release" },
                { id: 'lp-com-2', question: "¿Qué métrica mide la difusión de la marca en redes?", options: ["ROI", "Engagement", "Alcance"], answer: "Alcance" },
                { id: 'lp-com-3', question: "¿Qué es el 'elevator pitch'?", options: ["Un discurso de ventas largo", "Un resumen conciso del producto o idea", "Un tipo de presentación de diapositivas"], answer: "Un resumen conciso del producto o idea" }
            ],
            'Operador_4': [
                { id: 'lp-dis-1', question: "¿Qué es el 'branding' en el contexto de un lanzamiento?", options: ["El diseño del producto físico", "La estrategia para construir la identidad de marca", "La interfaz de usuario del software"], answer: "La estrategia para construir la identidad de marca" },
                { id: 'lp-dis-2', question: "¿Qué importancia tiene el 'feedback' del usuario post-lanzamiento?", options: ["Solo para marketing", "No es importante", "Crucial para iterar y mejorar el producto"], answer: "Crucial para iterar y mejorar el producto" },
                { id: 'lp-dis-3', question: "¿Qué es un 'mood board'?", options: ["Un panel de estado de ánimo", "Una colección de inspiración visual", "Un gráfico de flujo de usuario"], answer: "Una colección de inspiración visual" }
            ],
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

    // Escenario 2: Crisis de Ciberseguridad
    'crisis-ciberseguridad': {
        name: 'Crisis de Ciberseguridad',
        description: '¡Alerta! Un ataque de ciberseguridad ha ocurrido.',
        roles: {
            'Operador_1': [
                { id: 'cc-prog-1', question: "¿Qué tipo de ataque es el 'Phishing'?", options: ["Inyección de código malicioso", "Robo de datos a través de engaño", "Sobrecarga de servidor"], answer: "Robo de datos a través de engaño" },
                { id: 'cc-prog-2', question: "¿Qué protocolo asegura la comunicación web?", options: ["FTP", "SMTP", "HTTPS"], answer: "HTTPS" },
                { id: 'cc-prog-3', question: "¿Cuál es la primera acción ante una brecha de seguridad?", options: ["Ignorar el evento", "Notificar al equipo de seguridad", "Desconectar todos los sistemas"], answer: "Notificar al equipo de seguridad" }
            ],
            'Operador_2': [
                { id: 'cc-dis-1', question: "¿Qué es un 'mood board' en diseño de seguridad?", options: ["Un panel de estado de ánimo", "Una colección de inspiración visual", "Un gráfico de flujo de usuario"], answer: "Una colección de inspiración visual" },
                { id: 'cc-dis-2', question: "¿Por qué es importante la retroalimentación durante una crisis?", options: ["Para mejorar procesos", "No es importante", "Solo para marketing"], answer: "Para mejorar procesos" },
                { id: 'cc-dis-3', question: "¿Qué es la gestión de riesgos?", options: ["Evitar todos los riesgos", "Identificar y mitigar riesgos", "Ignorar los riesgos"], answer: "Identificar y mitigar riesgos" }
            ],
            'Operador_3': [
                { id: 'cc-com-1', question: "¿Cuál es el canal más efectivo para comunicar una crisis?", options: ["Email", "Redes sociales", "Teléfono"], answer: "Email" },
                { id: 'cc-com-2', question: "¿Qué significa 'engagement' en comunicación?", options: ["Interacción con la audiencia", "Número de mensajes enviados", "Tiempo de espera"], answer: "Interacción con la audiencia" },
                { id: 'cc-com-3', question: "¿Qué es un 'elevator pitch'?", options: ["Un discurso de ventas largo", "Un resumen conciso del producto o idea", "Una presentación de diapositivas"], answer: "Un resumen conciso del producto o idea" }
            ],
            'Operador_4': [
                { id: 'cc-dis-1', question: "¿Cuál es la función del diseño UX en una alerta de seguridad?", options: ["Crear confusión", "Diseñar alertas claras y comprensibles", "Limitar funcionalidades"], answer: "Diseñar alertas claras y comprensibles" },
                { id: 'cc-dis-2', question: "¿Qué importancia tiene la confianza durante una crisis?", options: ["Es irrelevante", "Es fundamental para mantener la credibilidad", "Solo afecta a usuarios nuevos"], answer: "Es fundamental para mantener la credibilidad" },
                { id: 'cc-dis-3', question: "¿Cómo mejorar la experiencia del usuario en una crisis?", options: ["Aumentar la complejidad", "Comunicar con claridad", "Ignorar el feedback"], answer: "Comunicar con claridad" }
            ],
            'programador': [
                { id: 'cc-prog-4', question: "¿Qué es 'hashing' en seguridad informática?", options: ["Encriptar datos", "Crear una huella digital de datos", "Ocultar datos"], answer: "Crear una huella digital de datos" },
                { id: 'cc-prog-5', question: "¿Qué acción es clave tras detectar un malware?", options: ["Reportar inmediatamente", "Eliminar sin análisis", "Ignorar"], answer: "Reportar inmediatamente" },
                { id: 'cc-prog-6', question: "¿Qué significa 'SSL/TLS'?", options: ["Protocolos de seguridad para comunicación", "Lenguajes de programación", "Bases de datos"], answer: "Protocolos de seguridad para comunicación" }
            ],
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
    // Puedes añadir más escenarios aquí
};

module.exports = gameData;
