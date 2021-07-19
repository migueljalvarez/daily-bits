import ProgressBar from "./ProgressBar.js";
import constants from "../utils/constants.js";
class Live {
  constructor(){}
  static start() {
    let life = localStorage.getItem("life")
      ? localStorage.getItem("life")
      : localStorage.setItem("life", constants.LIFE);
    return life;
  }
  static get() {
    let life = localStorage.getItem("life");
    return life;
  }
  static restart() {
    localStorage.setItem("life", constants.LIFE);
    document.querySelector("#life").innerHTML = this.get();
    return ProgressBar.reset();
  }
  static update(life) {
    localStorage.setItem("life", life);
  }
  static discount() {
    let life = localStorage.getItem("life");
    if (life > 0) {
      return life - 1;
    } else {
      return null;
    }
  }
}

export default Live;
