import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Questions from "../containers/QuestionsApp";
import Example from "../containers/Example";
import Login from "../containers/Login";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/questions/:category" component={Questions} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Example} />
        
      </Switch>
    </Router>
  );
};
export default Routers;
