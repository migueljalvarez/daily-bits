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
    name: "¿En que Etiquta de HTML debo incluir los estilos css?",
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
<<<<<<< HEAD
  // de aqui pa aba estan las preguntas de css.
  {
    id: 13,
    name: "Indica la forma correcta de declarar una media query en un archivo css:",
    avatar: "avatar1",
    type: "1",
    category: "css",
=======

  {
    id: 13,
    name: "Indica la forma correcta de declarar una media query en un archivo CSS:",
    avatar: "1",
    type: "1",
    category: "CSS",
>>>>>>> 3290149919c50e23d5d0fc6cdb769e173e5c8737
    state: false,
    options: [
      {
        id: "first-item",
        label: "@media-screen (max-width: 480px)",
        item: "media-sceen",
        istrue: false,
      },
      {
        id: "second-item",
        label: "@media-query only screen and (max-width: 480px)",
        item: "media-query-only",
        istrue: false,
      },
      {
        id: "third-item",
        label: "@media only screen and (max-width: 480px)",
        item: "media-only-screen",
        istrue: true,
      },
    ],
  },
<<<<<<< HEAD
  {
    id: 14,
    name: "Indica la respuesta correcta para generar un efecto de transición:",
    avatar: "avatar2",
    type: "1",
    category: "css",
=======

  {
    id: 14,
    name: "Indica la respuesta correcta para generar un efecto de transición:",
    avatar: "2",
    type: "1",
    category: "CSS",
>>>>>>> 3290149919c50e23d5d0fc6cdb769e173e5c8737
    state: false,
    options: [
      {
        id: "first-item",
        label: "transition: height .8s;",
        item: "transition",
        istrue: true,
      },
      {
        id: "second-item",
        label: "transition-height: .8s;",
        item: "transition-height",
        istrue: false,
      },
      {
        id: "third-item",
        label: "transform: transition(height, .8s);",
        item: "transform-transition",
        istrue: false,
      },
    ],
  },
<<<<<<< HEAD
  {
    id: 15,
    name: "¿Para qué se utiliza la regla @keyframe?",
    avatar: "avatar3",
    type: "1",
    category: "css",
=======

  {
    id: 15,
    name: "¿Para qué se utiliza la regla @keyframe?",
    avatar: "3",
    type: "1",
    category: "CSS",
>>>>>>> 3290149919c50e23d5d0fc6cdb769e173e5c8737
    state: false,
    options: [
      {
        id: "first-item",
        label: "Rotación",
        item: "rotacion",
        istrue: false,
      },
      {
        id: "second-item",
        label: "Animación",
        item: "animacion",
        istrue: true,
      },
      {
        id: "third-item",
        label: "Importar fuente",
        item: "importar-fuente",
        istrue: false,
      },
    ],
  },
<<<<<<< HEAD
  {
    id: 16,
    name: "La propiedad <resize> sirve para:",
    avatar: "avatar3",
    type: "1",
    category: "css",
=======

  {
    id: 16,
    name: "La propiedad <resize> sirve para:",
    avatar: "3",
    type: "1",
    category: "CSS",
>>>>>>> 3290149919c50e23d5d0fc6cdb769e173e5c8737
    state: false,
    options: [
      {
        id: "first-item",
<<<<<<< HEAD
        label:
          "Hacer que un elemento pueda ser modificable en su tamaño por el usuario",
=======
        label: "Hacer que un elemento pueda ser modificable en su tamaño por el usuario",
>>>>>>> 3290149919c50e23d5d0fc6cdb769e173e5c8737
        item: "elemento-modificable",
        istrue: true,
      },
      {
        id: "second-item",
        label: "Hacer que el elemento cambie su tamaño indicado",
        item: "elemento-cambie",
        istrue: false,
      },
      {
        id: "third-item",
        label: "No existe dicha propiedad",
        item: "no-existe-propiedad",
        istrue: false,
      },
    ],
  },
  {
    id: 17,
    name: "Cambiar el tamaño un objeto en CSS3:",
<<<<<<< HEAD
    avatar: "avatar2",
    type: "1",
    category: "css",
=======
    avatar: "2",
    type: "1",
    category: "CSS",
>>>>>>> 3290149919c50e23d5d0fc6cdb769e173e5c8737
    state: false,
    options: [
      {
        id: "first-item",
        label: "scale: 1.2;",
        item: "scale",
        istrue: false,
      },
      {
        id: "second-item",
        label: "transform: scale 1.2;",
        item: "transform",
        istrue: false,
      },
      {
        id: "third-item",
        label: "transform: scale(1,2);",
        item: "transform-scale",
        istrue: true,
      },
    ],
  },
  {
    id: 18,
    name: "¿Cuál de estás opciones es considerada un lenguaje de hojas de estilo?",
    avatar: "avatar1",
    type: "3",
<<<<<<< HEAD
    category: "css",
=======
    category: "CSS",
>>>>>>> 3290149919c50e23d5d0fc6cdb769e173e5c8737
    state: false,
    options: [
      {
        id: "first-item",
        label: "Grunt",
        item: "grunt",
        istrue: false,
      },
      {
        id: "second-item",
        label: "TypeScript",
        item: "typescript",
        istrue: false,
      },
      {
        id: "third-item",
        label: "SASS",
        item: "sass",
        istrue: true,
      },
      {
        id: "fourth_item",
        label: "Ionic",
        item: "ionic",
        isTrue: false,
      },
    ],
  },
];
