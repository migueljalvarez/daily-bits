import React, { useEffect, useState } from "react";
import { getProgressApi } from "../helpers/progressInfo";
import {
  TextHeader,
  ContainerCategories,
  LogoImg,
  Categories,
} from "../styles/styleHome";
import CircularProgress from "./CircularProgress";
import Footer from "./Footer";

const Home = () => {

  const [htmlProggres, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);

  const loadProgress = (data) => {
    localStorage.setItem("html-progress", data?.htmlProgress || htmlProggres);
    localStorage.setItem("css-progress", data?.cssProgress || cssProgress);
    localStorage.setItem("js-progress", data?.jsProgress || jsProgress);
    setHtmlProgress(parseFloat(localStorage.getItem('html-progress')));
    setCssProgress(parseFloat(localStorage.getItem('css-progress')));
    setJsProgress(parseFloat(localStorage.getItem('js-progress')));
  };
  getProgressApi().then((data) => {
    loadProgress(data);
  });
  useEffect(() => { }, []);
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
          <Categories id="figma" to="">
            <CircularProgress percentage="0">
              <LogoImg id="figma-image" src="../assets/svg/figma.svg" alt="figma" />
              <p>FIGMA</p>
            </CircularProgress>
          </Categories>
          <Categories id="ux" to="">
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
