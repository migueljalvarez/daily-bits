import React from "react";
import questionary from "../utils/questionary.js";
import constants from "../utils/constants.js";

const { RESPONSE } = constants;

class Question {
  constructor(category) {
    this.category = category;
    this.sendToLocalStorages();
  }

  find() {
    let questions =
      JSON.parse(localStorage.getItem(this.category)) ||
      questionary.filter((question) => question.category === this.category);
    console.log(questions);
    return questions;
  }

  // length() {
  //   return this.find().length;
  // }
  // Retorna un elemento a alzar
  random() {
    let all = this.find();
    // console.log("all", all);
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
        return (
          <>
            <div className="flex items-center">
              <img
                src={data.avatar}
                alt="user"
                width="80"
              />
              <h2>{data.name}</h2>
            </div>
            <div id="options">
              {data.options.map((opt) => (
                <div
                  key={opt.id}
                  id={opt.id}
                  className="option-select-default radio-default"
                >
                  <label>{opt.label}</label>
                  <span id={opt.item} title={opt.item}></span>
                </div>
              ))}
            </div>
          </>
        );
      case "2":
        return (
          <>
            <div className="flex items-center">
              <h2>{data.name}</h2>
            </div>
            <div id="options-with-images">
              {data.options.map((opt) => (
                <div
                  key={opt.id}
                  id={opt.id}
                  className="flex flex-col option-image option-select-default"
                >
                  <img src={opt.item} alt={opt.item} />
                  <p id={opt.item} title={opt.item}>
                    {opt.label}
                  </p>
                </div>
              ))}
            </div>
          </>
        );
      case "3":
        document.querySelector("#questions").innerHTML = `
        <div class="flex items-center">
          <h2>${data.name}</h2>
        </div>`;
        const element = document.getElementById("organized");
        element.style.backgroundImage = "url(../src/assets/svg/separator.svg)";
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

  sendToLocalStorages() {
    const questions = this.find();
    if (questions.length > 0) {
      localStorage.setItem(this.category, JSON.stringify(questions));
    }
  }
  verify(question) {
    let response = localStorage.getItem(RESPONSE);
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
  reset(category) {
    if (localStorage.getItem(category)) {
      localStorage.removeItem(category);
      return true;
    }
  }
}
export default Question;
