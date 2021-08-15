import React from "react";
import questionary from "../utils/questionary.js";
import constants from "../utils/constants.js";
import {
  Avatar,
  ContainerCover,
  ContainerOrganized,
  ContainerQuestions,
  ContainerQuestionsWithPadding,
  ContainerUnOrganized,
  Item,
  ItemImg,
  ItemLabel,
  ItemText,
  ItemWithImage,
  Options,
  OptionsWithImage,
  Title,
  UnOrganizedButton,
} from "../styles/styleQuestion";
import { getUserInfo } from "../helpers/userInfo.js";
import axios from "axios";
import { createOrUpdateProggressApi } from "../helpers/progressInfo.js";
const { RESPONSE, ADD, REMOVE } = constants;
import time from "../utils/time"
import { createdOrUpdateStatitics } from "../helpers/statiticsInfo.js";
import Cleaner from "../helpers/Cleaner.js";

class Question {
  constructor(category) {
    this.category = category;
    this.sendToLocalStorages();
    this.responses = [];
    this.baseUrl = "https://daily-bits-fake-api.herokuapp.com";
    this.clean = new Cleaner(category)
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
    this.responses.push(id);
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
      localStorage.setItem(RESPONSE, JSON.stringify(this.responses));
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
    let questions = all.filter((option) => option.state !== true);
    if (questions.length === 0) {
      console.log("regresando al home...");
      time.set("end")
      localStorage.setItem(`${this.category}-complete`, true);
      return { redirect: true };      
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
    getUserInfo().then((data) => {
      const [user] = data;
      const userId = user.id;
      const url = `${this.baseUrl}/questions?userId=${userId}&category=${this.category}`;
      axios
        .get(url)
        .then((result) => {
          const data = result.data.find(
            (quest) => quest.category === this.category
          );

          if (data.questions.length > 0) {
            localStorage.setItem(this.category, JSON.stringify(data.questions));
          }
        })
        .catch(() => {
          const questions = this.find();
          if (questions.length > 0) {
            localStorage.setItem(this.category, JSON.stringify(questions));
          }
        });
    });
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
