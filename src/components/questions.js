import ProgressBar from "./ProgressBar.js";
import Live from "./Live.js";
import Question from "./Question.js";
const live = new Live();
const progressBar = new ProgressBar();

let category = localStorage.getItem("categorySelected");
var questions = new Question(category);

const customClass = (id, className, method) => {
  document.getElementById(id).classList[method](className);
};

const getQuestion = () => {
  let q = questions.findQuestions();
  let question = q.find((option) => !option.state);
  return question;
};
const loadQuestions = () => {
  // Load Number of Life
  live.start();
  document.querySelector("#life").innerHTML = live.get();
  // proggresbar
  let stateProgress = progressBar.getProgress();
  document.getElementById("bar").style.width = `${stateProgress}%`;
  // load question
  let question = getQuestion();

  if (!question) {
    localStorage.setItem(`${category}-complete`, "true");
    window.location.href="/public/index.html";
  }
  document.querySelector("#questions").innerHTML = `<div>
    <img src="../src/assets/svg/${question.avatar}.svg" alt="user" width="80">
    <h2>${question.name}</h2>
  </div>`;

  document.querySelector("#options").innerHTML = ``;
  question.options.forEach((option) => {
    document.querySelector("#options").innerHTML += `
    <div id=${option.id} class="option-select-default">
      <label>${option.label}</label>
      <input type="radio" name="items" id=${option.item} value=${option.item}></input>
    </div>`;
  });

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
window.onload = loadQuestions;
const nextQuestion = () => {
  document.querySelector("#notification").innerHTML = "";
  loadQuestions();
};
const retry = (id, life) => {
  document.querySelector("#notification").innerHTML = "";
  customClass(`${id}`, "option-select-failed", "remove");
  live.update(life);
  document.querySelector("#life").innerHTML = live.get();
  loadQuestions();
};
const check = () => {
  let question = getQuestion();
  if (questions.verify(question)) {
    document.querySelector("#notification").innerHTML = `
      <div id="notification" class="notification-success show">
        <p id="message-title">¡Buen Trabajo!</p>
        <input id="complete" class="complete-success" type="submit" value="Continuar">
      </div>
    `;

    document.getElementById("complete").onclick = function () {
      let questionsNumber = questions.findQuestions();
      questions.setState(question, true);
      progressBar.load(questionsNumber.length);
      nextQuestion();
    };
  } else {
    let { options } = question;
    let option = options.find(
      (option) => option.item === localStorage.getItem("response")
    );
    let match = options.find((option) => option.isCorrect);
    customClass(`${option.id}`, "option-select-failed", "add");
    document.querySelector("#notification").innerHTML = `
      <div id="notification" class="notification-failed show">
        <p id="message-title">La respuesta es correcta es:</p>
        <p id="message-response">${match.label}</p>
        <input id="complete" class="complete-failed" type="submit" value="Continuar">
      </div>
    `;

    document.getElementById("complete").onclick = function () {
      let life = live.discount();
      if (life > 0) {
        retry(option.id, life);
      } else {
        let isCleaned = live.restart();
        if (isCleaned) {
          document.querySelector("#notification").innerHTML = "";
          loadQuestions();
        }
      }
    };
  }
};
document.getElementById("check").onclick = check;
