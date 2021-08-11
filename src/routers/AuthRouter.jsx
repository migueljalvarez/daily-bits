import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

const AuthRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
};

export default AuthRouter;
