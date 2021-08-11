import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import QuestionApp from "../containers/QuestionsApp";
const QuestionRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/questions/:category" component={QuestionApp} />
        </Switch>
      </Router>
    </div>
  );
};

export default QuestionRouter;
