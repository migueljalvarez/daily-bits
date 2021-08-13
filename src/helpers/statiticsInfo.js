import { getUserInfo } from "./userInfo";
import axios from "axios";
import time from "../utils/time";
import constants from "../utils/constants";

const { TOTAL_RESPONSES, SUCCESS, FAILED } = constants;

const baseUrl = "https://daily-bits-fake-api.herokuapp.com/statitics";

const getStatiticsInfo = async () => {
  const [user] = await getUserInfo();
  const url = `${baseUrl}?userId=${user.id}`;
  const { data } = await axios.get(url);
  return data.find((item) => item.userId === user.id);
};

const createdOrUpdateStatitics = async () => {
  let statitics = await getStatiticsInfo();
  if (statitics) {
    let currentData = {
      ...statitics,
      hours: statitics.hours + time.calculate(),
      failedResponses:
        statitics.failedResponses + parseInt(localStorage.getItem(FAILED)),
      successResponses:
        statitics.successResponses + parseInt(localStorage.getItem(SUCCESS)),
      totalResponse:
        statitics.totalResponse +
        parseInt(localStorage.getItem(TOTAL_RESPONSES)),
    };
    const url = `${baseUrl}/${statitics.id}`;
    const { data } = await axios.patch(url, currentData);
    return data;
  } else {
    const [user] = await getUserInfo();
    const newData = {
      userId: user.id,
      hours: time.calculate(),
      failedResponses: parseInt(localStorage.getItem(FAILED)),
      successResponses: parseInt(localStorage.getItem(SUCCESS)),
      totalResponse: parseInt(localStorage.getItem(TOTAL_RESPONSES)),
    };
    const url = `${baseUrl}`;
    const { data } = await axios.post(url, newData);
    return data;
  }
};

export { getStatiticsInfo, createdOrUpdateStatitics };
