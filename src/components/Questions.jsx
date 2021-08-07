import React from "react";
import questionary from "../utils/questionary.js";
import constants from "../utils/constants.js";
import styled from "styled-components";

const ContainerQuestions = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.img`
  margin: 10px;
`;
const Title = styled.h2`
  float: right;
  width: -webkit-fill-available;
  margin: 5px;
`;
const Options = styled.div`
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
`;

const Item = styled.div`
  background-color: #232e35;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  border-radius: 5px;
  width: 328px;
`;

const OptionsWithImage = styled.div`
  justify-content: space-between;
  display: inline-block;
  margin: 0 32px;
`;

const ItemWithImage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #16161a;
  border: 2px solid var(--color-gray);
  margin: 2px 2px;
  width: 144px;
  height: 200px;
  float: left;
  border-radius: 8px;
`;
const ItemImg = styled.img`
  border-radius: 8px;
`;
const ItemText = styled.p`
  text-align: center;
  margin: 20px 0;
`;
const ItemLabel = styled.label``;

const { RESPONSE } = constants;

class Question {
  constructor(category) {
    this.category = category;
    this.sendToLocalStorages();
  }
  
  handleSelect(e, data) {
    const { options } = data;
    options.map((opt) => {
      if (opt.id !== e.target.id) {
        document
          .getElementById(opt.id)
          .classList.remove("option-select-success");
        document.getElementById(opt.id).classList.remove("radio-success");
      } else {
        document
          .getElementById(e.target.id)
          .classList.add("option-select-success");
        document.getElementById(e.target.id).classList.add("radio-success");
        localStorage.setItem(RESPONSE, opt.item);
      }
      const check = document.querySelector("#check");
      if (check.attributes.getNamedItem('disabled')) {
        check.attributes.removeNamedItem("disabled");
      }
    });
  }
  find() {
    let questions =
      JSON.parse(localStorage.getItem(this.category)) ||
      questionary.filter((question) => question.category === this.category);
    return questions;
  }

  length() {
    return this.find().length;
  }
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
        document.querySelector("#check").setAttribute("disabled", true);
        return (
          <>
            <ContainerQuestions className="">
              <Avatar
                src={`../assets/svg/${data.avatar}.svg`}
                alt="user"
                width="80"
              />
              <Title>{data.name}</Title>
            </ContainerQuestions>

            <Options id="options">
              {data.options.map((opt) => (
                <Item
                  key={opt.id}
                  id={opt.id}
                  className="option-select-default radio-default"
                  onClick={(e) => this.handleSelect(e, data)}
                >
                  <ItemLabel>{opt.label}</ItemLabel>
                </Item>
              ))}
            </Options>
          </>
        );
      case "2":
        return (
          <>
            <ContainerQuestions className="">
              <Title>{data.name}</Title>
            </ContainerQuestions>
            <OptionsWithImage id="options-with-images">
              {data.options.map((opt) => (
                <ItemWithImage
                  key={opt.id}
                  id={opt.id}
                  className="option-select-default"
                >
                  <ItemImg
                    src={`../assets/svg/${opt.item}.svg`}
                    alt={opt.item}
                  />
                  <ItemText id={opt.item} title={opt.item}>
                    {opt.label}
                  </ItemText>
                </ItemWithImage>
              ))}
            </OptionsWithImage>
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
