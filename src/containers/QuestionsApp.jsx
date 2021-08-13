import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import QuestionClass from "../components/Questions";
import ProgressBar from "../components/ProgressBar";
import ProgressBarHelper from "../helpers/ProgressBar";
import Live from "../helpers/Live";
import Cleaner from "../helpers/Cleaner";
import heart from "../assets/svg/heart.svg";
import close from "../assets/svg/close.svg";
import Notification from "../components/Notification";
import constants from "../utils/constants";

import { CheckButton, ContainerHead, LiveText } from "../styles/styleQuestion";
import time from "../utils/time";
import { createdOrUpdateStatitics } from "../helpers/statiticsInfo";
const {
  NOTIFICATION_FAILED,
  NOTIFICATION_SUCCESS,
  NOTIFICATION,
  RESPONSE,
  SUCCESS,
  FAILED,
  TOTAL_RESPONSES,
} = constants;

const Questions = () => {
  const { category } = useParams();
  const history = useHistory();
  const [categorie, setCategorie] = useState(category);

  const [live, setLive] = useState(0);
  const [notify, setNotify] = useState({});
  const [progress, setProgress] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const lives = new Live(categorie);
  const questionary = new QuestionClass(categorie);
  const [question, setQuestion] = useState(questionary.get());
  const clean = new Cleaner(categorie);
  const progressBar = new ProgressBarHelper();

  time.set("start");
  useEffect(() => {
    setCategorie(category);
    setLive(lives.get());
    setProgress(progressBar.getProgress(categorie));
  }, [question]);

  const nextQuestion = () => {
    const { options } = question;
    if (questionary.get().redirect) {
      time.set("end");
      createdOrUpdateStatitics().then(() => history.goBack());
    }
    setQuestion(questionary.get());
    if (question.type !== "3") {
      clean.selected(options);
    }
  };

  const handleComplete = () => {
    let num = questionary.length();
    let result = questionary.setState(question);
    if (result.state) {
      progressBar.load(num, categorie);
      let responsesSuccess = parseInt(localStorage.getItem(SUCCESS));
      localStorage.setItem(
        SUCCESS,
        responsesSuccess ? responsesSuccess + 1 : 1
      );
      let responses = parseInt(localStorage.getItem(TOTAL_RESPONSES));
      localStorage.setItem(TOTAL_RESPONSES, responses ? responses + 1 : 1);
      nextQuestion();
      setShowNotification(!showNotification);
    }
  };

  const handleContinue = () => {
    let count = lives.discount();
    let responsesFailed = parseInt(localStorage.getItem(FAILED));
    localStorage.setItem(FAILED, responsesFailed ? responsesFailed + 1 : 1);
    let responses = parseInt(localStorage.getItem(TOTAL_RESPONSES));
    localStorage.setItem(TOTAL_RESPONSES, responses ? responses + 1 : 1);
    const { options } = question;
    if (question.type !== "3") {
      clean.selected(options);
      clean.response();
    } else {
      document.getElementById("organized").innerHTML = "";
      options.map((opt) => {
        const element = document.getElementById(opt.name);
        element.style.display = "inline-block";
        element.style.backgroundImage = `url(../assets/svg/${opt.name}.svg)`;
        element.removeAttribute("disabled");
      });
    }
    if (count > 0) {
      setLive(count);
      setShowNotification(!showNotification);
    } else {
      setNotify({ ...NOTIFICATION });
    }
  };
  const handleReset = () => {
    clean.progress();
    setProgress(0);
    setLive(4);
    setQuestion(questionary.get());
    setShowNotification(!showNotification);
  };

  const check = () => {
    if (questionary.verify(question)) {
      setShowNotification(!showNotification);
      setNotify({ ...NOTIFICATION_SUCCESS });
    } else {
      const { options } = question;
      if (question.type === "3") {
        setShowNotification(!showNotification);
        setNotify({
          ...NOTIFICATION_FAILED,
          response: question.validationLabel,
        });
      } else {
        let correctAnswer = options.find((opt) => opt.isTrue);
        setShowNotification(!showNotification);
        setNotify({
          ...NOTIFICATION_FAILED,
          response: correctAnswer.label,
        });
        let option = options.find(
          (opt) => opt.item === localStorage.getItem(RESPONSE)
        );
        const itemSelect = document.getElementById(option.id);
        if (question.type === "1") {
          itemSelect.classList.add("option-select-failed");
          itemSelect.classList.add("radio-failed");
        } else if (question.type === "2") {
          itemSelect.classList.add("option-select-failed");
        }
      }
    }
  };

  return (
    <>
      <ContainerHead>
        <span id="close">
          <Img src={close} alt="close" />
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
        handleReset={handleReset}
      />
      <CheckButton id="check" onClick={check}>
        Comprobar
      </CheckButton>
    </>
  );
};

export default Questions;
