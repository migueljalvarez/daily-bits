import React, { useState, useEffect } from "react";
import QuestionClass from "../components/Questions";
import ProgressBar from "../components/ProgressBar";
import ProgressBarHelper from "../helpers/ProgressBar";
import Live from "../helpers/Live";
import heart from "../assets/svg/heart.svg";
import close from "../assets/svg/close.svg";
import Notification from "../components/Notification";
import constants from "../utils/constants";

import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";

const {
  RESPONSE,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_FAILED,
  CATEGORY,
  PROGRESS,
} = constants;
const ContainerHead = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
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
const LiveText = styled.p`
  color: #fff;
  margin: 0px 2px;
`;

const Questions = () => {
  const { category } = useParams();

  const [categorie, setCategorie] = useState(category);
  const [question, setQuestion] = useState({});
  const [live, setLive] = useState(0);
  const [notify, setNotify] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  const lives = new Live(categorie);
  const quest = new QuestionClass(categorie);
  const progressBar = new ProgressBarHelper();
  const [questionary] = useState(quest);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setCategorie("html");
    setLive(lives.get());
    setQuestion(questionary.get());
    setProgress(progressBar.getProgress(categorie));
  }, []);

  const handleComplete = () => {
    let num = questionary.length();
    let result = questionary.setState(question);
    if (result.state) {
      progressBar.load(num, categorie);
      setShowNotification(!showNotification);
    }
  };
  const handleContinue = () => {
    setShow(!show);
  };

  const check = () => {
    if (questionary.verify(question)) {
      const { type, title, buttom } = NOTIFICATION_SUCCESS;
      setShowNotification(!showNotification);
      setNotify({ type, title, buttom });
    } else {
      const { type, title, buttom } = NOTIFICATION_FAILED;
      const { options } = question;
      let correctAnswer = options.find((opt) => opt.isTrue);
      setShowNotification(!showNotification);
      setNotify({
        type,
        title,
        buttom,
        response: correctAnswer.label || correctAnswer.validationLabel,
      });
      let option = options.find(
        (opt) => opt.item === localStorage.getItem(RESPONSE)
      );
      const itemSelect = document.getElementById(option.id);
      itemSelect.classList.add("option-select-failed");
      itemSelect.classList.add("radio-failed");
    }
  };

  return (
    <>
      <ContainerHead>
        <span id="close">
          <img src={close} alt="close" />
        </span>
        <ProgressBar percent={progress} />
        <span>
          <img src={heart} alt="heart" />
        </span>
        <LiveText id="life" className="">
          {live}
        </LiveText>
      </ContainerHead>

      <>{questionary.build(question)}</>
      <Notification
        notification={notify}
        isVisible={showNotification}
        handleComplete={handleComplete}
        handleContinue={handleContinue}
      />
      <CheckButton id="check" onClick={check}>
        Comprobar
      </CheckButton>
    </>
  );
};

export default Questions;
