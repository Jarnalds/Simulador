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