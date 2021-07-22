import constants from "./constants.js";
const { END_TIME, MINUTES, START_TIME } = constants;
const msToMin = (ms) => {
  let min = ms * (1.0 / 1000) * (1.0 / 60);
  return min;
};
const calculate = () => {
  let minutes = parseInt(localStorage.getItem(MINUTES)) || 0;
  let startTime = parseInt(localStorage.getItem(START_TIME)) || 0;
  let endTime = parseInt(localStorage.getItem(END_TIME)) || 0;
  let ms = endTime - startTime;
  minutes += msToMin(ms);
  localStorage.setItem(MINUTES, minutes);
  if (minutes >= 60) {
    return parseInt(minutes / 60);
  } else {
    return 0;
  }
};
export default { calculate };
