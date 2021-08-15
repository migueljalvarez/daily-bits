import React, { useState, useContext, useEffect } from "react";
import { getProgressApi } from "../helpers/progressInfo";
import {
  TextHeader,
  ContainerCategories,
  LogoImg,
  Categories,
} from "../styles/styleHome";
import CircularProgress from "./CircularProgress";
import Footer from "./Footer";
import constants from "../utils/constants";
import { StatiticsContex } from "../context/StatiticsContex";
import { getStatiticsInfo } from "../helpers/statiticsInfo";
const {
  HTML_PROGRESS,
  CSS_PROGRESS,
  JS_PROGRESS,
  HTML_COMPLETE,
  CSS_COMPLETE,
  JS_COMPLETE,
} = constants;

const Home = () => {
  const [htmlProggres, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);

  const loadProgress = (data) => {
    localStorage.setItem(HTML_PROGRESS, data?.htmlProgress || htmlProggres);
    localStorage.setItem(CSS_PROGRESS, data?.cssProgress || cssProgress);
    localStorage.setItem(JS_PROGRESS, data?.jsProgress || jsProgress);
    localStorage.setItem(HTML_COMPLETE, false);
    localStorage.setItem(CSS_COMPLETE, false);
    localStorage.setItem(JS_COMPLETE, false);
    setHtmlProgress(parseFloat(localStorage.getItem(HTML_PROGRESS)));
    setCssProgress(parseFloat(localStorage.getItem(CSS_PROGRESS)));
    setJsProgress(parseFloat(localStorage.getItem(JS_PROGRESS)));
  };

  getProgressApi().then((data) => {
    loadProgress(data);
  });

  const { dispatch } = useContext(StatiticsContex);
  useEffect(() => {
    let unmouted = true;
    if (unmouted) {
      try {
        getStatiticsInfo().then((data) => {
          dispatch({
            type: "GET",
            payload: { ...data },
          });
        });
      } catch (error) {}
    }
    return () => (unmouted = false);
  }, []);

  return (
    <div>
      <main>
        <TextHeader>
          Practica tus conocimientos en la categoria que prefieras.
        </TextHeader>
        <ContainerCategories>
          <Categories id="html" to="/questions/html">
            <CircularProgress percentage={htmlProggres}>
              <LogoImg
                id="html-image"
                src="../assets/svg/html.svg"
                alt="html"
              />
            </CircularProgress>
            <p>HTML</p>
          </Categories>
        </ContainerCategories>
        <ContainerCategories>
          <Categories id="css" to="/questions/css">
            <CircularProgress percentage={cssProgress}>
              <LogoImg id="css-image" src="../assets/svg/css.svg" alt="css" />
            </CircularProgress>
            <p>CSS</p>
          </Categories>
          <Categories id="js" to="/questions/js">
            <CircularProgress percentage={jsProgress}>
              <LogoImg id="js-image" src="../assets/svg/js.svg" alt="js" />
            </CircularProgress>
            <p>JS</p>
          </Categories>
        </ContainerCategories>
        <ContainerCategories>
          <Categories id="figma" to="/home">
            <CircularProgress percentage="0">
              <LogoImg
                id="figma-image"
                src="../assets/svg/figma.svg"
                alt="figma"
              />
              <p>FIGMA</p>
            </CircularProgress>
          </Categories>
          <Categories id="ux" to="/home">
            <CircularProgress percentage="0">
              <LogoImg id="ux-image" src="../assets/svg/ux.svg" alt="ux" />
              <p>UX</p>
            </CircularProgress>
          </Categories>
        </ContainerCategories>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
