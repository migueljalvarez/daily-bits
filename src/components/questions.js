import ProgressBar from "./ProgressBar.js";
import Live from "./Live.js";
import Question from "./Question.js";
import Notification from "./Notification.js";
import constants from "../utils/constants.js";

let category = localStorage.getItem("categorySelected");
var questions = new Question(category);

const customClass = (id, className, method) => {
  document.getElementById(id).classList[method](className);
};

const retry = (id, life) => {
  Notification.clean();
  customClass(`${id}`, "option-select-failed", "remove");
  Live.update(life);
  document.querySelector("#life").innerHTML = Live.get();
  load();
};

const complete = (data) => {
  if (questions.verify(data)) {
    let questionsNumber = questions.findQuestions();
    questions.setState(data, true);
    ProgressBar.load(questionsNumber.length);
    nextQuestion();
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

const load = () => {
  // Load Number of Life
  Live.start();
  document.querySelector("#life").innerHTML = Live.get();
  let progress = ProgressBar.getProgress();
  document.getElementById("bar").style.width = `${progress}%`;
  // load question
  questions.getQuestionWithOption();

  // if (!question) {
  //   localStorage.setItem(`${category}-complete`, "true");
  //   window.location.href="/public/index.html";
  // }

  // Primera Opcion
  document.getElementById("first-item").onclick = function firstItem() {
    customClass("first-item", "option-select-success", "add");
    customClass("second-item", "option-select-success", "remove");
    customClass("third-item", "option-select-success", "remove");

    customClass("second-item", "option-select-failed", "remove");
    customClass("third-item", "option-select-failed", "remove");

    localStorage.setItem(
      "response",
      document.querySelector("#first-item input").value
    );
    document.querySelector("#check").removeAttribute("disabled");
  };
  // Segunda Opcion
  document.getElementById("second-item").onclick = function secondItem() {
    customClass("first-item", "option-select-success", "remove");
    customClass("second-item", "option-select-success", "add");
    customClass("third-item", "option-select-success", "remove");

    customClass("first-item", "option-select-failed", "remove");
    customClass("third-item", "option-select-failed", "remove");

    localStorage.setItem(
      "response",
      document.querySelector("#second-item input").value
    );
    document.querySelector("#check").removeAttribute("disabled");
  };
  // Tercera Opcion
  document.getElementById("third-item").onclick = function thirdItem() {
    // Remove Success
    customClass("first-item", "option-select-success", "remove");
    customClass("second-item", "option-select-success", "remove");
    // Remove Failed
    customClass("first-item", "option-select-failed", "remove");
    customClass("second-item", "option-select-failed", "remove");
    // Add Success
    customClass("third-item", "option-select-success", "add");
    localStorage.setItem(
      "response",
      document.querySelector("#third-item input").value
    );
    document.querySelector("#check").removeAttribute("disabled");
  };
};
window.onload = load;

const nextQuestion = () => {
  Notification.clean();
  load();
};

const check = () => {
  let question = questions.getRandomQuestion();
  if (questions.verify(question)) {
    const { type } = constants.NOTIFICATION_SUCCESS;
    document.querySelector("#notification").innerHTML = Notification.get(type);
  } else {
    let { options } = question;
    let option = options.find(
      (option) => option.item === localStorage.getItem("response")
    );
    let match = options.find((option) => option.isTrue);
    customClass(`${option.id}`, "option-select-failed", "add");
    const { type } = constants.NOTIFICATION_FAILED;
    document.querySelector("#notification").innerHTML = Notification.get(
      type,
      match
    );
  }

  document.getElementById("complete").onclick = function submit() {
    return complete(question);
  };
};
document.getElementById("check").onclick = check;
