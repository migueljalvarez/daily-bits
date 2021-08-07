import constants from "../utils/constants.js";
const { PROGRESS } = constants;

class ProgressBar {
  constructor() {}
  load(num, category) {
    console.log(category);
    let max = 100;
    let percent = max / num;
    let currentPercent = localStorage.getItem(`${category}-${PROGRESS}`)
      ? parseFloat(localStorage.getItem(`${category}-${PROGRESS}`))
      : 0;
    currentPercent = parseFloat(currentPercent) + parseFloat(percent);
    document.getElementById("progress").style.width = `${currentPercent}%`;
    let progress = currentPercent;
    localStorage.setItem(`${category}-${PROGRESS}`, progress);
  }
  getProgress(category) {
    let progress = localStorage.getItem(`${category}-${PROGRESS}`)
      ? parseFloat(localStorage.getItem(`${category}-${PROGRESS}`))
      : 0;
    return progress;
  }
  // reset() {
  //   localStorage.setItem(`${this.category}-${PROGRESS}`, 0);
  //   document.getElementById("progress").style.width = 0;
  //   return question.reset(this.category);
  // }
}

export default ProgressBar;
