import avatar1 from "../assets/svg/avatar1.svg";
import avatar2 from "../assets/svg/avatar2.svg";
import avatar3 from "../assets/svg/avatar3.svg";

import angular from "../assets/svg/angular.svg";
import vue from "../assets/svg/vue.svg";
import kotlin from "../assets/svg/kotlin.svg";
import windows from "../assets/svg/windows.svg";
import express from "../assets/svg/express.svg";
import mongo from "../assets/svg/mongo.svg";

export default [
  {
    id: 1,
    name: "¿Qué etiqueta es semánticamente correcta para el contenido principal?",
    avatar: avatar1,
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
    avatar: avatar2,
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
    avatar: avatar3,
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
        item: angular,
        isTrue: false,
      },
      {
        id: "second-item",
        label: "Vue.js",
        item: vue,
        isTrue: true,
      },
      {
        id: "third-item",
        label: "Windows",
        item: windows,
        isTrue: false,
      },
      {
        id: "fourth_item",
        label: "Kotlin",
        item: kotlin,
        isTrue: false,
      },
    ],
  },
  // {
  //   id: 5,
  //   name: "Organiza la estructura de un documento HTML5",
  //   type: "3",
  //   category: "html",
  //   state: false,
  //   options: [
  //     {
  //       name: "doctype",
  //       className: "large",
  //     },
  //     {
  //       name: "head",
  //       className: "mid",
  //     },
  //     {
  //       name: "body",
  //       className: "mid",
  //     },
  //     {
  //       name: "open_html",
  //       className: "small",
  //     },
  //     {
  //       name: "close_html",
  //       className: "small",
  //     },
  //   ],
  //   validatorItem: ["doctype", "open_html", "head", "body", "close_html"],
  //   validationLabel: `1. <!DOCTYPE html> 2. <html> 3. <head> </head> 4. <body> </body> 5. </html>`,
  // },
  {
    id: 6,
    name: "¿En que Etiquta de HTML debo incluir los estilos CSS?",
    avatar: avatar2,
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
        label: "<link>",
        item: "link",
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
    id: 7,
    name: "¿Qué tecnologías no pertenece al MEAN Stack?",
    type: "2",
    category: "js",
    state: false,
    options: [
      {
        id: "first-item",
        label: "Vue.js",
        item: vue,
        isTrue: true,
      },
      {
        id: "second-item",
        label: "Angular",
        item: angular,
        isTrue: false,
      },
      {
        id: "third-item",
        label: "Express",
        item: express,
        isTrue: false,
      },
      {
        id: "fourth_item",
        label: "Mongo",
        item: mongo,
        isTrue: false,
      },
    ],
  },
  {
    id: 8,
    name: "El ForOf itera sobre:",
    avatar: avatar3,
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
    avatar: avatar2,
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
    id: 9,
    name: "Como debo exportar una Clase",
    avatar: avatar1,
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
    id: 10,
    name: "Seleccione el Tipo de Dato no Primitivo",
    avatar: avatar2,
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
    id: 11,
    name: "Compo se reepresenta al Spread Syntax",
    avatar: avatar3,
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
];
