import { getUserInfo } from "./userInfo";
import axios from "axios";
import constants from "../utils/constants";
const baseUrl = "https://daily-bits-fake-api.herokuapp.com/progress";
const {
  CSS_COMPLETE,
  CSS_LIFE,
  CSS_PROGRESS,
  HTML_COMPLETE,
  HTML_LIFE,
  HTML_PROGRESS,
  JS_COMPLETE,
  JS_LIFE,
  JS_PROGRESS,
  START_TIME,
} = constants;
const getProgressApi = async () => {
  const [user] = await getUserInfo();
  const url = `${baseUrl}?userId=${user.id}`;
  const { data } = await axios.get(url);
  return data.find((item) => item.userId === user.id);
};
const createOrUpdateProggressApi = async () => {
  const [user] = await getUserInfo();
  let progress = await getProgressApi();
  let currentProgress = {
    startTime:
      progress?.startTime < Date.now()
        ? progress.startTime
        : JSON.parse(localStorage.getItem(START_TIME)),
    htmlComplete: JSON.parse(localStorage.getItem(HTML_COMPLETE)) || false,
    cssComplete: JSON.parse(localStorage.getItem(CSS_COMPLETE)) || false,
    jsComplete: JSON.parse(localStorage.getItem(JS_COMPLETE)) || false,
    htmlLife: JSON.parse(localStorage.getItem(HTML_LIFE)) || 0,
    cssLife: JSON.parse(localStorage.getItem(CSS_LIFE)) || 0,
    jsLife: JSON.parse(localStorage.getItem(JS_LIFE)) || 0,
    htmlProgress: JSON.parse(localStorage.getItem(HTML_PROGRESS)),
    cssProgress: JSON.parse(localStorage.getItem(CSS_PROGRESS)),
    jsProgress: JSON.parse(localStorage.getItem(JS_PROGRESS)),
    userId: user.id,
  };
  if (progress) {
    const url = `${baseUrl}/${progress.id}`;
    const { data } = await axios.patch(url, currentProgress);
    return data;
  } else {
    const url = `${baseUrl}`;
    const { data } = await axios.post(url, currentProgress);
    return data;
  }
};
export { getProgressApi, createOrUpdateProggressApi };
