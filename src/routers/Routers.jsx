import React from "react";
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

import Home from "../components/Home";
import Statitics from "../components/Statitics";
import Profile from "../components/Profile";
import AuthRouter from "./AuthRouter";
import QuestionRouter from "./QuestionRouter";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { AuthProvider } from "../context/AuthContext";

const Routers = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PublicRouter path="/auth" component={AuthRouter} />
          <PrivateRouter path="/questions" component={QuestionRouter} />
          <PrivateRouter exact path="/" component={Home} />
          <PrivateRouter exact path="/statitics" component={Statitics} />
          <PrivateRouter exact path="/profile" component={Profile} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};
export default Routers;
