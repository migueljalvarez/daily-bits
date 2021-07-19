import Question from "./Question.js";

class ProgressBar {
  constructor() {}
  static load(portion) {
    let max = 100;
    let percent = max / portion;
    let currentPercent = localStorage.getItem("progress")
      ? parseFloat(localStorage.getItem("progress"))
      : 0;
    currentPercent = parseFloat(currentPercent) + parseFloat(percent);
    document.getElementById("bar").style.width = `${currentPercent}%`;
    let progress = currentPercent;
    localStorage.setItem("progress", progress);
  }
  static getProgress() {
    let progress = localStorage.getItem("progress")
      ? parseFloat(localStorage.getItem("progress"))
      : 0;
    return progress;
  }
  static reset() {
    let category = localStorage.getItem("categorySelected");
    localStorage.setItem("progress", 0);
    document.getElementById("bar").style.width = 0;
    return Question.reset(category);
  }
}

export default ProgressBar;
