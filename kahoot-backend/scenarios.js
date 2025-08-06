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

    
    'evacuacion-parcial-completa': {
    name: 'Evacuación Parcial - Roles y Acciones',
    description: 'Protocolo de actuación para cada operador en un incidente de evacuación parcial. Las preguntas siguen el orden de las acciones.',
    roles: {
        'Operador 1 (Vocero principal)': [
            {
                id: 'op1-q1',
                question: "¿Cuál es la primera acción del Operador 1?",
                options: [
                    "Llamar a emergencias",
                    "Validar si el área evacuada incluye el CCM",
                    "Recabar información del evento"
                ],
                answer: "Validar si el área evacuada incluye el CCM"
            },
            {
                id: 'op1-q2',
                question: "Si el CCM debe ser evacuado, ¿qué protocolo debe seguir el Operador 1?",
                options: [
                    "Mantener el rol de vocero",
                    "Seguir el playbook de evacuación total",
                    "Esperar instrucciones del Operador 2"
                ],
                answer: "Seguir el playbook de evacuación total"
            },
            {
                id: 'op1-q3',
                question: "Si el CCM no evacua, ¿cuál es el siguiente paso para el Operador 1?",
                options: [
                    "Colocar el seguro",
                    "Recabar información del evento",
                    "Escalar a LP"
                ],
                answer: "Recabar información del evento"
            },
            {
                id: 'op1-q4',
                question: "¿Qué acción se toma después de recabar la información del evento, si el CCM no evacúa?",
                options: [
                    "Llamar a emergencias",
                    "Monitorear cámaras",
                    "Mantener el rol de vocero"
                ],
                answer: "Llamar a emergencias"
            },
            {
                id: 'op1-q5',
                question: "¿A quién se realiza el escalamiento después de llamar a emergencias?",
                options: [
                    "Al Operador 2",
                    "A LP (Líder del Protocolo)",
                    "A los guardias"
                ],
                answer: "A LP (Líder del Protocolo)"
            },
            {
                id: 'op1-q6',
                question: "¿Cuál es la responsabilidad principal y continua del Operador 1 a lo largo del incidente?",
                options: [
                    "Describir la zona visualizada en voz alta",
                    "Mantener el rol de vocero",
                    "Informar novedades a los operadores 3 y 4"
                ],
                answer: "Mantener el rol de vocero"
            }
        ],
        'Operador 2': [
            {
                id: 'op2-q1',
                question: "¿Qué debe validar primero el Operador 2 al iniciar el protocolo?",
                options: [
                    "El estado de las cámaras",
                    "El área evacuada",
                    "La comunicación con los guardias"
                ],
                answer: "El área evacuada"
            },
            {
                id: 'op2-q2',
                question: "Si el CCM NO evacúa, ¿cuál es la primera acción del Operador 2?",
                options: [
                    "Colocar seguro",
                    "Informar al vocero",
                    "Monitorear cámaras"
                ],
                answer: "Colocar seguro"
            },
            {
                id: 'op2-q3',
                question: "Después de colocar el seguro, ¿cuál es el siguiente paso para el Operador 2?",
                options: [
                    "Monitorear cámaras",
                    "Llamar a emergencias",
                    "Escalar a LP"
                ],
                answer: "Monitorear cámaras"
            },
            {
                id: 'op2-q4',
                question: "¿Con quién se comunica el Operador 2 después de monitorear las cámaras?",
                options: [
                    "Con el vocero",
                    "Con los guardias",
                    "Con el Operador 3"
                ],
                answer: "Con los guardias"
            },
            {
                id: 'op2-q5',
                question: "¿Cuál es el propósito principal de la comunicación del Operador 2?",
                options: [
                    "Dar instrucciones al personal",
                    "Describir la zona visualizada en voz alta",
                    "Informar novedades al vocero"
                ],
                answer: "Informar novedades al vocero"
            },
            {
                id: 'op2-q6',
                question: "En caso de que el CCM evacúe, ¿qué debe seguir el Operador 2?",
                options: [
                    "El playbook de evacuación parcial",
                    "El playbook de evacuación total",
                    "Las instrucciones de los guardias"
                ],
                answer: "El playbook de evacuación total"
            }
        ],
        'Operador 3': [
            {
                id: 'op3-q1',
                question: "¿Cuál es la primera acción del Operador 3 al activarse el protocolo?",
                options: [
                    "Iniciar comunicación en voz alta",
                    "Seguimiento de cámaras",
                    "Validar si el CCM es evacuado"
                ],
                answer: "Validar si el CCM es evacuado"
            },
            {
                id: 'op3-q2',
                question: "Si el CCM no evacúa, ¿qué tipo de monitoreo de cámaras debe realizar el Operador 3?",
                options: [
                    "Solo monitoreo interno",
                    "Solo monitoreo externo",
                    "Monitoreo interno y externo"
                ],
                answer: "Monitoreo interno y externo"
            },
            {
                id: 'op3-q3',
                question: "¿Qué protocolo debe seguir el Operador 3 si el CCM es evacuado?",
                options: [
                    "El playbook total",
                    "El playbook parcial",
                    "Monitorear cámaras externas"
                ],
                answer: "El playbook total"
            },
            {
                id: 'op3-q4',
                question: "¿Cómo debe ser la comunicación del Operador 3 al describir la zona visualizada?",
                options: [
                    "Clara y continua",
                    "En voz alta y constante",
                    "A través de un chat"
                ],
                answer: "En voz alta y constante"
            },
            {
                id: 'op3-q5',
                question: "¿Qué tipo de información se describe durante la comunicación verbal constante?",
                options: [
                    "La zona visualizada",
                    "Las novedades del Operador 2",
                    "La causa de la emergencia"
                ],
                answer: "La zona visualizada"
            },
            {
                id: 'op3-q6',
                question: "¿Cuál es el rol del Operador 3 cuando el CCM no evacúa?",
                options: [
                    "Principalmente comunicador",
                    "Principalmente monitorista",
                    "Principalmente vocero"
                ],
                answer: "Principalmente monitorista"
            }
        ],
        'Operador 4': [
            {
                id: 'op4-q1',
                question: "¿Cuál es el paso inicial para el Operador 4?",
                options: [
                    "Comunicación clara y continua",
                    "Validar si el CCM es evacuado",
                    "Seguimiento con cámaras"
                ],
                answer: "Validar si el CCM es evacuado"
            },
            {
                id: 'op4-q2',
                question: "Si el CCM no es evacuado, ¿qué tarea principal realiza el Operador 4?",
                options: [
                    "Recabar información del evento",
                    "Seguimiento con cámaras",
                    "Llamar a emergencias"
                ],
                answer: "Seguimiento con cámaras"
            },
            {
                id: 'op4-q3',
                question: "¿Qué tipo de comunicación debe mantener el Operador 4?",
                options: [
                    "En voz alta y constante",
                    "Silenciosa y discreta",
                    "Clara y continua"
                ],
                answer: "Clara y continua"
            },
            {
                id: 'op4-q4',
                question: "¿Cuál es la responsabilidad principal del Operador 4 al monitorear las cámaras?",
                options: [
                    "Describir la zona visualizada",
                    "Recabar información de los guardias",
                    "Escalar a LP"
                ],
                answer: "Describir la zona visualizada"
            },
            {
                id: 'op4-q5',
                question: "¿Qué informa el Operador 4 durante su comunicación continua?",
                options: [
                    "La zona visualizada",
                    "El estado del Operador 1",
                    "El estado de los guardias"
                ],
                answer: "La zona visualizada"
            },
            {
                id: 'op4-q6',
                question: "En caso de que el CCM sea evacuado, ¿qué protocolo se sigue?",
                options: [
                    "El playbook total",
                    "El playbook parcial",
                    "El playbook de evacuación de cámaras"
                ],
                answer: "El playbook total"
            }
        ]
    }
}

'lockdown-completo': {
    name: 'Lockdown Completo',
    description: 'Preguntas sobre el protocolo de actuación de cada operador en un incidente de lockdown completo, enfocadas en las acciones y su orden.',
    roles: {
        'Operador 1': [
            {
                id: 'op1-q1',
                question: "¿Cuál es la primera acción del Operador 1 al inicio del protocolo de Lockdown?",
                options: [
                    "Recabar información del evento en general",
                    "Activar el botón de pánico",
                    "Llamar a 911"
                ],
                answer: "Activar el botón de pánico"
            },
            {
                id: 'op1-q2',
                question: "Después de activar el botón de pánico, ¿qué paso sigue para el Operador 1?",
                options: [
                    "Llamar a 911",
                    "Recabar información del evento en general",
                    "Activar escalamiento de comunicación interna (LP)"
                ],
                answer: "Recabar información del evento en general"
            },
            {
                id: 'op1-q3',
                question: "Una vez que la información ha sido recabada, ¿cuál es la siguiente acción?",
                options: [
                    "Llamar a 911",
                    "Informar a SOC",
                    "Asumir el rol de vocero"
                ],
                answer: "Llamar a 911"
            },
            {
                id: 'op1-q4',
                question: "Después de llamar a 911, ¿a quién se realiza el escalamiento de comunicación interna?",
                options: [
                    "A los guardias",
                    "A LP",
                    "A SOC"
                ],
                answer: "A LP"
            },
            {
                id: 'op1-q5',
                question: "¿Qué canal se utiliza para informar a SOC?",
                options: [
                    "Solo por correo electrónico",
                    "Hytera / WhatsApp",
                    "Mediante la central telefónica"
                ],
                answer: "Hytera / WhatsApp"
            },
            {
                id: 'op1-q6',
                question: "Después de activar el escalamiento, ¿cuál es el rol principal que el Operador 1 debe mantener?",
                options: [
                    "Back up de monitoreo externo",
                    "Vocero principal, compartiendo actualizaciones a personal interno MELI",
                    "Monitoreo interno y externo por cámaras"
                ],
                answer: "Vocero principal, compartiendo actualizaciones a personal interno MELI"
            }
        ],
        'Operador 2': [
            {
                id: 'op2-q1',
                question: "¿Cuál es la primera acción del Operador 2 en un Lockdown Completo?",
                options: [
                    "Monitorear cámaras",
                    "Comunicarse con guardias",
                    "Colocar el seguro manual de la puerta del CCM"
                ],
                answer: "Colocar el seguro manual de la puerta del CCM"
            },
            {
                id: 'op2-q2',
                question: "Después de asegurar la puerta, ¿qué tipo de monitoreo debe realizar el Operador 2?",
                options: [
                    "Solo interno",
                    "Solo externo",
                    "Monitoreo interno y externo por cámaras"
                ],
                answer: "Monitoreo interno y externo por cámaras"
            },
            {
                id: 'op2-q3',
                question: "¿Con quién se comunica el Operador 2 de manera constante y por qué medio?",
                options: [
                    "Con el Operador 1 por WhatsApp",
                    "Con los guardias vía radio",
                    "Con LP por Hytera"
                ],
                answer: "Con los guardias vía radio"
            },
            {
                id: 'op2-q4',
                question: "¿A quién debe informar el Operador 2 sobre las novedades del incidente?",
                options: [
                    "A todo el personal de MELI",
                    "Al Operador 1 (vocero)",
                    "A SOC"
                ],
                answer: "Al Operador 1 (vocero)"
            },
            {
                id: 'op2-q5',
                question: "¿Cuál es el propósito del monitoreo constante por cámaras del Operador 2?",
                options: [
                    "Registrar los eventos para la policía",
                    "Garantizar la seguridad interna y externa del CCM",
                    "Facilitar la comunicación con LP"
                ],
                answer: "Garantizar la seguridad interna y externa del CCM"
            },
            {
                id: 'op2-q6',
                question: "¿Cuál es la función principal del Operador 2 en el protocolo?",
                options: [
                    "Ser el punto de comunicación principal",
                    "Gestionar la seguridad física y el monitoreo",
                    "Tomar decisiones sobre el protocolo"
                ],
                answer: "Gestionar la seguridad física y el monitoreo"
            }
        ],
        'Operador 3': [
            {
                id: 'op3-q1',
                question: "¿Cuál es la responsabilidad principal del Operador 3 en el monitoreo?",
                options: [
                    "Ser el monitoreo principal",
                    "Ser el back up de monitoreo externo",
                    "Realizar monitoreo interno y externo"
                ],
                answer: "Ser el back up de monitoreo externo"
            },
            {
                id: 'op3-q2',
                question: "¿Con quién mantiene una comunicación constante el Operador 3?",
                options: [
                    "Con los guardias",
                    "Con el vocero (Operador 1)",
                    "Con el Operador 2"
                ],
                answer: "Con el vocero (Operador 1)"
            },
            {
                id: 'op3-q3',
                question: "¿Por qué es importante el rol de 'back up' del Operador 3?",
                options: [
                    "Para dar más órdenes a los guardias",
                    "Para asegurar que el monitoreo externo no falle",
                    "Para reemplazar al Operador 2"
                ],
                answer: "Para asegurar que el monitoreo externo no falle"
            },
            {
                id: 'op3-q4',
                question: "¿Qué tipo de información proporciona el Operador 3 al vocero?",
                options: [
                    "Las decisiones tomadas por los guardias",
                    "Novedades sobre el monitoreo externo",
                    "Instrucciones de emergencia"
                ],
                answer: "Novedades sobre el monitoreo externo"
            },
            {
                id: 'op3-q5',
                question: "¿Cuál es el propósito de la comunicación constante entre el Operador 3 y el vocero?",
                options: [
                    "Distraer al vocero",
                    "Mantener al vocero actualizado sobre la situación externa en tiempo real",
                    "Solo para pedir ayuda"
                ],
                answer: "Mantener al vocero actualizado sobre la situación externa en tiempo real"
            },
            {
                id: 'op3-q6',
                question: "¿Qué pasaría si el Operador 1 no estuviera disponible?",
                options: [
                    "El Operador 2 asume el rol de vocero",
                    "El Operador 3 asume las responsabilidades del vocero",
                    "El protocolo se detiene hasta que llegue alguien"
                ],
                answer: "El Operador 3 asume las responsabilidades del vocero"
            }
        ]
    }
}

'lockdown-parcial': {
    name: 'Lockdown Parcial',
    description: 'Preguntas sobre los roles y acciones en un protocolo de lockdown parcial, enfocadas en la secuencia de eventos y las responsabilidades.',
    roles: {
        'Operador 1 (Vocero principal)': [
            {
                id: 'op1-lp-q1',
                question: "¿Cuál es la primera acción del Operador 1 en un Lockdown Parcial?",
                options: [
                    "Llamar a 911",
                    "Activar botón de pánico",
                    "Recabar información del evento"
                ],
                answer: "Activar botón de pánico"
            },
            {
                id: 'op1-lp-q2',
                question: "Después de activar el botón de pánico, ¿cuál es el siguiente paso?",
                options: [
                    "Llamar a 911",
                    "Escalamiento a LP",
                    "Recabar información del evento"
                ],
                answer: "Recabar información del evento"
            },
            {
                id: 'op1-lp-q3',
                question: "Una vez recabada la información, ¿qué acción sigue?",
                options: [
                    "Llamar a 911",
                    "Informar a SOC",
                    "Escalar a LP"
                ],
                answer: "Llamar a 911"
            },
            {
                id: 'op1-lp-q4',
                question: "Después de la llamada al 911, ¿a quién se debe realizar el escalamiento?",
                options: [
                    "Al personal interno",
                    "A LP",
                    "A SOC"
                ],
                answer: "A LP"
            },
            {
                id: 'op1-lp-q5',
                question: "¿Qué se debe hacer después del escalamiento a LP?",
                options: [
                    "Llamar a los guardias",
                    "Informar a SOC",
                    "Activar el botón de pánico"
                ],
                answer: "Informar a SOC"
            },
            {
                id: 'op1-lp-q6',
                question: "¿Cuál es la responsabilidad continua del Operador 1 una vez iniciadas las acciones?",
                options: [
                    "Monitorear las cámaras",
                    "Mantenerse como vocero y actualizar al personal interno",
                    "Dar órdenes a los guardias"
                ],
                answer: "Mantenerse como vocero y actualizar al personal interno"
            }
        ],
        'Operador 2': [
            {
                id: 'op2-lp-q1',
                question: "¿Cuál es la primera acción del Operador 2 en un Lockdown Parcial?",
                options: [
                    "Monitoreo por cámaras",
                    "Colocar seguro",
                    "Comunicación con guardias"
                ],
                answer: "Colocar seguro"
            },
            {
                id: 'op2-lp-q2',
                question: "Después de colocar el seguro, ¿cuál es la siguiente acción?",
                options: [
                    "Comunicación con guardias",
                    "Informar al vocero",
                    "Monitoreo por cámaras"
                ],
                answer: "Monitoreo por cámaras"
            },
            {
                id: 'op2-lp-q3',
                question: "¿Con quién se comunica el Operador 2 después de monitorear?",
                options: [
                    "Con el vocero",
                    "Con los guardias",
                    "Con SOC"
                ],
                answer: "Con los guardias"
            },
            {
                id: 'op2-lp-q4',
                question: "¿A quién debe informar el Operador 2 las novedades?",
                options: [
                    "Al Operador 3",
                    "Al vocero",
                    "A LP"
                ],
                answer: "Al vocero"
            },
            {
                id: 'op2-lp-q5',
                question: "¿Cuál es el propósito de colocar el seguro?",
                options: [
                    "Evitar que el Operador 1 salga",
                    "Asegurar la zona de control",
                    "Marcar el inicio del protocolo"
                ],
                answer: "Asegurar la zona de control"
            },
            {
                id: 'op2-lp-q6',
                question: "¿Qué tipo de acciones del Operador 2 son idénticas a las de un Lockdown Completo?",
                options: [
                    "Todas las acciones",
                    "Solo las acciones de comunicación",
                    "Solo las acciones de monitoreo"
                ],
                answer: "Todas las acciones"
            }
        ],
        'Operador 3': [
            {
                id: 'op3-lp-q1',
                question: "¿Cuál es la primera responsabilidad del Operador 3?",
                options: [
                    "Comunicación en voz alta",
                    "Seguimiento de la incidencia con cámaras",
                    "Mantener comunicación constante con el vocero"
                ],
                answer: "Seguimiento de la incidencia con cámaras"
            },
            {
                id: 'op3-lp-q2',
                question: "¿Qué tipo de monitoreo realiza el Operador 3?",
                options: [
                    "Solo interno",
                    "Solo externo",
                    "Monitoreo interno y externo"
                ],
                answer: "Monitoreo interno y externo"
            },
            {
                id: 'op3-lp-q3',
                question: "¿Cómo debe ser la comunicación del Operador 3 al indicar la zona visualizada?",
                options: [
                    "Con voz alta, indicando la zona exacta",
                    "Solo por chat con el vocero",
                    "De forma clara y continua"
                ],
                answer: "Con voz alta, indicando la zona exacta"
            },
            {
                id: 'op3-lp-q4',
                question: "¿Con quién debe mantener comunicación constante el Operador 3?",
                options: [
                    "Con el Operador 2",
                    "Con los guardias",
                    "Con el vocero"
                ],
                answer: "Con el vocero"
            },
            {
                id: 'op3-lp-q5',
                question: "¿Cuál es el objetivo de la comunicación verbal en voz alta del Operador 3?",
                options: [
                    "Coordinar a los otros operadores",
                    "Mantener a todo el equipo informado en tiempo real",
                    "Proporcionar un registro de audio del evento"
                ],
                answer: "Mantener a todo el equipo informado en tiempo real"
            },
            {
                id: 'op3-lp-q6',
                question: "En un Lockdown Parcial, ¿cuál es el rol principal del Operador 3?",
                options: [
                    "Ser el vocero de apoyo",
                    "Ser el monitorista principal",
                    "Ser el apoyo de monitoreo y comunicación"
                ],
                answer: "Ser el apoyo de monitoreo y comunicación"
            }
        ],
        'Operador 4': [
            {
                id: 'op4-lp-q1',
                question: "¿Qué tipo de seguimiento realiza el Operador 4?",
                options: [
                    "Seguimiento de guardias",
                    "Seguimiento visual mediante cámaras",
                    "Seguimiento de la comunicación"
                ],
                answer: "Seguimiento visual mediante cámaras"
            },
            {
                id: 'op4-lp-q2',
                question: "Al igual que el Operador 3, ¿qué tipo de monitoreo de cámaras se realiza?",
                options: [
                    "Solo externo",
                    "Solo interno",
                    "Monitoreo interno/externo"
                ],
                answer: "Monitoreo interno/externo"
            },
            {
                id: 'op4-lp-q3',
                question: "¿Qué tipo de comunicación debe mantener el Operador 4?",
                options: [
                    "Comunicación clara describiendo la zona",
                    "Comunicación en voz alta",
                    "Comunicación con los guardias"
                ],
                answer: "Comunicación clara describiendo la zona"
            },
            {
                id: 'op4-lp-q4',
                question: "¿A quién debe informar las actualizaciones el Operador 4?",
                options: [
                    "Al Operador 3",
                    "Al vocero",
                    "A LP"
                ],
                answer: "Al vocero"
            },
            {
                id: 'op4-lp-q5',
                question: "¿Cuál es el objetivo de la comunicación clara del Operador 4?",
                options: [
                    "Evitar la confusión al describir la situación",
                    "Proporcionar una segunda opinión sobre el incidente",
                    "Dar órdenes a los guardias"
                ],
                answer: "Evitar la confusión al describir la situación"
            },
            {
                id: 'op4-lp-q6',
                question: "¿Cuál es el papel del Operador 4 en relación al vocero?",
                options: [
                    "Ser el vocero principal",
                    "Informar y actualizar constantemente al vocero",
                    "Tomar el control si el vocero no puede"
                ],
                answer: "Informar y actualizar constantemente al vocero"
            }
        ]
    }
}

'evacuacion-total': {
    name: 'Evacuación Total',
    description: 'Preguntas sobre el protocolo de actuación de cada operador en un incidente de evacuación total, enfocadas en las acciones y su orden de prioridad.',
    roles: {
        'Operador 1': [
            {
                id: 'op1-et-q1',
                question: "¿Cuál es la primera acción del Operador 1 en un protocolo de Evacuación Total?",
                options: [
                    "Activar botón de pánico",
                    "Tomar radio troncal, celular CCM y Hytera",
                    "Recabar información general"
                ],
                answer: "Tomar radio troncal, celular CCM y Hytera"
            },
            {
                id: 'op1-et-q2',
                question: "Después de tomar los equipos, ¿cuál es la acción inmediata que debe realizar el Operador 1?",
                options: [
                    "Llamar a emergencias",
                    "Activar botón de pánico",
                    "Recabar información general"
                ],
                answer: "Activar botón de pánico"
            },
            {
                id: 'op1-et-q3',
                question: "Una vez recabada la información, ¿qué acción sigue?",
                options: [
                    "Llamar a emergencias (si aplica)",
                    "Escalamiento a LP",
                    "Informar a SOC"
                ],
                answer: "Llamar a emergencias (si aplica)"
            },
            {
                id: 'op1-et-q4',
                question: "Después de llamar a emergencias, ¿a quién se realiza el escalamiento?",
                options: [
                    "A los guardias",
                    "A LP",
                    "A SOC"
                ],
                answer: "A LP"
            },
            {
                id: 'op1-et-q5',
                question: "¿Cuál es el propósito de informar a SOC?",
                options: [
                    "Para tener un backup on-site",
                    "Para coordinar la evacuación",
                    "Para dar órdenes a los guardias"
                ],
                answer: "Para tener un backup on-site"
            },
            {
                id: 'op1-et-q6',
                question: "Además de la comunicación continua, ¿qué se debe verificar al final del protocolo?",
                options: [
                    "La identidad de los operadores",
                    "La batería y el funcionamiento de los equipos",
                    "El estado de los stakeholders"
                ],
                answer: "La batería y el funcionamiento de los equipos"
            }
        ],
        'Operador 2': [
            {
                id: 'op2-et-q1',
                question: "¿Cuál es la primera acción del Operador 2 en una evacuación total?",
                options: [
                    "Apoyar al vocero",
                    "Recabar información",
                    "Tomar radio troncal"
                ],
                answer: "Tomar radio troncal"
            },
            {
                id: 'op2-et-q2',
                question: "¿De quién debe recabar información el Operador 2?",
                options: [
                    "De los guardias",
                    "De diferentes stakeholders",
                    "Del vocero"
                ],
                answer: "De diferentes stakeholders"
            },
            {
                id: 'op2-et-q3',
                question: "Después de recabar la información, ¿qué rol debe asumir el Operador 2?",
                options: [
                    "Vocero principal",
                    "Apoyar al vocero",
                    "Informar a SOC"
                ],
                answer: "Apoyar al vocero"
            },
            {
                id: 'op2-et-q4',
                question: "¿A quién debe dar actualizaciones el Operador 2?",
                options: [
                    "A los guardias",
                    "A LP",
                    "Al vocero"
                ],
                answer: "Al vocero"
            },
            {
                id: 'op2-et-q5',
                question: "¿Cuál es el propósito de recabar información de diferentes stakeholders?",
                options: [
                    "Tener múltiples fuentes de información para el vocero",
                    "Asegurarse de que todos estén a salvo",
                    "Distribuir la carga de trabajo"
                ],
                answer: "Tener múltiples fuentes de información para el vocero"
            },
            {
                id: 'op2-et-q6',
                question: "¿Cómo se diferencia el rol del Operador 2 del vocero?",
                options: [
                    "El Operador 2 toma las decisiones principales",
                    "El Operador 2 es un apoyo, mientras el vocero es el punto de contacto central",
                    "El Operador 2 se comunica con más personas que el vocero"
                ],
                answer: "El Operador 2 es un apoyo, mientras el vocero es el punto de contacto central"
            }
        ],
        'Operador 3': [
            {
                id: 'op3-et-q1',
                question: "¿Cuál es la primera acción del Operador 3?",
                options: [
                    "Tomar radio troncal",
                    "Evacuación del CCM",
                    "Dar actualizaciones al vocero"
                ],
                answer: "Evacuación del CCM"
            },
            {
                id: 'op3-et-q2',
                question: "Después de la evacuación, ¿qué equipo debe tomar el Operador 3?",
                options: [
                    "Un celular CCM",
                    "Un Hytera",
                    "Un radio troncal"
                ],
                answer: "Un radio troncal"
            },
            {
                id: 'op3-et-q3',
                question: "¿A quién debe dar actualizaciones el Operador 3?",
                options: [
                    "A su supervisor",
                    "Al vocero",
                    "A los guardias"
                ],
                answer: "Al vocero"
            },
            {
                id: 'op3-et-q4',
                question: "¿En qué se basan las actualizaciones que da el Operador 3?",
                options: [
                    "En la información observada",
                    "En los reportes de SOC",
                    "En las instrucciones de LP"
                ],
                answer: "En la información observada"
            },
            {
                id: 'op3-et-q5',
                question: "¿Cuál es la principal responsabilidad del Operador 3 una vez que está fuera del CCM?",
                options: [
                    "Dirigir a los evacuados",
                    "Servir como una fuente de información de primera mano para el vocero",
                    "Buscar a personas perdidas"
                ],
                answer: "Servir como una fuente de información de primera mano para el vocero"
            },
            {
                id: 'op3-et-q6',
                question: "¿Qué tipo de información observada debe comunicar el Operador 3 al vocero?",
                options: [
                    "Cualquier novedad relevante del área donde se encuentre",
                    "Solo información que no esté en las cámaras",
                    "Únicamente el número de personas evacuadas"
                ],
                answer: "Cualquier novedad relevante del área donde se encuentre"
            }
        ],
        'Operador 4': [
            {
                id: 'op4-et-q1',
                question: "¿Cuál es el primer paso del Operador 4 en una Evacuación Total?",
                options: [
                    "Comunicación con CCM",
                    "Evacuación del CCM",
                    "Tomar el radio troncal"
                ],
                answer: "Evacuación del CCM"
            },
            {
                id: 'op4-et-q2',
                question: "¿Cuál es la diferencia clave entre el Operador 3 y 4 después de la evacuación?",
                options: [
                    "El Operador 4 no toma radio troncal",
                    "El Operador 4 se comunica con el CCM, el Operador 3 no",
                    "El Operador 4 no da actualizaciones al vocero"
                ],
                answer: "El Operador 4 se comunica con el CCM, el Operador 3 no"
            },
            {
                id: 'op4-et-q3',
                question: "¿A quién se le dan las actualizaciones?",
                options: [
                    "A los guardias",
                    "Al vocero",
                    "A LP"
                ],
                answer: "Al vocero"
            },
            {
                id: 'op4-et-q4',
                question: "¿Cuál es el propósito de la comunicación con el CCM del Operador 4?",
                options: [
                    "Conseguir una actualización de los operadores",
                    "Dar órdenes a los operadores dentro del CCM",
                    "Verificar si el CCM está completamente evacuado"
                ],
                answer: "Conseguir una actualización de los operadores"
            },
            {
                id: 'op4-et-q5',
                question: "¿Qué tipo de información debe compartir el Operador 4 con el vocero?",
                options: [
                    "Las actualizaciones que recibe del CCM",
                    "La información recabada por el Operador 2",
                    "Las decisiones tomadas por LP"
                ],
                answer: "Las actualizaciones que recibe del CCM"
            },
            {
                id: 'op4-et-q6',
                question: "¿Cuál es el objetivo principal del Operador 4 en el protocolo?",
                options: [
                    "Ser el vocero de respaldo",
                    "Servir de enlace de comunicación entre el CCM y el vocero",
                    "Coordinar a los guardias en la zona de evacuación"
                ],
                answer: "Servir de enlace de comunicación entre el CCM y el vocero"
            }
        ]
    }
}

};

module.exports = gameData;