import constants from "../src/utils/constants.js";
const { CATEGORY, HTML_COMPLETE, CSS_COMPLETE, JS_COMPLETE } = constants;

const questionary = (id) => {
  localStorage.setItem(CATEGORY, id);
  window.location.href = "/public/questions.html";
};

document.getElementById("html").onclick = () => questionary("html");
document.getElementById("css").onclick = () => questionary("css");
document.getElementById("js").onclick = () => questionary("js");

window.onload = () => {
  let htmlComplete = localStorage.getItem(HTML_COMPLETE) ? true : false;
  let cssComplete = localStorage.getItem(CSS_COMPLETE) ? true : false;
  let jsComplete = localStorage.getItem(JS_COMPLETE) ? true : false;

  if (htmlComplete) {
    
    document.getElementById("html-image").classList.add("border-green");
  }
  if (cssComplete) {
    document.getElementById("css-image").classList.add("border-green");
  }
  if (jsComplete) {
    document.getElementById("js-image").classList.add("border-green");
  }
};
