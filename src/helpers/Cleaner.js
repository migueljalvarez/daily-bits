import constants from "../utils/constants.js";
const {CATEGORY, RESPONSE, PROGRESS,} = constants;
class Cleaner {
  constructor(category) {
    this.category = category;
  }
  response() {
    localStorage.removeItem(RESPONSE);
  }
  selected(items) {
    items.map((item) => {
      const option = document.getElementById(item.id);
      option.classList.remove("option-select-success");
      option.classList.remove("radio-success");
      option.classList.remove("option-select-failed");
      option.classList.remove("radio-failed");
    });
    document.getElementById("check").classList.add("disabled", true);
  }
  progress() {
    localStorage.removeItem(CATEGORY);
    localStorage.removeItem(RESPONSE);
    localStorage.removeItem(`${this.category}`);
    localStorage.removeItem(`${this.category}-${PROGRESS}`);
    localStorage.removeItem(`${this.category}-complete`);
    localStorage.removeItem(`${this.category}-life`);
  }
  
  div() {
    document.querySelector("#options-with-images").innerHTML = ``;
    document.querySelector("#options").innerHTML = ``;
    document.querySelector("#organized").innerHTML = ``;
    document.querySelector("#unorganized").innerHTML = ``;
  }
}
export default Cleaner;
