export default [
  {
    id: 1,
    name: "¿Qué etiqueta es semánticamente correcta para el contenido principal?",
    avatar: "avatar1",
    type: "singleSelect",
    category: "html",
    state: false,
    options: [
      {
        id: "first-item",
        label: "main",
        item: "main",
        isCorrect: true,
      },
      {
        id: "second-item",
        label: "section",
        item: "section",
        isCorrect: false,
      },
      {
        id: "third-item",
        label: "header",
        item: "header",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    name: "¿Qué etiqueta HTML nos sirve para incluir archivos de JavaScript?",
    avatar: "avatar2",
    type: "singleSelect",
    category: "html",
    state: false,
    options: [
      {
        id: "first-item",
        label: "&lt;br&gt;",
        item: "br",
        isCorrect: false,
      },
      {
        id: "second-item",
        label: "&lt;script&gt;",
        item: "script",
        isCorrect: true,
      },
      {
        id: "third-item",
        label: "&lt;styles&gt;",
        item: "styles",
        isCorrect: false,
      },
    ],
  }
];
