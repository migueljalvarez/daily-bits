import axios from "axios"
import { getUserInfo } from "./userInfo";
const baseUrl = "https://daily-bits-fake-api.herokuapp.com";
const getQuestionApi = async (category)=> {
  const [user]= await getUserInfo()
  const url = `${baseUrl}/questions?userId=${user.id}&category=${category}`
  const { data } = await axios.get(url);
  return data.find((item) => item.userId === user.id);
}
const createOrUpdateQuestionApi = async (category) => {
  const [user]= await getUserInfo()
  const question = await getQuestionApi(category);
  const currentData = {
    category,
    userId: user.id,
    questions: JSON.parse(localStorage.getItem(category))
  }
  if (question) {
    const url = `${baseUrl}/questions/${question.id}`
    const { data } = await axios.patch(url, currentData);
    return data;
  } else {
    const url = `${baseUrl}/questions`
    const { data } = await axios.post(url, currentData);
    return data;
  }
};
export {getQuestionApi, createOrUpdateQuestionApi}