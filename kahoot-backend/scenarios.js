const gameData = {
<<<<<<< HEAD
  'lockdown-completo': {
=======
      
    'evacuacion-parcial-completa': {
    name: 'Evacuación Parcial - Roles y Acciones',
    description: 'Protocolo de actuación para cada operador en un incidente de evacuación parcial. Las preguntas siguen el orden de las acciones.',
    roles: {
        "Operador_1": [
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
        get "Operador_1"() {
            return this["Operador_1"];
        },
        set "Operador_1"(value) {
            this["Operador_1"] = value;
        },
        "Operador_2": [
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
        get "Operador_2"() {
            return this["Operador_2"];
        },
        set "Operador_2"(value) {
            this["Operador_2"] = value;
        },
        'Operador_3': [
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
        'Operador_4': [
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
},

'lockdown-completo': {
>>>>>>> 0eef67d (feat: completar la funcionalidad X)
    name: 'Lockdown Completo',
    description: 'Preguntas sobre el protocolo de actuación de cada operador en un incidente de lockdown completo, enfocadas en las acciones y su orden.',
    roles: {
      'Operador_1': [
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
          question: "Después de activar el escalamiento, ¿cuál es el rol principal que el Operador 1 debe mantener?",
          options: [
            "Back up de monitoreo externo",
            "Vocero principal, compartiendo actualizaciones a personal interno MELI",
            "Monitoreo interno y externo por cámaras"
          ],
          answer: "Vocero principal, compartiendo actualizaciones a personal interno MELI"
        }
      ],
      'Operador_2': [
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
      'Operador_3': [
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
  },

  'intrusion-puerta-cristal': {
    name: "Intrusión por Puerta de Cristal",
    description: "El simulacro comienza con la detección de dos personas no autorizadas que entran al almacén.",
    roles: {

     'Recepcion': [
  {
    id: 'rec-01',
    question: "¿El guardia de recepción confirma visualmente la entrada de personas no autorizadas?",
    options: [
      "Confirmado",
      "No se puede confirmar"
    ],
    answer: "Confirmado"
  },
  {
    id: 'rec-02',
    question: "¿El guardia de recepción proporciona una descripción de los intrusos por radio?",
    options: [
      "Sí, describe la vestimenta y la dirección que han tomado para que los demás puntos puedan identificarlos.",
      "No, no proporciona ninguna descripción."
    ],
    answer: "Sí, describe la vestimenta y la dirección que han tomado para que los demás puntos puedan identificarlos."
  },
  {
    id: 'rec-03',
    question: "¿El guardia de recepción asegura la entrada principal para evitar más accesos?",
    options: [
      "Sí, el guardia cierra la Puerta de Cristal y se mantiene en su posición para evitar que alguien más entre.",
      "No, no cierra la puerta ni controla el acceso."
    ],
    answer: "Sí, el guardia cierra la Puerta de Cristal y se mantiene en su posición para evitar que alguien más entre."
  }
],
'Pasillos_centrales': [
  {
    id: 'pc-01',
    question: "¿El guardia de Pasillos Centrales toma una posición de observación sin exponerse?",
    options: [
      "Sí, el guardia se mueve a un punto estratégico para monitorear el movimiento de los intrusos, sin confrontarlos.",
      "No, se expone al peligro."
    ],
    answer: "Sí, el guardia se mueve a un punto estratégico para monitorear el movimiento de los intrusos, sin confrontarlos."
  },
  {
    id: 'pc-02',
    question: "¿El guardia de Pasillos Centrales informa por radio la ubicación y dirección de los intrusos?",
    options: [
      "Sí, comunica el movimiento en tiempo real: 'Intrusos en el pasillo principal, se dirigen al área de Outbound'.",
      "No, no informa la ubicación ni dirección de los intrusos."
    ],
    answer: "Sí, comunica el movimiento en tiempo real: 'Intrusos en el pasillo principal, se dirigen al área de Outbound'."
  },
  {
    id: 'pc-03',
    question: "¿El guardia de Pasillos Centrales guía al personal que se encuentra en el área a una zona segura?",
    options: [
      "Sí, el guardia avisa a los trabajadores y los dirige a las zonas de resguardo para que no estén en peligro.",
      "No, no guía a las personas a zonas seguras."
    ],
    answer: "Sí, el guardia avisa a los trabajadores y los dirige a las zonas de resguardo para que no estén en peligro."
  }
],
'guardia_arcos': [
  {
    id: 'ar-01',
    question: "¿Los guardias de los Arcos de Acceso y de Salida reciben la alerta de intrusión?",
    options: [
      "Sí, los guardias confirman haber recibido la alerta y se preparan para actuar.",
      "No, no reciben la alerta."
    ],
    answer: "Sí, los guardias confirman haber recibido la alerta y se preparan para actuar."
  },
  {
    id: 'ar-02',
    question: "¿Los guardias de los arcos bloquean las entradas y salidas del almacén?",
    options: [
      "Sí, bloquean el acceso vehicular y peatonal. Reportan por radio: 'Arcos asegurados, perímetro sellado'.",
      "No, no bloquean las entradas ni salidas."
    ],
    answer: "Sí, bloquean el acceso vehicular y peatonal. Reportan por radio: 'Arcos asegurados, perímetro sellado'."
  },
  {
    id: 'ar-03',
    question: "¿Los guardias de los arcos se mantienen en alerta por si los intrusos intentan escapar por allí?",
    options: [
      "Sí, mantienen una vigilancia constante en la zona perimetral para detectar cualquier intento de escape.",
      "No, no mantienen vigilancia constante."
    ],
    answer: "Sí, mantienen una vigilancia constante en la zona perimetral para detectar cualquier intento de escape."
  }
],
'Operador_1': [
  {
    id: 'ob-01',
    question: "¿El guardia de Outbound avisa al personal de la zona sobre la emergencia?",
    options: [
      "Sí, el guardia informa al personal y lo dirige a una zona segura de resguardo.",
      "No, no informa al personal."
    ],
    answer: "Sí, el guardia informa al personal y lo dirige a una zona segura de resguardo."
  },
  {
    id: 'ob-02',
    question: "¿El guardia de Outbound colabora con el equipo de respuesta?",
    options: [
      "Sí, el guardia comunica la ubicación de los intrusos y se coordina con el equipo de respuesta para asegurar el perímetro de la zona.",
      "No, no colabora con el equipo de respuesta."
    ],
    answer: "Sí, el guardia comunica la ubicación de los intrusos y se coordina con el equipo de respuesta para asegurar el perímetro de la zona."
  },
  {
    id: 'ob-03',
    question: "¿El guardia de Outbound se asegura de que la zona esté despejada de personal?",
    options: [
      "Sí, el guardia confirma que todo el personal ha sido evacuado o está en una zona segura. Reporta: 'Área de Outbound despejada de personal'.",
      "No, no se asegura de que la zona esté despejada."
    ],
    answer: "Sí, el guardia confirma que todo el personal ha sido evacuado o está en una zona segura. Reporta: 'Área de Outbound despejada de personal'."
  }
],
'guardia_inbound': [
  {
    id: 'ib-01',
    question: "¿El guardia de Inbound alerta a su personal sobre la situación?",
    options: [
      "Sí, el guardia comunica la alerta a su equipo y a los trabajadores de la zona.",
      "No, no alerta a su personal."
    ],
    answer: "Sí, el guardia comunica la alerta a su equipo y a los trabajadores de la zona."
  },
  {
    id: 'ib-02',
    question: "¿El guardia de Inbound dirige al personal a una zona de confinamiento?",
    options: [
      "Sí, el guardia guía a las personas de su área a un lugar seguro para que permanezcan allí hasta que la situación se resuelva.",
      "No, no dirige al personal a una zona segura."
    ],
    answer: "Sí, el guardia guía a las personas de su área a un lugar seguro para que permanezcan allí hasta que la situación se resuelva."
  },
  {
    id: 'ib-03',
    question: "¿El guardia de Inbound asegura que la zona esté libre de personal y materiales?",
    options: [
      "Sí, el guardia confirma que el área está segura y comunica por radio que su zona está protegida.",
      "No, no asegura la zona."
    ],
    answer: "Sí, el guardia confirma que el área está segura y comunica por radio que su zona está protegida."
  }
],
'Operador_2': [
  {
    id: 'cm-01',
    question: "¿El guardia del comedor alerta al personal que se encuentra en el área?",
    options: [
      "Sí, el guardia avisa a las personas que están en el comedor sobre la emergencia y les pide que permanezcan en el lugar.",
      "No, no alerta al personal."
    ],
    answer: "Sí, el guardia avisa a las personas que están en el comedor sobre la emergencia y les pide que permanezcan en el lugar."
  },
  {
    id: 'cm-02',
    question: "¿El guardia del comedor asegura que nadie se acerque a la zona de riesgo?",
    options: [
      "Sí, el guardia evita que el personal del comedor se dirija a la zona del incidente y se mantiene en comunicación constante.",
      "No, no asegura la zona."
    ],
    answer: "Sí, el guardia evita que el personal del comedor se dirija a la zona del incidente y se mantiene en comunicación constante."
  },
  {
    id: 'cm-03',
    question: "¿El guardia del comedor sirve como un punto de apoyo en caso de una evacuación general?",
    options: [
      "Sí, el guardia está listo para guiar a las personas a la salida de emergencia en caso de que sea necesario evacuar todo el almacén.",
      "No, no sirve como punto de apoyo."
    ],
    answer: "Sí, el guardia está listo para guiar a las personas a la salida de emergencia en caso de que sea necesario evacuar todo el almacén."
  }
]
}
  }
};


module.exports = gameData;