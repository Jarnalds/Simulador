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
  }
};

module.exports = gameData;
