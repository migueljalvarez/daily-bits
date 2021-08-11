import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Questions from "../containers/QuestionsApp";
import Example from "../containers/Example";
import Home from "../components/Home";
import Statitics from "../components/Statitics";
import Profile from "../components/Profile";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/questions/:category" component={Questions} />
        <Route exact path="/" component={Example} />
        
        <Route exact path="/home" component={Home} />
        <Route exact path="/statitics" component={Statitics} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};
export default Routers;
