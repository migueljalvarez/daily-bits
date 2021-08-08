import React from "react";
import questionary from "../utils/questionary.js";
import constants from "../utils/constants.js";
import styled from "styled-components";

const ContainerQuestions = styled.div`
  display: flex;
  align-items: center;
`;
const ContainerQuestionsWithPadding = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px 10px;
`;
const Avatar = styled.img`
  margin: 10px;
`;
const Title = styled.h2`
  float: right;
  width: -webkit-fill-available;
  padding: 0 2px;
  font-size: 23px;
`;
const Options = styled.div`
  position: absolute;
  bottom: 100px;
  left: 0;
  right: 0;
`;

const Item = styled.div`
  background-color: #232e35;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  border-radius: 5px;
  width: 328px;
`;

const OptionsWithImage = styled.div`
  display: inline-block;
  margin: -20px 20px;
  padding: 0px 8px;
`;

const ItemWithImage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #16161a;
  border: 2px solid #94a1b2;
  margin: 4px 4px;
  width: 144px;
  height: 200px;
  float: left;
  border-radius: 8px;
  box-shadow: 0 4px 2px -2px #94a1b2;
`;
const ItemImg = styled.img`
  border-radius: 8px;
`;
const ItemText = styled.p`
  text-align: center;
  margin: 20px 0;
`;
const ItemLabel = styled.label``;

const ContainerCover = styled.div`
  display: block;
  background: transparent;
  width: 144px;
  height: 200px;
  z-index: 1;
  position: absolute;
  border-radius: 8px;
`;
const ContainerOrganized = styled.div`
  height: auto;
  min-height: 146px;
  padding: 0px 16px;
  & button {
    margin-bottom: 20px;
    margin-top: 15px;
    margin-left: 0px;
    margin-right: 8px;
    display: inline-block;
    border-radius: 14px;
    color: transparent;
    padding: 0 20px;
    content: "";
    background-position: center;
    background-color: #72757e;
    background-repeat: no-repeat;
    background-size: auto;
    border: none;
    box-shadow: 0 1px 1px 2px #72757e;
    &:focus-visible {
      outline: none;
    }
  }
`;
const ContainerUnOrganized = styled.div`
  margin: 10px auto;
  display: inline-block;
  justify-content: center;
  padding: 0px 16px;
  bottom: 100px;
  position: absolute;
  width: 360px;
  height: fit-content;
  & button {
    margin: 5px 3px;
    &:focus-visible {
      outline: none;
    }
  }
`;

const UnOrganizedButton = styled.button`
  display: inline-block;
  border-radius: 14px;
  color: transparent;
  padding: 0 20px;
  content: "";
  background-position: center;
  background-color: #72757e;
  background-repeat: no-repeat;
  background-size: auto;
  border: none;
  box-shadow: 0 1px 1px 2px #72757e;
  &:hover {
    cursor: pointer;
  }
`;
const { RESPONSE, ADD, REMOVE } = constants;
const responses = [];

class Question {
  constructor(category) {
    this.category = category;
    this.sendToLocalStorages();
  }

  setCustomClass(id, method, className) {
    method === ADD
      ? document.getElementById(id).classList.add(`${className.toString()}`)
      : document.getElementById(id).classList.remove(`${className.toString()}`);
  }

  handleSelect(e, data) {
    const { options } = data;
    options.map((opt) => {
      if (data.type === "1") {
        if (opt.id === e.target.id) {
          this.setCustomClass(e.target.id, ADD, "option-select-success");
          this.setCustomClass(e.target.id, ADD, "radio-success");
          localStorage.setItem(RESPONSE, opt.item);
        } else {
          this.setCustomClass(opt.id, REMOVE, "option-select-success");
          this.setCustomClass(opt.id, REMOVE, "radio-success");
        }
      }
      if (data.type === "2") {
        if (opt.item === e.target.id) {
          this.setCustomClass(opt.id, ADD, "option-select-success");
          localStorage.setItem(RESPONSE, opt.item);
        } else {
          this.setCustomClass(opt.id, REMOVE, "option-select-success");
          this.setCustomClass(opt.id, REMOVE, "radio-success");
        }
      }
    });
    const check = document.querySelector("#check");
    if (check.attributes.getNamedItem("disabled")) {
      check.attributes.removeNamedItem("disabled");
    }
  }
  handleSelection(e, data) {
    const { id } = e.target;
    responses.push(id);
    if (responses.length === 5) {
      localStorage.setItem(RESPONSE, JSON.stringify(responses));
    }
    const element = document.getElementById(id);
    element.style.backgroundImage = "none";
    element.setAttribute("disabled", true);
    const { options } = data;
    const opt = options.find((opt) => opt.name === id);
    const organizator = document.querySelector("#organized");
    organizator.innerHTML += `
    <button
        id=${opt.name}
        class=${opt.className}
        style="background-image: url(../assets/svg/${opt.name}.svg);"
      >
        ${opt.name}
      </button>
    `;
    let { children } = organizator;
    if (children.length === 5) {
      document.querySelector("#check").removeAttribute("disabled");
    }
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
    const checking = document.querySelector("#check");
    if (checking) {
      checking.setAttribute("disabled", true);
    }
    const { options } = data;
    switch (data.type) {
      case "1":
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
              {options.map((opt) => (
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
            <ContainerQuestionsWithPadding className="">
              <Title>{data.name}</Title>
            </ContainerQuestionsWithPadding>

            <OptionsWithImage id="options-with-images">
              {options.map((opt) => (
                <ItemWithImage
                  key={opt.id}
                  id={opt.id}
                  className="option-select-default"
                >
                  <ItemImg
                    src={`../assets/svg/${opt.item}.svg`}
                    alt={opt.item}
                  />
                  <ItemText title={opt.item}>{opt.label}</ItemText>
                  <ContainerCover
                    id={opt.item}
                    onClick={(e) => this.handleSelect(e, data)}
                  ></ContainerCover>
                </ItemWithImage>
              ))}
            </OptionsWithImage>
          </>
        );
      case "3":
        return (
          <>
            <ContainerQuestionsWithPadding className="">
              <Title>{data.name}</Title>
            </ContainerQuestionsWithPadding>
            <ContainerOrganized
              id="organized"
              style={{
                backgroundImage: "url(../assets/svg/separator.svg)",
              }}
            />
            <ContainerUnOrganized id="unorganized">
              {options.map((opt, index) => (
                <UnOrganizedButton
                  id={opt.name}
                  key={index}
                  className={opt.className}
                  onClick={(e) => this.handleSelection(e, data)}
                  style={{
                    backgroundImage: `url(../assets/svg/${opt.name}.svg)`,
                  }}
                >
                  {opt.name}
                </UnOrganizedButton>
              ))}
            </ContainerUnOrganized>
          </>
        );
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
