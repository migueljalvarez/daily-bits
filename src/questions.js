import ProgressBar from "./components/ProgressBar.js";
import Live from "./components/Live.js";
import Question from "./components/Question.js";
import Notification from "./components/Notification.js";
import constants from "./utils/constants.js";

let category = localStorage.getItem("categorySelected");
var questions = new Question(category);
var question = questions.getQuestion();

const setTime = (type) => {
  let time = Date.now();
  localStorage.setItem(`${type}-time`, time);
};
const home = () => {
  localStorage.setItem(`${category}-complete`, "true");
  window.location.href = "/public/index.html";
};

const setCustomClass = (id, className, method) => {
  document.getElementById(id).classList[method](className);
};

const retry = (id, life) => {
  Notification.clean();
  setCustomClass(`${id}`, "option-select-failed", "remove");
  Live.update(life);
  document.querySelector("#life").innerHTML = Live.get();
  let responsesFailed = parseInt(localStorage.getItem("failed"));
  localStorage.setItem("failed", responsesFailed ? responsesFailed + 1 : 1);
  load();
};

const complete = (data) => {
  if (questions.verify(data)) {
    let qty = questions.qty();
    let result = questions.setState(data);
    if (result.state) {
      let responsesSuccess = parseInt(localStorage.getItem("success"));
      localStorage.setItem(
        "success",
        responsesSuccess ? responsesSuccess + 1 : 1
      );
      ProgressBar.load(qty);
      nextQuestion();
    }
  } else {
    let { options } = data;
    let option = options.find(
      (option) => option.item === localStorage.getItem("response")
    );
    let life = Live.discount();
    if (life > 0) {
      retry(option.id, life);
    } else {
      const { type } = constants.NOTIFICATION_RESET;
      document.querySelector("#notification").innerHTML =
        Notification.get(type);
      document.getElementById("complete").onclick = function () {
        let isCleaned = Live.restart();
        if (isCleaned) {
          Notification.clean();
          load();
        }
      };
    }
  }
};

const nextQuestion = () => {
  Notification.clean();
  load();
};

const check = () => {
  if (questions.verify(question)) {
    const { type } = constants.NOTIFICATION_SUCCESS;
    document.querySelector("#notification").innerHTML = Notification.get(type);
  } else {
    let { options } = question;
    let option = options.find(
      (option) => option.item === localStorage.getItem("response")
    );
    let match = options.find((option) => option.isTrue);
    setCustomClass(`${option.id}`, "option-select-failed", "add");
    const { type } = constants.NOTIFICATION_FAILED;
    document.querySelector("#notification").innerHTML = Notification.get(
      type,
      match
    );
  }

  document.getElementById("complete").onclick = function submit() {
    let responses = parseInt(localStorage.getItem("total-responses"));
    localStorage.setItem("total-responses", responses ? responses + 1 : 1);
    return complete(question);
  };
};
document.getElementById("check").onclick = check;
const setResponse = (question, itemId) => {
  switch (question.type) {
    case "1":
      localStorage.setItem(
        "response",
        document.querySelector(`#${itemId} input`).value
      );
      break;
    case "2":
      let { options } = question;
      let opt = options.find((opt) => opt.id === itemId);
      localStorage.setItem(
        "response",
        document.querySelector(`#${opt.item}`).title
      );
      break;
    default:
      break;
  }
};
const load = () => {
  // Load Number of Life
  Live.start();
  setTime("start");
  document.querySelector("#life").innerHTML = Live.get();
  let progress = ProgressBar.getProgress();
  document.getElementById("bar").style.width = `${progress}%`;
  // load question
  if (question) {
    let data = questions.findById(question.id);
    if (data.state) {
      question = questions.next();
    }
    if (!question) {
      setTime("end");
      home();
    }
    questions.buildQuestion(question);
  } else {
    setTime("end");
    home();
  }

  // Options
  // Primera Opcion
  document.getElementById("first-item").onclick = function firstItem() {
    let itemId = "first-item";
    setCustomClass(itemId, "option-select-success", "add");
    // Remove Success
    setCustomClass("second-item", "option-select-success", "remove");
    setCustomClass("third-item", "option-select-success", "remove");
    // Remove Failed
    setCustomClass("second-item", "option-select-failed", "remove");
    setCustomClass("third-item", "option-select-failed", "remove");
    document.querySelector("#check").removeAttribute("disabled");
    setResponse(question, itemId);
  };
  // Segunda Opcion
  document.getElementById("second-item").onclick = function secondItem() {
    let itemId = "second-item";
    setCustomClass(itemId, "option-select-success", "add");
    // Remove Success
    setCustomClass("first-item", "option-select-success", "remove");
    setCustomClass("third-item", "option-select-success", "remove");
    // Remove Failed
    setCustomClass("first-item", "option-select-failed", "remove");
    setCustomClass("third-item", "option-select-failed", "remove");
    document.querySelector("#check").removeAttribute("disabled");
    setResponse(question, itemId);
  };
  // Tercera Opcion
  document.getElementById("third-item").onclick = function thirdItem() {
    let itemId = "third-item";
    setCustomClass(itemId, "option-select-success", "add");
    // Remove Success
    setCustomClass("first-item", "option-select-success", "remove");
    setCustomClass("second-item", "option-select-success", "remove");
    // Remove Failed
    setCustomClass("first-item", "option-select-failed", "remove");
    setCustomClass("second-item", "option-select-failed", "remove");
    document.querySelector("#check").removeAttribute("disabled");
    setResponse(question, itemId);
  };
};
window.onload = load;
