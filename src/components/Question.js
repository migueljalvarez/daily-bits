import allQuestions from "./allQuestions.js";
class Question {
  constructor(category) {
    this.category = category;
    this.loadQuestionInLocalStorages(this.category);
  }
  qty() {
    return this.findQuestions().length;
  }
  // Retorna un elemento a alzar
  getRandomQuestion() {
    let all = this.findQuestions();
    let questions = all.filter((option) => option.state !== true);
    if (questions.length === 0) {
      console.log("regresando al home...");
    } else {
      const random = Math.floor(Math.random() * questions.length);
      return questions[random];
    }
  }

  buildQuestion(data) {

    switch (data.type) {
      case "1":
        document.querySelector("#questions").innerHTML = `
        <div class="flex items-center">
          <img src="../src/assets/svg/${data.avatar}.svg" alt="user" width="80">
          <h2>${data.name}</h2>
        </div>`;
        document.querySelector("#options-with-images").innerHTML = ``;
        document.querySelector("#options").innerHTML = ``;
        data.options.forEach((option) => {
          document.querySelector("#options").innerHTML += `
            <div id=${option.id} class="option-select-default">
              <label>${option.label}</label>
              <input type="radio" name="items" id=${option.item} value=${option.item}></input>
            </div>
          `;
        });
        break
      case "2":
        document.querySelector("#questions").innerHTML = `
        <div class="flex items-center">
          <h2>${data.name}</h2>
        </div>`;
        document.querySelector("#options").innerHTML = ``;
        document.querySelector("#options-with-images").innerHTML = ``;
        data.options.forEach((option) => {
          document.querySelector("#options-with-images").innerHTML += `
          <div id=${option.id} class="flex flex-col option-image">
            <img src="../src/assets/svg/${option.item}.svg" alt="angular">
            <p id=${option.item} title=${option.item}>${option.label}</p>
          </div>
          `;
        });
        break;
      default:
        break;
    }
  }

  getQuestion() {
    return this.getRandomQuestion();
  }
  next() {
    return this.getRandomQuestion();
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
  findById(id) {
    let questions = this.findQuestions();
    let data = questions.find((item) => item.id === id);
    return data;
  }
  setState(question) {
    const questions = this.findQuestions();
    questions.map((q) => {
      if (q.id === question.id) {
        q.state = true;
      }
    });

    localStorage.setItem(this.category, JSON.stringify(questions));
    return this.findById(question.id);
  }
  static reset(category) {
    if (localStorage.getItem(category)) {
      localStorage.removeItem(category);
      return true;
    }
  }
}
export default Question;
