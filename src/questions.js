import ProgressBar from "./components/ProgressBar.js";
import Live from "./components/Live.js";
import Question from "./components/Question.js";
import Notification from "./components/Notification.js";
import constants from "./utils/constants.js";

let category = localStorage.getItem("categorySelected");
var quetionary = new Question(category);
var question = quetionary.get();

const {
  ADD,
  DEFAULT,
  FAILED,
  NOTIFICATION_FAILED,
  NOTIFICATION_RESET,
  NOTIFICATION_SUCCESS,
  REMOVE,
  RESPONSE,
  SUCCESS,
  TOTAL_RESPONSES,
} = constants;

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
  setCheking(id, FAILED, REMOVE);
  Live.update(life);
  document.querySelector("#life").innerHTML = Live.get();
  let responsesFailed = parseInt(localStorage.getItem(FAILED));
  localStorage.setItem(FAILED, responsesFailed ? responsesFailed + 1 : 1);
};

const complete = (data) => {
  if (quetionary.verify(data)) {
    let qty = quetionary.length();
    let result = quetionary.setState(data);
    if (result.state) {
      let responsesSuccess = parseInt(localStorage.getItem(SUCCESS));
      localStorage.setItem(
        SUCCESS,
        responsesSuccess ? responsesSuccess + 1 : 1
      );
      ProgressBar.load(qty);
      nextQuestion();
    }
  } else {
    let { options } = data;
    let option = options.find(
      (option) => option.item === localStorage.getItem(RESPONSE)
    );
    let life = Live.discount();
    if (life > 0) {
      retry(option.id, life);
      setCheking(option.id, SUCCESS, REMOVE);
    } else {
      const { type } = NOTIFICATION_RESET;
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
  if (quetionary.verify(question)) {
    const { type } = NOTIFICATION_SUCCESS;
    document.querySelector("#notification").innerHTML = Notification.get(type);
  } else {
    let { options } = question;
    let option = options.find(
      (option) => option.item === localStorage.getItem(RESPONSE)
    );
    let match = options.find((option) => option.isTrue);
    setCheking(option.id, FAILED, ADD);
    const { type } = NOTIFICATION_FAILED;
    document.querySelector("#notification").innerHTML = Notification.get(
      type,
      match
    );
  }

  document.getElementById("complete").onclick = function submit() {
    let responses = parseInt(localStorage.getItem(TOTAL_RESPONSES));
    localStorage.setItem(TOTAL_RESPONSES, responses ? responses + 1 : 1);
    return complete(question);
  };
};
document.getElementById("check").onclick = check;

const setResponse = (question, id) => {
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
    default:
      break;
  }
};

const setCheking = (id, type, method) => {
  setCustomClass(id, `option-select-${type}`, method);
  type = method === REMOVE ? DEFAULT : type;
  let { options } = question;
  let opt = options.find((opt) => opt.id === id);
  let span = document.querySelector(`#${opt.id} span`);
  if (span) {
    span.innerHTML = `
  <img src="../src/assets/svg/check-${type}.svg" alt="check">
  `;
  }
};

const clickItem = (id) => {
  setCheking(id, SUCCESS, ADD);
  let opts = question.options.filter((opt) => opt.id !== id);
  for (const opt of opts) {
    // Remove Success
    setCheking(opt.id, SUCCESS, REMOVE);
    // Remove Failed
    setCheking(opt.id, FAILED, REMOVE);
  }
  document.querySelector("#check").removeAttribute("disabled");
  setResponse(question, id);
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
    let data = quetionary.findById(question.id);
    if (data.state) {
      question = quetionary.next();
    }
    if (!question) {
      setTime("end");
      home();
    }
    quetionary.build(question);
  } else {
    setTime("end");
    home();
  }

  // Options
  let firstItem = document.getElementById("first-item");
  if (firstItem) {
    firstItem.onclick = () => clickItem("first-item");
  }

  let secondItem = document.getElementById("second-item");
  if (secondItem) {
    secondItem.onclick = () => clickItem("second-item");
  }

  let thirdItem = document.getElementById("third-item");
  if (thirdItem) {
    thirdItem.onclick = () => clickItem("third-item");
  }

  let fourthItem = document.getElementById("fourth_item");
  if (fourthItem) {
    fourthItem.onclick = () => clickItem("fourth_item");
  }
};
window.onload = load;
