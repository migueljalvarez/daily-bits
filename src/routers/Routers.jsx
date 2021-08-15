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
import { StatiticsProvider } from "../context/StatiticsContex";
import Splash from "../components/Splash";

const Routers = () => {
  return (
    <AuthProvider>
      <Router basename="/">
        <Switch>
          <PublicRouter exact path="/" component={Splash} />
          <PublicRouter path="/auth" component={AuthRouter} />
          <PrivateRouter path="/questions" component={QuestionRouter} />
          <StatiticsProvider>
            <PrivateRouter exact path="/home" component={Home} />
            <PrivateRouter exact path="/profile" component={Profile} />

            <PrivateRouter exact path="/statitics" component={Statitics} />
          </StatiticsProvider>
          <Redirect to="/home" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};
export default Routers;
