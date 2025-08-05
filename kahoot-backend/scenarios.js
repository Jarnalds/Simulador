// scenarios.js (o gameData.js)
const gameData = {
    // Escenario 1: Lanzamiento de Producto
    'lanzamiento-producto': {
        name: 'Codigo Azul', // Nombre amigable del escenario
        description: 'Emergenia Medica en cortina 1 ', // <-- Descripción completa
        roles: { // Esta es la línea correcta para el objeto de roles
            'Operador_1': [
                { id: 'lp-prog-1', question: "¿Que codigo se activa con este escenario", options: ["Azul", "Amarillo", "Rojo","Purpura"], answer: "Azul" },
                { id: 'lp-prog-2', question: "Cual es el escenario que seguiremos", options: ["Lockdown Completo", "Lockdown Parcial", "Evacuacion Parcial", "Evacuacion Total","Cierre total, Repliegue a Zonas de Resguardo"], answer: "Evacuacion Parcial" },
                { id: 'lp-prog-3', question: "¿Cual es la siguiente acción?", options: ["Una bandera para errores", "Un switch para activar/desactivar funciones", "Un tipo de test de rendimiento"], answer: "Un switch para activar/desactivar funciones" }
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
            ], 'programador': [
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
        description: '¡Alerta! Un ataque de ciberseguridad ha', // <-- Descripción corregida y completa para este escenario
        roles: {
 'Operador_1': [
                { id: 'lp-prog-1', question: "¿Que codigo se activa con este escenario", options: ["Azul", "Amarillo", "Rojo","Purpura"], answer: "Azul" },
                { id: 'lp-prog-2', question: "Cual es el escenario que seguiremos", options: ["Lockdown Completo", "Lockdown Parcial", "Evacuacion Parcial", "Evacuacion Total","Cierre total, Repliegue a Zonas de Resguardo"], answer: "Evacuacion Parcial" },
                { id: 'lp-prog-3', question: "¿Cual es la siguiente acción?", options: ["Una bandera para errores", "Un switch para activar/desactivar funciones", "Un tipo de test de rendimiento"], answer: "Un switch para activar/desactivar funciones" }
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
            ] ,
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