import { getUserInfo } from "./userInfo";
import axios from "axios";
export const getStatiticsInfo = async () => {
  let user = {}
  await getUserInfo().then((response) => {
    for (const data  of  response) {
      user = data
    }
  });
  const url = `https://daily-bits-fake-api.herokuapp.com/statitics?userId=${user.id}`;
  return axios.get(url).then((response) => {
    const { data } = response;
    return data.find((item) => item.userId === user.id);
  });
  
};
