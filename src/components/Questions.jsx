import React, { useState, useEffect } from "react";
import QuestionClass from "./QuestionClass";
import Live from "./Live";
import Notification from "./Notification";
import constants from "../utils/constants";
import heart from "../assets/svg/heart.svg";
import close from "../assets/svg/close.svg";
import styled from "styled-components";

const { RESPONSE } = constants;
const ContainerProgressBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
const ProgressBar = styled.div`
  position: relative;
  float: left;
  min-width: 0%;
  height: 100%;
  background: #2cb67d;
  border-radius: 25px;
`;
const Bar = styled.div`
  margin: 5px auto;
  padding: 0;
  width: 75%;
  height: 12px;
  overflow: hidden;
  background: #fff;
  border-radius: 25px;
`;
const CheckButton = styled.button`
  border-radius: 16px;
  width: 328px;
  height: 50px;
  display: block;
  margin: 10px auto;
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: bold;
  background-color: var(--color-purple);
  border: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  &:disabled {
    background-color: #d4caf3;
  }
  &:hover {
    background-color: var(--color-purple-light);
    box-shadow: 0 2px 1px 1px var(--color-purple);
  }
`;

const Questions = ({ category }) => {
  const [categorie, setCategorie] = useState("html");
  const [question, setQuestion] = useState({});
  const [live, setLive] = useState(0);
  const [notify, setNotify] = useState(undefined);

  const quest = new QuestionClass(categorie);
  const notification = new Notification();
  const [questionary, setQuestionary] = useState(quest);
  const lives = new Live(categorie);

  useEffect(() => {
    setCategorie(category);
    setLive(lives.get());
    setQuestion(questionary.get());
  }, []);

  const check = () => {
    const { options } = question;
    if (questionary.verify(question)) {
      let notify = notification.getNotificationSuccess();
      setNotify(notify);
    } else {
      let notify = notification.getNotificationFailed(
        options.find((opt) => opt.isTrue)
      );
      let responses = localStorage.getItem(RESPONSE);
      let option = options.find((opt) => opt.item === responses)
      const itemSelect = document.getElementById(option.id);
      itemSelect.classList.add('option-select-failed')
      itemSelect.classList.add('radio-failed')
      setNotify(notify);
    }
  };

  return (
    <>
      <ContainerProgressBar>
        <span id="close">
          <img src={close} alt="close" />
        </span>
        <Bar id="bar">
          <ProgressBar id="progress" />
        </Bar>
        <span>
          <img src={heart} alt="heart" />
        </span>
        <p id="life" className="count-life text-white">
          {live}
        </p>
      </ContainerProgressBar>

      <div>{questionary.build(question)}</div>
      <div>{notify}</div>
      <CheckButton id="check" onClick={check}>
        Comprobar
      </CheckButton>
    </>
  );
};

export default Questions;
