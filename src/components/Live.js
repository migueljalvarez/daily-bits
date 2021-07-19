import ProgressBar from "./ProgressBar.js";
const progressBar = new ProgressBar();

class Live {
  start() {
    let life = localStorage.getItem("life")
      ? localStorage.getItem("life")
      : localStorage.setItem("life", 4);
    return life;
  }
  get() {
    let life = localStorage.getItem("life");
    return life;
  }
  restart() {
    localStorage.setItem("life", 4);
    document.querySelector("#life").innerHTML = this.get();
    return progressBar.reset();
  }
  update(life) {
    localStorage.setItem("life", life);
  }
  discount() {
    let life = localStorage.getItem("life");
    if (life > 0) {
      return life - 1;
    } else {
      return null;
    }
  }
}

export default Live;
