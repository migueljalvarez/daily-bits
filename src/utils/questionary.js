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
        label: "<br>",
        item: "br",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "<script>",
        item: "script",
        isTrue: true,
      },
      {
        id: "third-item",
        label: "<styles>",
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
    validationLabel: `1. <!DOCTYPE html> 2. <html> 3. <head> </head> 4. <body> </body> 5. </html>`,
  },
  {
    id: 6,
    name: "¿En que Etiquta de HTML debo incluir los estilos CSS?",
    avatar: "avatar4",
    type: "1",
    category: "html",
    state: false,
    options: [
      {
        id: "first-item",
        label: "<script>",
        item: "script",
        isTrue: false,
      },

      {
        id: "second-item",
        label: "<styles>",
        item: "styles",
        isTrue: false,
      },
      {
        id: "third-item ",
        label: "<link>",
        item: "link",
        isTrue: true,
      },
    ],
  },

  {
    id: 7,
    name: "¿Qué tecnologías no pertenece al MEAN Stack?",
    type: "2",
    category: "js",
    state: false,
    options: [
      {
        id: "first-item",
        label: "vue.js",
        item: "vue",
        isTrue: true,
      },
      {
        id: "second-item",
        label: "angular",
        item: "angular",
        isTrue: false,
      },
      {
        id: "third-item",
        label: "Express",
        item: "express",
        isTrue: false,
      },
      {
        id: "fourth_item",
        label: "Mongo",
        item: "mongo",
        isTrue: false,
      },
    ],
  },
  {
    id: 8,
    name: "El ForOf itera sobre:",
    avatar: "avatar3",
    type: "1",
    category: "js",
    state: false,
    options: [
      {
        id: "first-item",
        label: "Clave",
        item: "clave",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "Valor",
        item: "valor",
        isTrue: true,
      },
      {
        id: "third-item",
        label: "Indice",
        item: "indice",
        isTrue: false,
      },
    ],
  },
  {
    id: 9,
    name: "Si utilizo .find() obtengo un:",
    avatar: "avatar2",
    type: "1",
    category: "js",
    state: false,
    options: [
      {
        id: "first-item",
        label: "Objeto",
        item: "objeto",
        isTrue: true,
      },
      {
        id: "second-item",
        label: "Array",
        item: "array",
        isTrue: false,
      },
      {
        id: "third-item",
        label: "String",
        item: "string",
        isTrue: false,
      },
    ],
  },
  {
    id: 10,
    name: "Como debo exportar una Clase",
    avatar: "avatar1",
    type: "1",
    category: "js",
    state: false,
    options: [
      {
        id: "first-item",
        label: "export default { ClassName }",
        item: "export_inner_default_className",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "export { ClassName }",
        item: "export_className",
        isTrue: false,
      },
      {
        id: "third-item",
        label: "export default ClassName",
        item: "export_default_className",
        isTrue: true,
      },
    ],
  },
  {
    id: 11,
    name: "Seleccione el Tipo de Dato no Primitivo",
    avatar: "avatar2",
    type: "1",
    category: "js",
    state: false,
    options: [
      {
        id: "first-item",
        label: "String",
        item: "string",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "Object",
        item: "object",
        isTrue: true,
      },
      {
        id: "third-item",
        label: "Number",
        item: "number",
        isTrue: false,
      },
    ],
  },
  {
    id: 12,
    name: "Compo se reepresenta al Spread Syntax",
    avatar: "avatar3",
    type: "1",
    category: "js",
    state: false,
    options: [
      {
        id: "first-item",
        label: "&&",
        item: "and",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "...",
        item: "spread",
        isTrue: true,
      },
      {
        id: "third-item",
        label: "||",
        item: "or",
        isTrue: false,
      },
    ],
  },
  
  {
    id: 13,
    name: "¿Cuáles de las siguientes declaraciones son propiedades o atributos?",
    avatar: "avatar1",
    type: "1",
    category: "css",
    state: false,
    options: [
      {
        id: "first-item",
        label: "h1",
        item: "h1",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "color",
        item: "color",
        isTrue: true,
      },
      {
        id: "third-item",
        label: "img",
        item: "img",
        isTrue: false,
      },
    ],
  },
  {
    id: 14,
    name: "Indica la respuesta correcta para generar un efecto de transición:",
    avatar: "avatar2",
    type: "1",
    category: "css",
    state: false,
    options: [
      {
        id: "first-item",
        label: "transition: height .8s;",
        item: "transition",
        isTrue: true,
      },
      {
        id: "second-item",
        label: "transition-height: .8s;",
        item: "transition_height",
        isTrue: false,
      },
      {
        id: "third-item",
        label: "transform: transition(height, .8s);",
        item: "transform_transition",
        isTrue: false,
      },
    ],
  },
  {
    id: 15,
    name: "¿Para qué se utiliza la regla @keyframe?",
    avatar: "avatar3",
    type: "1",
    category: "css",
    state: false,
    options: [
      {
        id: "first-item",
        label: "Rotación",
        item: "rotacion",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "Animación",
        item: "animacion",
        isTrue: true,
      },
      {
        id: "third-item",
        label: "Importar fuente",
        item: "importar_fuente",
        isTrue: false,
      },
    ],
  },
  {
    id: 16,
    name: "¿Cómo se cambia el valor del margen derecho de un elemento?",
    avatar: "avatar3",
    type: "1",
    category: "css",
    state: false,
    options: [
      {
        id: "first-item",
        label: "margin-right",
        item: "m-r",
        isTrue: true,
      },
      {
        id: "second-item",
        label: "marginright",
        item: "mr",
        isTrue: false,
      },
      {
        id: "third-item",
        label: "right-margin",
        item: "r-m",
        isTrue: false,
      },
    ],
  },
  {
    id: 17,
    name: "¿Qué significa CSS?",
    avatar: "avatar2",
    type: "1",
    category: "css",
    state: false,
    options: [
      {
        id: "first-item",
        label: "Calibre Style Sheets",
        item: "calibre_style_sheets",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "Center Style Sheets",
        item: "center_style_sheets",
        isTrue: false,
      },
      {
        id: "third-item",
        label: "Cascading Style Sheets",
        item: "cascading_style_sheets",
        isTrue: true,
      },
    ],
  },
  {
    id: 18,
    name: "¿Cuál de las siguientes es un framework css?",
    type: "2",
    category: "css",
    state: false,
    options: [
      {
        id: "first-item",
        label: "Grunt",
        item: "grunt",
        isTrue: false,
      },
      {
        id: "second-item",
        label: "Angular",
        item: "angular",
        isTrue: false,
      },
      {
        id: "third-item",
        label: "Sass",
        item: "sass",
        isTrue: true,
      },
      {
        id: "fourth_item",
        label: "Node.js",
        item: "nodejs",
        isTrue: false,
      },
    ],
  },
];
