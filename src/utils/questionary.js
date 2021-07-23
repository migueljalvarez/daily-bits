export default [
  {
    id: 1,
    name: "¿Qué etiqueta es semánticamente correcta para el contenido principal?",
    avatar: "avatar1",
    type: "1",
    category: "html",
    state: false,
    options: [
      {
        id: "first-item",
        label: "main",
        item: "main",
        isTrue: true,
      },
      {
        id: "second-item",
        label: "section",
        item: "section",
        isTrue: false,
      },
      {
        id: "third-item",
        label: "header",
        item: "header",
        isTrue: false,
      },
    ],
  },
  {
    id: 2,
    name: "¿Qué etiqueta HTML nos sirve para incluir archivos de JavaScript?",
    avatar: "avatar2",
    type: "1",
    category: "html",
    state: false,
    options: [
      {
        id: "first-item",
        label: "&lt;br&gt;",
        item: "br",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "&lt;script&gt;",
        item: "script",
        isTrue: true,
      },
      {
        id: "third-item",
        label: "&lt;styles&gt;",
        item: "styles",
        isTrue: false,
      },
    ],
  },
  {
    id: 3,
    name: "¿Qué significa DRY?",
    avatar: "avatar3",
    type: "1",
    category: "html",
    state: false,
    options: [
      {
        id: "first-item",
        label: "Don’t repeat yellow",
        item: "dont_repeat_yellow",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "Don’t repeat yourself",
        item: "dont_repeat_yourself",
        isTrue: true,
      },
      {
        id: "third-item",
        label: "Don’t recicle year",
        item: "dont_recicle_year",
        isTrue: false,
      },
    ],
  },
  {
    id: 4,
    name: "¿Qué tecnologías pertenece al MEVN Stack?",
    type: "2",
    category: "html",
    state: false,
    options: [
      {
        id: "first-item",
        label: "Angular",
        item: "angular",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "Vue.js",
        item: "vue",
        isTrue: true,
      },
      {
        id: "third-item",
        label: "Windows",
        item: "windows",
        isTrue: false,
      },
      {
        id: "fourth_item",
        label: "Kotlin",
        item: "kotlin",
        isTrue: false,
      },
    ],
  },
  {
    id: 5,
    name: "Organiza la estructura de un documento HTML5",
    type: "3",
    category: "html",
    state: false,
    options: [
      {
        name: "doctype",
        className: "large",
      },
      {
        name: "head",
        className: "mid",
      },
      {
        name: "body",
        className: "mid",
      },
      {
        name: "open_html",
        className: "small",
      },
      {
        name: "close_html",
        className: "small",
      },
    ],
    validatorItem: ["doctype", "open_html", "head", "body", "close_html"],
    validationLabel: `1. &lt;!DOCTYPE html&gt; 2. &lt;html&gt; 3. &lt;head&gt; &lt;/head&gt; 4.&lt;body&gt; &lt;/body&gt; 5.&lt;/html&gt;`,
  },
];
