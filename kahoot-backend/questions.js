const questionsByRole = {
    'programador': [
        { id: 1, question: "¿Qué significa DRY?", options: ["Do Repeat Yourself", "Don't Repeat Yourself", "Directly Read Your code"], answer: "Don't Repeat Yourself" },
        { id: 2, question: "¿Qué lenguaje es Python principalmente?", options: ["Compilado", "Interpretado", "Transpilado"], answer: "Interpretado" },
        { id: 3, question: "¿Qué es un commit en Git?", options: ["Un cambio guardado", "Un error", "Una nueva rama"], answer: "Un cambio guardado" },
        { id: 4, question: "¿Qué es un 'callback' en JavaScript?", options: ["Una función que se ejecuta inmediatamente", "Una función que se pasa como argumento a otra función y se ejecuta después", "Un tipo de error"], answer: "Una función que se pasa como argumento a otra función y se ejecuta después" },
        { id: 5, question: "¿Cuál de los siguientes NO es un paradigma de programación?", options: ["Orientado a objetos", "Funcional", "Imperativo", "Estilizado"], answer: "Estilizado" }
    ],
    'diseñador': [
        { id: 6, question: "¿Qué es la tipografía?", options: ["Estudio de colores", "Arte de diseñar letras", "Diseño de logotipos"], answer: "Arte de diseñar letras" },
        { id: 7, question: "¿Qué es el RGB en diseño digital?", options: ["Un modelo de color aditivo (Rojo, Verde, Azul)", "Un tipo de archivo de imagen", "Un software de edición de fotos"], answer: "Un modelo de color aditivo (Rojo, Verde, Azul)" },
        { id: 8, question: "¿Qué principio de diseño se refiere al equilibrio visual?", options: ["Contraste", "Jerarquía", "Balance"], answer: "Balance" },
        { id: 9, question: "¿Qué herramienta usarías para diseñar un logotipo vectorial?", options: ["Photoshop", "Illustrator", "InDesign"], answer: "Illustrator" },
        { id: 10, question: "¿Qué significa UI en diseño?", options: ["User Information", "User Interface", "Universal Identity"], answer: "User Interface" }
    ],
    'comunicador': [
        { id: 11, question: "¿Qué es el storytelling?", options: ["Contar cuentos para persuadir", "Analizar datos estadísticos", "Diseñar gráficos complejos"], answer: "Contar cuentos para persuadir" },
        { id: 12, question: "¿Qué significa SEO?", options: ["Search Engine Optimization", "Social Engagement Online", "Systematic Email Output"], answer: "Search Engine Optimization" },
        { id: 13, question: "¿Cuál es el objetivo principal de una nota de prensa?", options: ["Vender un producto directamente", "Informar a los medios sobre un evento o noticia", "Crear una campaña publicitaria"], answer: "Informar a los medios sobre un evento o noticia" },
        { id: 14, question: "¿Qué es un 'call to action' (CTA)?", options: ["Un resumen de un artículo", "Una frase que incita al usuario a realizar una acción", "Un tipo de análisis de mercado"], answer: "Una frase que incita al usuario a realizar una acción" },
        { id: 15, question: "¿Qué red social se enfoca en conexiones profesionales?", options: ["Facebook", "Instagram", "LinkedIn"], answer: "LinkedIn" }
    ]
};

module.exports = questionsByRole;