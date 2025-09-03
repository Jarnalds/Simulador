const gameData = {
  'evacuacion-parcial-completa': {
    name: 'Evacuación Parcial - Roles y Acciones',
    description: 'Protocolo de actuación para cada operador en un incidente de evacuación parcial. Las preguntas siguen el orden de las acciones.',
    roles: {
      "Operador_1": [{
        id: 'op1-q1',
        question: "¿Cuál es la primera acción del Operador 1?",
        options: [
          "Llamar a emergencias",
          "Validar si el área evacuada incluye el CCM",
          "Recabar información del evento"
        ],
        answer: "Validar si el área evacuada incluye el CCM"
      }, {
        id: 'op1-q2',
        question: "Si el CCM debe ser evacuado, ¿qué protocolo debe seguir el Operador 1?",
        options: [
          "Mantener el rol de vocero",
          "Seguir el playbook de evacuación total",
          "Esperar instrucciones del Operador 2"
        ],
        answer: "Seguir el playbook de evacuación total"
      }, {
        id: 'op1-q3',
        question: "Si el CCM no evacúa, ¿cuál es el siguiente paso para el Operador 1?",
        options: [
          "Colocar el seguro",
          "Recabar información del evento",
          "Escalar a LP"
        ],
        answer: "Recabar información del evento"
      }, {
        id: 'op1-q4',
        question: "¿Qué acción se toma después de recabar la información del evento, si el CCM no evacúa?",
        options: [
          "Llamar a emergencias",
          "Monitorear cámaras",
          "Mantener el rol de vocero"
        ],
        answer: "Llamar a emergencias"
      }, {
        id: 'op1-q5',
        question: "¿A quién se realiza el escalamiento después de llamar a emergencias?",
        options: [
          "Al Operador 2",
          "A LP (Líder del Protocolo)",
          "A los guardias"
        ],
        answer: "A LP (Líder del Protocolo)"
      }, {
        id: 'op1-q6',
        question: "¿Cuál es la responsabilidad principal y continua del Operador 1 a lo largo del incidente?",
        options: [
          "Describir la zona visualizada en voz alta",
          "Mantener el rol de vocero",
          "Informar novedades a los operadores 3 y 4"
        ],
        answer: "Mantener el rol de vocero"
      }],
      "Operador_2": [{
        id: 'op2-q1',
        question: "¿Qué debe validar primero el Operador 2 al iniciar el protocolo?",
        options: [
          "El estado de las cámaras",
          "El área evacuada",
          "La comunicación con los guardias"
        ],
        answer: "El área evacuada"
      }, {
        id: 'op2-q2',
        question: "Si el CCM NO evacúa, ¿cuál es la primera acción del Operador 2?",
        options: [
          "Colocar seguro",
          "Informar al vocero",
          "Monitorear cámaras"
        ],
        answer: "Colocar seguro"
      }, {
        id: 'op2-q3',
        question: "Después de colocar el seguro, ¿cuál es el siguiente paso para el Operador 2?",
        options: [
          "Monitorear cámaras",
          "Llamar a emergencias",
          "Escalar a LP"
        ],
        answer: "Monitorear cámaras"
      }, {
        id: 'op2-q4',
        question: "¿Con quién se comunica el Operador 2 después de monitorear las cámaras?",
        options: [
          "Con el vocero",
          "Con los guardias",
          "Con el Operador 3"
        ],
        answer: "Con los guardias"
      }, {
        id: 'op2-q5',
        question: "¿Cuál es el propósito principal de la comunicación del Operador 2?",
        options: [
          "Dar instrucciones al personal",
          "Describir la zona visualizada en voz alta",
          "Informar novedades al vocero"
        ],
        answer: "Informar novedades al vocero"
      }, {
        id: 'op2-q6',
        question: "En caso de que el CCM evacúe, ¿qué debe seguir el Operador 2?",
        options: [
          "El playbook de evacuación parcial",
          "El playbook de evacuación total",
          "Las instrucciones de los guardias"
        ],
        answer: "El playbook de evacuación total"
      }],
      'Operador_3': [{
        id: 'op3-q1',
        question: "¿Cuál es la primera acción del Operador 3 al activarse el protocolo?",
        options: [
          "Iniciar comunicación en voz alta",
          "Seguimiento de cámaras",
          "Validar si el CCM es evacuado"
        ],
        answer: "Validar si el CCM es evacuado"
      }, {
        id: 'op3-q2',
        question: "Si el CCM no evacúa, ¿qué tipo de monitoreo de cámaras debe realizar el Operador 3?",
        options: [
          "Solo monitoreo interno",
          "Solo monitoreo externo",
          "Monitoreo interno y externo"
        ],
        answer: "Monitoreo interno y externo"
      }, {
        id: 'op3-q3',
        question: "¿Qué protocolo debe seguir el Operador 3 si el CCM es evacuado?",
        options: [
          "El playbook total",
          "El playbook parcial",
          "Monitorear cámaras externas"
        ],
        answer: "El playbook total"
      }, {
        id: 'op3-q4',
        question: "¿Cómo debe ser la comunicación del Operador 3 al describir la zona visualizada?",
        options: [
          "Clara y continua",
          "En voz alta y constante",
          "A través de un chat"
        ],
        answer: "En voz alta y constante"
      }, {
        id: 'op3-q5',
        question: "¿Qué tipo de información se describe durante la comunicación verbal constante?",
        options: [
          "La zona visualizada",
          "Las novedades del Operador 2",
          "La causa de la emergencia"
        ],
        answer: "La zona visualizada"
      }, {
        id: 'op3-q6',
        question: "¿Cuál es el rol del Operador 3 cuando el CCM no evacúa?",
        options: [
          "Principalmente comunicador",
          "Principalmente monitorista",
          "Principalmente vocero"
        ],
        answer: "Principalmente monitorista"
      }],
      'Operador_4': [{
        id: 'op4-q1',
        question: "¿Cuál es el paso inicial para el Operador 4?",
        options: [
          "Comunicación clara y continua",
          "Validar si el CCM es evacuado",
          "Seguimiento con cámaras"
        ],
        answer: "Validar si el CCM es evacuado"
      }, {
        id: 'op4-q2',
        question: "Si el CCM no es evacuado, ¿qué tarea principal realiza el Operador 4?",
        options: [
          "Recabar información del evento",
          "Seguimiento con cámaras",
          "Llamar a emergencias"
        ],
        answer: "Seguimiento con cámaras"
      }, {
        id: 'op4-q3',
        question: "¿Qué tipo de comunicación debe mantener el Operador 4?",
        options: [
          "En voz alta y constante",
          "Silenciosa y discreta",
          "Clara y continua"
        ],
        answer: "Clara y continua"
      }, {
        id: 'op4-q4',
        question: "¿Cuál es la responsabilidad principal del Operador 4 al monitorear las cámaras?",
        options: [
          "Describir la zona visualizada",
          "Recabar información de los guardias",
          "Escalar a LP"
        ],
        answer: "Describir la zona visualizada"
      }, {
        id: 'op4-q5',
        question: "¿Qué informa el Operador 4 durante su comunicación continua?",
        options: [
          "La zona visualizada",
          "El estado del Operador 1",
          "El estado de los guardias"
        ],
        answer: "La zona visualizada"
      }, {
        id: 'op4-q6',
        question: "En caso de que el CCM sea evacuado, ¿qué protocolo se sigue?",
        options: [
          "El playbook total",
          "El playbook parcial",
          "El playbook de evacuación de cámaras"
        ],
        answer: "El playbook total"
      }]
    }
  },

  'lockdown-completo': {
    name: 'Lockdown Completo',
    description: 'Preguntas sobre el protocolo de actuación de cada operador en un incidente de lockdown completo, enfocadas en las acciones y su orden.',
    roles: {
      'Operador_1': [{
        id: 'op1-q1',
        question: "¿Cuál es la primera acción del Operador 1 al inicio del protocolo de Lockdown?",
        options: [
          "Recabar información del evento en general",
          "Activar el botón de pánico",
          "Llamar a 911"
        ],
        answer: "Activar el botón de pánico"
      }, {
        id: 'op1-q2',
        question: "Después de activar el botón de pánico, ¿qué paso sigue para el Operador 1?",
        options: [
          "Llamar a 911",
          "Recabar información del evento en general",
          "Activar escalamiento de comunicación interna (LP)"
        ],
        answer: "Recabar información del evento en general"
      }, {
        id: 'op1-q3',
        question: "Una vez que la información ha sido recabada, ¿cuál es la siguiente acción?",
        options: [
          "Llamar a 911",
          "Informar a SOC",
          "Asumir el rol de vocero"
        ],
        answer: "Llamar a 911"
      }, {
        id: 'op1-q4',
        question: "¿A quién se realiza el escalamiento de comunicación interna?",
        options: [
          "A los guardias",
          "A LP",
          "A SOC"
        ],
        answer: "A LP"
      }, {
        id: 'op1-q5',
        question: "¿Qué canal se utiliza para informar a SOC?",
        options: [
          "Solo por correo electrónico",
          "Hytera / WhatsApp",
          "Mediante la central telefónica"
        ],
        answer: "Hytera / WhatsApp"
      }, {
        id: 'op1-q6',
        question: "¿Después de activar el escalamiento, ¿cuál es el rol principal que el Operador 1 debe mantener?",
        options: [
          "Back up de monitoreo externo",
          "Vocero principal, compartiendo actualizaciones a personal interno MELI",
          "Monitoreo interno y externo por cámaras"
        ],
        answer: "Vocero principal, compartiendo actualizaciones a personal interno MELI"
      }],
      'Operador_2': [{
        id: 'op2-q1',
        question: "¿Cuál es la primera acción del Operador 2 en un Lockdown Completo?",
        options: [
          "Monitorear cámaras",
          "Comunicarse con guardias",
          "Colocar el seguro manual de la puerta del CCM"
        ],
        answer: "Colocar el seguro manual de la puerta del CCM"
      }, {
        id: 'op2-q2',
        question: "Después de asegurar la puerta, ¿qué tipo de monitoreo debe realizar el Operador 2?",
        options: [
          "Solo interno",
          "Solo externo",
          "Monitoreo interno y externo por cámaras"
        ],
        answer: "Monitoreo interno y externo por cámaras"
      }, {
        id: 'op2-q3',
        question: "¿Con quién se comunica el Operador 2 de manera constante y por qué medio?",
        options: [
          "Con el Operador 1 por WhatsApp",
          "Con los guardias vía radio",
          "Con LP por Hytera"
        ],
        answer: "Con los guardias vía radio"
      }, {
        id: 'op2-q4',
        question: "¿A quién debe informar el Operador 2 sobre las novedades del incidente?",
        options: [
          "A todo el personal de MELI",
          "Al Operador 1 (vocero)",
          "A SOC"
        ],
        answer: "Al Operador 1 (vocero)"
      }, {
        id: 'op2-q5',
        question: "¿Cuál es el propósito del monitoreo constante por cámaras del Operador 2?",
        options: [
          "Registrar los eventos para la policía",
          "Garantizar la seguridad interna y externa del CCM",
          "Facilitar la comunicación con LP"
        ],
        answer: "Garantizar la seguridad interna y externa del CCM"
      }, {
        id: 'op2-q6',
        question: "¿Cuál es la función principal del Operador 2 en el protocolo?",
        options: [
          "Ser el punto de comunicación principal",
          "Gestionar la seguridad física y el monitoreo",
          "Tomar decisiones sobre el protocolo"
        ],
        answer: "Gestionar la seguridad física y el monitoreo"
      }],
      'Operador_3': [{
        id: 'op3-q1',
        question: "¿Cuál es la responsabilidad principal del Operador 3 en el monitoreo?",
        options: [
          "Ser el monitoreo principal",
          "Ser el back up de monitoreo externo",
          "Realizar monitoreo interno y externo"
        ],
        answer: "Ser el back up de monitoreo externo"
      }, {
        id: 'op3-q2',
        question: "¿Con quién mantiene una comunicación constante el Operador 3?",
        options: [
          "Con los guardias",
          "Con el vocero (Operador 1)",
          "Con el Operador 2"
        ],
        answer: "Con el vocero (Operador 1)"
      }, {
        id: 'op3-q3',
        question: "¿Por qué es importante el rol de 'back up' del Operador 3?",
        options: [
          "Para dar más órdenes a los guardias",
          "Para asegurar que el monitoreo externo no falle",
          "Para reemplazar al Operador 2"
        ],
        answer: "Para asegurar que el monitoreo externo no falle"
      }, {
        id: 'op3-q4',
        question: "¿Qué tipo de información proporciona el Operador 3 al vocero?",
        options: [
          "Las decisiones tomadas por los guardias",
          "Novedades sobre el monitoreo externo",
          "Instrucciones de emergencia"
        ],
        answer: "Novedades sobre el monitoreo externo"
      }, {
        id: 'op3-q5',
        question: "¿Cuál es el propósito de la comunicación constante entre el Operador 3 y el vocero?",
        options: [
          "Distraer al vocero",
          "Mantener al vocero actualizado sobre la situación externa en tiempo real",
          "Solo para pedir ayuda"
        ],
        answer: "Mantener al vocero actualizado sobre la situación externa en tiempo real"
      }, {
        id: 'op3-q6',
        question: "¿Qué pasaría si el Operador 1 no estuviera disponible?",
        options: [
          "El Operador 2 asume el rol de vocero",
          "El Operador 3 asume las responsabilidades del vocero",
          "El protocolo se detiene hasta que llegue alguien"
        ],
        answer: "El Operador 3 asume las responsabilidades del vocero"
      }]
    }
  },

  'Protocolo-confirmacion': {
    name: 'Protocolo de Seguridad',
    description: 'Lista de verifiación de acciones clave para cada rol, con opciones de Confirmado o No confirmado.',
    roles: {
      "Operador_1": [{
        id: 'op1-c1',
        question: "Activa el botón de pánico.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'op1-c2',
        question: "Recaba información general del evento.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'op1-c3',
        question: "Llama a 911.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'op1-c4',
        question: "Asume el rol de vocero.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }],
      "Operador_2": [{
        id: 'op2-c1',
        question: "Bloquea el acceso manual al CCM inmediatamente.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'op2-c2',
        question: "Informa de todas las novedades al Operador 1 (el vocero).",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }],
      "Operador_3": [{
        id: 'op3-c1',
        question: "Realiza monitoreo externo y constante de las cámaras.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'op3-c2',
        question: "Informa de la situación externa en tiempo real.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }],
      "Operador_4": [{
        id: 'op4-c1',
        question: "Monitorea las cámaras de seguridad para dar seguimiento visual.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'op4-c2',
        question: "Mantiene comunicación clara y continua.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }],
      "Recepcion": [{
        id: 'rec-c1',
        question: "Confirma visualmente el acceso no autorizado.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'rec-c2',
        question: "Proporciona una descripción de los intrusos por radio.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }],
      "Pasillos_centrales": [{
        id: 'pc-c1',
        question: "Toma una posición de observación sin exponerse.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'pc-c2',
        question: "Informa por radio la ubicación y dirección de los intrusos.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }],
      "guardia_arcos": [{
        id: 'ar-c1',
        question: "Bloquea las entradas y salidas del almacén.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'ar-c2',
        question: "Se mantiene en alerta para evitar escapes.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }],
      "guardia_inbound": [{
        id: 'ib-c1',
        question: "Alerta a su personal sobre la situación de emergencia.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'ib-c2',
        question: "Dirige al personal a una zona de confinamiento designada.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }],
      "guardia_outbound": [{
        id: 'ob-c1',
        question: "Avisa al personal de su zona sobre la emergencia.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'ob-c2',
        question: "Se asegura de que el área esté despejada de personal.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }],
      "Analista": [{
        id: 'ana-c1',
        question: "Registra todos los eventos en una línea de tiempo.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }, {
        id: 'ana-c2',
        question: "Recopila datos de cámaras, radios y registros de acceso.",
        options: ["Confirmado", "No confirmado"],
        answer: "Confirmado"
      }]
    }
  },

};

module.exports = gameData;