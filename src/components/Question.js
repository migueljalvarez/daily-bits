import allQuestions from "./allQuestions.js";
class Question {
  constructor(category) {
    this.category = category;
    this.loadQuestionInLocalStorages(this.category);
  }
  findQuestions() {
    let questions =
      JSON.parse(localStorage.getItem(this.category)) ||
      allQuestions.filter((question) => question.category === this.category);
    return questions;
  }
  loadQuestionInLocalStorages() {
    const questions = this.findQuestions();
    localStorage.setItem(this.category, JSON.stringify(questions));
  }
  verify(question) {
    let response = localStorage.getItem("response");
    let { options } = question;
    const option = options.find((option) => option.item === response);
    if (option.isCorrect) {
      return true;
    } else {
      return false;
    }
  }
  setState(question, state) {
    question.state = state;
    const questions = this.findQuestions();
    questions.map((q) => {
      if (q.id === question.id) {
        q.state = state;
      }
    });
    localStorage.setItem(this.category, JSON.stringify(questions));
  }
  reset() {
    if (localStorage.getItem(this.category)) {
      localStorage.removeItem(this.category);
      return true;
    }
  }
}
export default Question;
