const msToMin = (ms) => {
  let min = ms * (1.0 / 1000) * (1.0 / 60);
  return min;
};
const calculateTime = () => {
  let minutes = parseInt(localStorage.getItem("minutes")) || 0;
  let startTime = parseInt(localStorage.getItem("start-time")) || 0;
  let endTime = parseInt(localStorage.getItem("end-time")) || 0;
  let ms = endTime - startTime;
  minutes += msToMin(ms);
  localStorage.setItem("minutes", minutes);
  if (minutes >= 60) {
    return parseInt(minutes / 60);
  } else {
    return 0;
  }
};

var responses = localStorage.getItem("total-responses") || 0;
var responsesSuccess = localStorage.getItem("success") || 0;
var responsesFailed = localStorage.getItem("failed") || 0;
window.onload = () => {
  document.querySelector("#count-times").innerHTML = calculateTime();
  document.querySelector("#count-response").innerHTML = responses;
  document.querySelector("#count-response-success").innerHTML =
    responsesSuccess;
  document.querySelector("#count-response-failed").innerHTML = responsesFailed;
};
