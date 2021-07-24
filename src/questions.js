import Live from "./components/Live.js";
import Notification from "./components/Notification.js";
import ProgressBar from "./components/ProgressBar.js";
import Question from "./components/Question.js";
import Cleaner from "./components/Cleaner.js";

import constants from "./utils/constants.js";
import time from "./utils/time.js";

const { ADD, CATEGORY, FAILED, REMOVE, RESPONSE, SUCCESS, TOTAL_RESPONSES } =
  constants;

let category = localStorage.getItem(CATEGORY);
let cleaner = new Cleaner(category);
let live = new Live(category);
let progressBar = new ProgressBar(category);
let quetionary = new Question(category);

let question = quetionary.get();
let organized = document.getElementById("organized");
let checking = document.getElementById("check");

const home = () => {
  localStorage.setItem(`${category}-complete`, "true");
  window.location.href = "/public/home.html";
};

const setCustomClass = (id, className, method) => {
  document.getElementById(id).classList[method](className);
};
const completeSelection = () => {
  let { children } = organized;
  if (children.length === 5) {
    document.querySelector("#check").removeAttribute("disabled");
  }
};

const retry = (id, life) => {
  Notification.clean();
  if (id) {
    setChecking(id, FAILED, REMOVE);
    setChecking(id, SUCCESS, REMOVE);
  }
  live.update(life);
  document.querySelector("#life").innerHTML = live.get();
  let responsesFailed = parseInt(localStorage.getItem(FAILED));
  localStorage.setItem(FAILED, responsesFailed ? responsesFailed + 1 : 1);
  document.querySelector("#check").setAttribute("disabled", true);
};

const complete = (data) => {
  if (quetionary.verify(data)) {
    let num = quetionary.length();
    let result = quetionary.setState(data);
    if (result.state) {
      let responsesSuccess = parseInt(localStorage.getItem(SUCCESS));
      localStorage.setItem(
        SUCCESS,
        responsesSuccess ? responsesSuccess + 1 : 1
      );
      progressBar.load(num);
      cleaner.response();
      cleaner.div();
      nextQuestion();
    }
  } else {
    let life = live.discount();
    cleaner.response();
    if (life > 0) {
      if (question.type === "3") {
        retry(null, life);
        document.querySelector("#organized").innerHTML = ``;
        question.options.map((obj) => {
          const element = document.getElementById(obj.name);
          element.removeAttribute("disabled");
          element.style.backgroundImage = `url(../src/assets/svg/${obj.name}.svg`;
        });
      } else {
        let { options } = data;
        let option = options.find(
          (option) => option.item === localStorage.getItem(RESPONSE)
        );
        retry(option.id, life);
      }
    } else {
      let title = "Has Perdido, debes empezar de 0.";
      const resetNotification = new Notification(title);
      document.querySelector("#notification").innerHTML =
        resetNotification.getNotification();
      document.getElementById("complete").onclick = function () {
        if (live.restart()) {
          Notification.clean();
          load();
        }
      };
    }
  }
};

const nextQuestion = () => {
  Notification.clean();
  time.set("end");
  time.calculate();
  load();
};

const setResponse = (question, id, responses) => {
  let { options } = question;
  let opt = options.find((opt) => opt.id === id);
  switch (question.type) {
    case "1":
      localStorage.setItem(
        RESPONSE,
        document.querySelector(`#${opt.item}`).title
      );
      break;
    case "2":
      localStorage.setItem(
        RESPONSE,
        document.querySelector(`#${opt.id} p`).title
      );
      break;
    case "3":
      localStorage.setItem(RESPONSE, JSON.stringify(responses));
      break;
    default:
      break;
  }
};

const setChecking = (id, type, method) => {
  if (question.type === "1") {
    setCustomClass(id, `option-select-${type}`, method);
    setCustomClass(id, `radio-${type}`, method);
  } else {
    setCustomClass(id, `option-select-${type}`, method);
  }
  setCustomClass(id, `option-select-${type}`, method);
};

const clickItem = (id) => {
  setChecking(id, SUCCESS, ADD);
  let opts = question.options.filter((opt) => opt.id !== id);
  for (const opt of opts) {
    // Remove Success
    setChecking(opt.id, SUCCESS, REMOVE);
    // Remove Failed
    setChecking(opt.id, FAILED, REMOVE);
  }
  document.querySelector("#check").removeAttribute("disabled");
  setResponse(question, id);
};

let responses = [];
const selectItem = (id) => {
  responses.push(id);
  if (responses.length === 5) {
    setResponse(question, null, responses);
  }
  const element = document.getElementById(id);
  element.style.backgroundImage = "none";
  element.setAttribute("disabled", true);
  const { options } = question;
  const opt = options.find((opt) => opt.name === id);
  const organizator = document.querySelector("#organized");
  organizator.innerHTML += `
  <input id=${opt.name} class=${opt.className} value=${opt.name} style="background-image: url(../src/assets/svg/${opt.name}.svg);" />
  `;
  completeSelection();
};

const load = () => {
  cleaner.div();
  // Load Number of Life
  document.querySelector("#check").setAttribute("disabled", true);
  live.start();
  time.set("start");
  document.querySelector("#life").innerHTML = live.get();
  let progress = progressBar.getProgress();
  document.getElementById("bar").style.width = `${progress}%`;
  // load question
  if (question) {
    let data = quetionary.findById(question.id);
    if (data.state) {
      question = quetionary.get();
    }
    if (!question) {
      time.set("end");
      home();
    }
    quetionary.build(question);
  } else {
    time.set("end");
    home();
  }

  // Options
  const firstItem = document.getElementById("first-item");
  if (firstItem) {
    firstItem.onclick = () => clickItem("first-item");
  }

  const secondItem = document.getElementById("second-item");
  if (secondItem) {
    secondItem.onclick = () => clickItem("second-item");
  }

  const thirdItem = document.getElementById("third-item");
  if (thirdItem) {
    thirdItem.onclick = () => clickItem("third-item");
  }

  const fourthItem = document.getElementById("fourth_item");
  if (fourthItem) {
    fourthItem.onclick = () => clickItem("fourth_item");
  }

  const docType = document.getElementById("doctype");
  if (docType) {
    docType.onclick = () => selectItem("doctype");
  }

  const head = document.getElementById("head");
  if (head) {
    head.onclick = () => selectItem("head");
  }

  const body = document.getElementById("body");
  if (body) {
    body.onclick = () => selectItem("body");
  }

  const openHtml = document.getElementById("open_html");
  if (openHtml) {
    openHtml.onclick = () => selectItem("open_html");
  }

  const closeHtml = document.getElementById("close_html");
  if (closeHtml) {
    closeHtml.onclick = () => selectItem("close_html");
  }
};
window.onload = () => load();

checking.onclick = () => {
  if (quetionary.verify(question)) {
    const successNotification = new Notification();
    document.querySelector("#notification").innerHTML =
      successNotification.getNotificationSuccess();
  } else {
    if (question.type === "3") {
      const failedNotification = new Notification();
      document.querySelector("#notification").innerHTML =
        failedNotification.getNotificationFailed(question);
    } else {
      let { options } = question;
      let option = options.find(
        (option) => option.item === localStorage.getItem(RESPONSE)
      );
      let correctAnswer = options.find((option) => option.isTrue);
      setChecking(option.id, FAILED, ADD);
      const failedNotification = new Notification();
      document.querySelector("#notification").innerHTML =
        failedNotification.getNotificationFailed(correctAnswer);
    }
  }

  document.getElementById("complete").onclick = () => {
    let responses = parseInt(localStorage.getItem(TOTAL_RESPONSES));
    localStorage.setItem(TOTAL_RESPONSES, responses ? responses + 1 : 1);
    return complete(question);
  };
};

document.getElementById("close").onclick = () => {
  cleaner.progress();
  window.location.href = "/public/home.html";
};
