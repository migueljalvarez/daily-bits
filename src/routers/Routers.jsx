import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Questions from "../containers/Questions";
import Test from "../containers/Test";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/questions/:category" component={Questions} />
        <Route exact path="/" component={Test} />
        
      </Switch>
    </Router>
  );
};
export default Routers;
