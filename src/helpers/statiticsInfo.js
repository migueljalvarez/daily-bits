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
  let currentData = {
    hours: statitics?.hours + time.calculate(),
    failedResponses: parseInt(localStorage.getItem(FAILED)) || 0,
    successResponses: parseInt(localStorage.getItem(SUCCESS)) || 0,
    totalResponse: parseInt(localStorage.getItem(TOTAL_RESPONSES)) || 0,
  };
  if (statitics) {
    const url = `${baseUrl}/${statitics.id}`;
    const { data } = await axios.patch(url, currentData);
    return data;
  } else {
    const [user] = await getUserInfo();
    const url = `${baseUrl}`;
    const { data } = await axios.post(url, {
      ...currentData,
      userId: user.id,
      hours: time.calculate(),
    });
    return data;
  }
};

export { getStatiticsInfo, createdOrUpdateStatitics };
