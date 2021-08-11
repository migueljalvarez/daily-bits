import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Questions from "../containers/QuestionsApp";
import Example from "../containers/Example";
import Statitics from "../components/Statitics";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/questions/:category" component={Questions} />
        <Route exact path="/" component={Example} />
        

        <Route exact path="/statitics" component={Statitics} />
      </Switch>
    </Router>
  );
};
export default Routers;
