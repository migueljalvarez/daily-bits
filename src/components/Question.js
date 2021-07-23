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
  cleanerDiv() {
    document.querySelector("#options-with-images").innerHTML = ``;
    document.querySelector("#options").innerHTML = ``;
    document.querySelector("#organized").innerHTML = ``;
    document.querySelector("#unorganized").innerHTML = ``;
  }
  build(data) {
    switch (data.type) {
      case "1":
        document.querySelector("#questions").innerHTML = `
        <div class="flex items-center">
          <img src="../src/assets/svg/${data.avatar}.svg" alt="user" width="80">
          <h2>${data.name}</h2>
        </div>`;
        this.cleanerDiv();
        data.options.forEach((option) => {
          document.querySelector("#options").innerHTML += `
            <div id=${option.id} class="option-select-default radio-default">
              <label>${option.label}</label>
              <span id=${option.item} title=${option.item}></span>
            </div>
          `;
        });
        break;
      case "2":
        document.querySelector("#questions").innerHTML = `
        <div class="flex items-center">
          <h2>${data.name}</h2>
        </div>`;
        this.cleanerDiv();
        data.options.forEach((option) => {
          document.querySelector("#options-with-images").innerHTML += `
          <div id=${option.id} class="flex flex-col option-image option-select-default">
            <img src="../src/assets/svg/${option.item}.svg" alt=${option.item}>
            <p id=${option.item} title=${option.item}>${option.label}</p>
          </div>
          `;
        });
        break;
      case "3":
        document.querySelector("#questions").innerHTML = `
        <div class="flex items-center">
          <h2>${data.name}</h2>
        </div>`;
        this.cleanerDiv();
        const { options } = data;
        options.map((obj) => {
          document.querySelector("#unorganized").innerHTML += `
          <input id=${obj.name} class=${obj.className} value=${obj.name} style="background-image: url(../src/assets/svg/${obj.name}.svg);" />
          `;
        });
      default:
        break;
    }
  }

  get() {
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
    if (question.type === "3") {
      var data = [5];
      response = JSON.parse(response);
      response.map((res, index) => {
        if (res === question.validatorItem[index]) {
          data.push(true);
        } else {
          data.push(false);
        }
      });
      if (data.includes(false)) {
        return false;
      } else {
        return true;
      }
    } else {
      if (option.isTrue) {
        return true;
      } else {
        return false;
      }
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
