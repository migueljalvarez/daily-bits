import time from "../src/utils/time.js";
import constants from "./utils/constants.js";
const { FAILED, SUCCESS, TOTAL_RESPONSES } = constants;

var responses = localStorage.getItem(TOTAL_RESPONSES) || 0;
var responsesSuccess = localStorage.getItem(SUCCESS) || 0;
var responsesFailed = localStorage.getItem(FAILED) || 0;
window.onload = () => {
  document.querySelector("#count-times").innerHTML = time.calculate();
  document.querySelector("#count-response").innerHTML = responses;
  document.querySelector("#count-response-success").innerHTML =
    responsesSuccess;
  document.querySelector("#count-response-failed").innerHTML = responsesFailed;
};
