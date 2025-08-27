const gameData = {
  'lockdown-completo': {
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

const gameData = {
  'lockdown-completo': {
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
      "Recepcion": [
        {
          id: "rec-01",
          question: "¿El guardia de recepción confirma visualmente la entrada de personas no autorizadas?",
          answer: "Sí, el guardia confirma la intrusión y emite el primer reporte por radio: 'Alerta, intrusión en Puerta de Cristal. Se mueven hacia los pasillos centrales'."
        },
        {
          id: "rec-02",
          question: "¿El guardia de recepción proporciona una descripción de los intrusos por radio?",
          answer: "Sí, describe la vestimenta y la dirección que han tomado para que los demás puntos puedan identificarlos."
        },
        {
          id: "rec-03",
          question: "¿El guardia de recepción asegura la entrada principal para evitar más accesos?",
          answer: "Sí, el guardia cierra la Puerta de Cristal y se mantiene en su posición para evitar que alguien más entre."
        }
      ],
      "Pasillos_centrales": [
        {
          id: "pc-01",
          question: "¿El guardia de Pasillos Centrales toma una posición de observación sin exponerse?",
          answer: "Sí, el guardia se mueve a un punto estratégico para monitorear el movimiento de los intrusos, sin confrontarlos."
        },
        {
          id: "pc-02",
          question: "¿El guardia de Pasillos Centrales informa por radio la ubicación y dirección de los intrusos?",
          answer: "Sí, comunica el movimiento en tiempo real: 'Intrusos en el pasillo principal, se dirigen al área de Outbound'."
        },
        {
          id: "pc-03",
          question: "¿El guardia de Pasillos Centrales guía al personal que se encuentra en el área a una zona segura?",
          answer: "Sí, el guardia avisa a los trabajadores y los dirige a las zonas de resguardo para que no estén en peligro."
        }
      ],
      "guardia_arcos": [
        {
          id: "ar-01",
          question: "¿Los guardias de los Arcos de Acceso y de Salida reciben la alerta de intrusión?",
          answer: "Sí, los guardias confirman haber recibido la alerta y se preparan para actuar."
        },
        {
          id: "ar-02",
          question: "¿Los guardias de los arcos bloquean las entradas y salidas del almacén?",
          answer: "Sí, bloquean el acceso vehicular y peatonal. Reportan por radio: 'Arcos asegurados, perímetro sellado'."
        },
        {
          id: "ar-03",
          question: "¿Los guardias de los arcos se mantienen en alerta por si los intrusos intentan escapar por allí?",
          answer: "Sí, mantienen una vigilancia constante en la zona perimetral para detectar cualquier intento de escape."
        }
      ],
      "Operador_1": [ /* Outbound */ 
        {
          id: "ob-01",
          question: "¿El guardia de Outbound avisa al personal de la zona sobre la emergencia?",
          answer: "Sí, el guardia informa al personal y lo dirige a una zona segura de resguardo."
        },
        {
          id: "ob-02",
          question: "¿El guardia de Outbound colabora con el equipo de respuesta?",
          answer: "Sí, el guardia comunica la ubicación de los intrusos y se coordina con el equipo de respuesta para asegurar el perímetro de la zona."
        },
        {
          id: "ob-03",
          question: "¿El guardia de Outbound se asegura de que la zona esté despejada de personal?",
          answer: "Sí, el guardia confirma que todo el personal ha sido evacuado o está en una zona segura. Reporta: 'Área de Outbound despejada de personal'."
        }
      ],
      "guardia_inbound": [
        {
          id: "ib-01",
          question: "¿El guardia de Inbound alerta a su personal sobre la situación?",
          answer: "Sí, el guardia comunica la alerta a su equipo y a los trabajadores de la zona."
        },
        {
          id: "ib-02",
          question: "¿El guardia de Inbound dirige al personal a una zona de confinamiento?",
          answer: "Sí, el guardia guía a las personas de su área a un lugar seguro para que permanezcan ahí hasta que la situación se resuelva."
        },
        {
          id: "ib-03",
          question: "¿El guardia de Inbound asegura que la zona esté libre de personal y materiales?",
          answer: "Sí, el guardia confirma que el área está segura y comunica por radio que su zona está protegida."
        }
      ],
      "Operador_2": [ /* Comedor */ 
        {
          id: "cm-01",
          question: "¿El guardia del comedor alerta al personal que se encuentra en el área?",
          answer: "Sí, el guardia avisa a las personas que están en el comedor sobre la emergencia y les pide que permanezcan en el lugar."
        },
        {
          id: "cm-02",
          question: "¿El guardia del comedor asegura que nadie se acerque a la zona de riesgo?",
          answer: "Sí, el guardia evita que el personal del comedor se dirija a la zona del incidente y se mantiene en comunicación constante."
        },
        {
          id: "cm-03",
          question: "¿El guardia del comedor sirve como un punto de apoyo en caso de una evacuación general?",
          answer: "Sí, el guardia está listo para guiar a las personas a la salida de emergencia en caso de que sea necesario evacuar todo el almacén."
        }
      ],
      "operadores_monitoreo": [
        {
          id: "om-01",
          question: "¿El primer monitorista confirma visualmente la intrusión y emite la alerta general?",
          answer: "Sí, el monitorista confirma la intrusión a través de las cámaras y comunica la alerta a todo el equipo de seguridad."
        },
        {
          id: "om-02",
          question: "¿El monitorista de seguimiento rastrea a los intrusos en tiempo real y comunica su ubicación?",
          answer: "Sí, el monitorista comunica constantemente la posición de los intrusos y avisa de cualquier cambio de dirección."
        },
        {
          id: "om-03",
          question: "¿El monitorista de apoyo se asegura de que los guardias en tierra tengan la información correcta?",
          answer: "Sí, el monitorista de apoyo se encarga de dar la información a los guardias de las zonas del almacén para que tomen las medidas necesarias."
        }
      ],
      "Operador_3": [ /* Equipo de respuesta */ 
        {
          id: "er-01",
          question: "¿El equipo de respuesta se dirige al lugar de los intrusos una vez que han recibido la orden?",
          answer: "Sí, el equipo de respuesta se dirige a la zona de Outbound para la contención de los intrusos."
        },
        {
          id: "er-02",
          question: "¿El equipo de respuesta logra contener a los intrusos?",
          answer: "Sí, el equipo de respuesta logra establecer un perímetro de contención y asegura la zona."
        },
        {
          id: "er-03",
          question: "¿El líder del equipo de respuesta informa que la situación está bajo control?",
          answer: "Sí, el líder del equipo de respuesta informa que los intrusos han sido contenidos y que la zona está segura."
        }
      ],
      "Analista": [
        {
          id: "es-01",
          question: "¿El encargado de seguridad tiene el control total de la situación?",
          answer: "Sí, el encargado de seguridad recibe la información de todos los puntos de seguridad y toma las decisiones para que el simulacro sea un éxito."
        },
        {
          id: "es-02",
          question: "¿El encargado de seguridad da la orden de 'código seguro' por radio?",
          answer: "Sí, el encargado de seguridad da la orden de 'código seguro' para que todos los puntos de seguridad regresen a su rutina normal."
        },
        {
          id: "es-03",
          question: "¿El encargado de seguridad se reúne con todos los puntos de seguridad para evaluar el simulacro?",
          answer: "Sí, el encargado de seguridad se reúne con todos los puntos de seguridad para evaluar el simulacro y mejorar los protocolos."
        }
      ]
    }
  }
};

module.exports = gameData;

