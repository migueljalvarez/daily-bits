import questionary from "../utils/questionary.js";
class Question {
  constructor(category) {
    this.category = category;
    this.loadQuestionInLocalStorages(this.category);
  }
  length() {
    return this.find().length;
  }
  // Retorna un elemento a alzar
  random() {
    let all = this.find();
    let questions = all.filter((option) => option.state !== true);
    if (questions.length === 0) {
      console.log("regresando al home...");
    } else {
      const random = Math.floor(Math.random() * questions.length);
      return questions[random];
    }
  }

  build(data) {
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
              <span id=${option.item} title=${option.item}>
                <img src="../src/assets/svg/check-default.svg" alt="radio">
              </span>
            </div>
          `;
        });
        break;
      case "2":
        document.querySelector("#questions").innerHTML = `
        <div class="flex items-center">
          <h2>${data.name}</h2>
        </div>`;
        document.querySelector("#options").innerHTML = ``;
        document.querySelector("#options-with-images").innerHTML = ``;
        data.options.forEach((option) => {
          document.querySelector("#options-with-images").innerHTML += `
          <div id=${option.id} class="flex flex-col option-image option-select-default">
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

  get() {
    return this.random();
  }
  next() {
    return this.random();
  }

  find() {
    let questions =
      JSON.parse(localStorage.getItem(this.category)) ||
      questionary.filter((question) => question.category === this.category);
    return questions;
  }
  loadQuestionInLocalStorages() {
    const questions = this.find();
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
    let questions = this.find();
    let data = questions.find((item) => item.id === id);
    return data;
  }
  setState(question) {
    const questions = this.find();
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
