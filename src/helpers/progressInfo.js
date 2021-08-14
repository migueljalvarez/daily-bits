import { getUserInfo } from "./userInfo";
import axios from "axios";
const baseUrl = "https://daily-bits-fake-api.herokuapp.com/progress";

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
        : JSON.parse(localStorage.getItem("start-time")),
    htmlComplete: JSON.parse(localStorage.getItem("html-complete")) || false,
    cssComplete: JSON.parse(localStorage.getItem("css-complete")) || false,
    jsComplete: JSON.parse(localStorage.getItem("js-complete")) || false,
    htmlLife: JSON.parse(localStorage.getItem("html-life")),
    cssLife: JSON.parse(localStorage.getItem("css-life")),
    jsLife: JSON.parse(localStorage.getItem("js-life")),
    htmlProgress: JSON.parse(localStorage.getItem("html-progress")),
    cssProgreess: JSON.parse(localStorage.getItem("css-progress")),
    jsProgress: JSON.parse(localStorage.getItem("js-progress")),
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
