import allQuestions from "./allQuestions.js";

class Question {
  constructor(category) {
    this.category = category;
    this.loadQuestionInLocalStorages(this.category);
  }
  getRandomQuestion() {
    let q = this.findQuestions();
    let question = q.find((option) => !option.state);
    return question;
  }
  buildQuestion(data) {
    switch (data.type) {
      case "singleSelect":
        document.querySelector("#questions").innerHTML = `
        <div>
          <img src="../src/assets/svg/${data.avatar}.svg" alt="user" width="80">
          <h2>${data.name}</h2>
        </div>`;

        document.querySelector("#options").innerHTML = ``;
        data.options.forEach((option) => {
          document.querySelector("#options").innerHTML += `
            <div id=${option.id} class="option-select-default">
              <label>${option.label}</label>
              <input type="radio" name="items" id=${option.item} value=${option.item}></input>
            </div>
          `;
        });
        break;
      case "singleSelectWithImage":
        break;
      default:
        break;
    }
  }
  getQuestionWithOption() {
    let data = this.getRandomQuestion();
    return this.buildQuestion(data);
  }
  findQuestions() {
    let questions =
      JSON.parse(localStorage.getItem(this.category)) ||
      allQuestions.filter((question) => question.category === this.category);
    return questions;
  }
  loadQuestionInLocalStorages() {
    const questions = this.findQuestions();
    localStorage.setItem(this.category, JSON.stringify(questions));
  }
  verify(question) {
    let response = localStorage.getItem("response");
    let { options } = question;
    const option = options.find((option) => option.item === response);
    if (option.isTrue) {
      return true;
    } else {
      return false;
    }
  }
  setState(question, state) {
    question.state = state;
    const questions = this.findQuestions();
    questions.map((q) => {
      if (q.id === question.id) {
        q.state = state;
      }
    });
    localStorage.setItem(this.category, JSON.stringify(questions));
  }
  reset() {
    if (localStorage.getItem(this.category)) {
      localStorage.removeItem(this.category);
      return true;
    }
  }
}
export default Question;
