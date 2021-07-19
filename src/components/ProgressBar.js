import Question from "./Question.js";

let category = localStorage.getItem("categorySelected");
const questions = new Question(category);
class ProgressBar {
  constructor() {}
  load(portion) {
    console.log(portion);
    let max = 100;
    let percent = max / portion;
    let currentPercent = localStorage.getItem("stateProgress")
      ? parseFloat(localStorage.getItem("stateProgress"))
      : 0;

    currentPercent = parseFloat(currentPercent) + parseFloat(percent);
    console.log(currentPercent);
    document.getElementById("bar").style.width = `${currentPercent}%`;
    let stateProgress = currentPercent;
    localStorage.setItem("stateProgress", stateProgress);
  }
  getProgress() {
    let stateProgress = localStorage.getItem("stateProgress")
      ? parseFloat(localStorage.getItem("stateProgress"))
      : 0;
    return stateProgress;
  }
  reset() {
    localStorage.setItem("stateProgress", 0);
    document.getElementById("bar").style.width = 0;
    return questions.reset();
  }
}

export default ProgressBar;
