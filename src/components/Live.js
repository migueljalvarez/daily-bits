import ProgressBar from "./ProgressBar.js";
import constants from "../utils/constants.js";
const { LIFE } = constants;

class Live {
  constructor(category) {
    this.category = category;
    this.progress = new ProgressBar(category);
    if (category){
      this.start(category)
    };
  }
  start(category) {
    let life = localStorage.getItem(`${category}-life`)
        ? localStorage.getItem(`${category}-life`)
        : localStorage.setItem(`${category}-life`, LIFE);
      return life;
  }
  get() {
    let life = localStorage.getItem(`${this.category}-life`);
    return life;
  }
  restart() {
    localStorage.setItem(`${this.category}-life`, LIFE);
    document.querySelector("#life").innerHTML = this.get();
    return this.progress.reset();
  }
  update(life) {
    localStorage.setItem(`${this.category}-life`, life);
  }
  discount() {
    let life = localStorage.getItem(`${this.category}-life`);
    if (life > 0) {
      return life - 1;
    } else {
      return null;
    }
  }
}

export default Live;
