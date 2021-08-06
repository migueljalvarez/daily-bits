import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Questions from "../components/Questions";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/questions" component={Questions} />
      </Switch>
    </Router>
  );
};
export default Routers;
