import Question from "./Question.js";
import constants from "../utils/constants.js";
const { PROGRESS } = constants;
let question = new Question();
class ProgressBar {
  constructor(category) {
    this.category = category;
  }
  load(portion) {
    let max = 100;
    let percent = max / portion;
    let currentPercent = localStorage.getItem(`${this.category}-${PROGRESS}`)
      ? parseFloat(localStorage.getItem(`${this.category}-${PROGRESS}`))
      : 0;
    currentPercent = parseFloat(currentPercent) + parseFloat(percent);
    document.getElementById("bar").style.width = `${currentPercent}%`;
    let progress = currentPercent;
    localStorage.setItem(`${this.category}-${PROGRESS}`, progress);
  }
  getProgress() {
    let progress = localStorage.getItem(`${this.category}-${PROGRESS}`)
      ? parseFloat(localStorage.getItem(`${this.category}-${PROGRESS}`))
      : 0;
    return progress;
  }
  reset() {
    localStorage.setItem(`${this.category}-${PROGRESS}`, 0);
    document.getElementById("bar").style.width = 0;
    return question.reset(this.category);
  }
}

export default ProgressBar;
