import React, { useState, useEffect } from "react";
import QuestionClass from "./QuestionClass";
import heart from "../assets/svg/heart.svg";
import close from "../assets/svg/close.svg";

const Questions = ({ category }) => {
  const [categorie, setCategorie] = useState("html");
  const [question, setQuestion] = useState({});

  const q = new QuestionClass(categorie);
  const [questionary, setQuestionary] = useState(q);

  useEffect(() => {
    setCategorie(category);
    setQuestion(questionary.get());
  }, []);

  return (
    <>
      <div className="flex justify-center progress-bar-container">
        <span id="close">
          <img src={close} alt="close" />
        </span>
        <div id="progress" className="progress">
          <div id="bar" className="bar"></div>
        </div>
        <span>
          <img src={heart} alt="heart" />
        </span>
        <p id="life" className="count-life text-white">
          4
        </p>
      </div>
      
      <div>
        {questionary.build(question)}
        <input id="check" type="submit" value="Comprobar" disabled />
      </div>
    </>
  );
};

export default Questions;
