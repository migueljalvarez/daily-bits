import React, { useState, useEffect } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Redirect,
  useHistory,
} from "react-router-dom";
import Example from "../containers/Example";
import Home from "../components/Home";
import Statitics from "../components/Statitics";
import Profile from "../components/Profile";
import AuthRouter from "./AuthRouter";
import QuestionRouter from "./QuestionRouter";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { AuthProvider } from "../context/AuthContext";

const Routers = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    }
  }, []);
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PublicRouter
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLogged}
          />
          <PrivateRouter
            path="/questions"
            component={QuestionRouter}
            isAuthenticated={isLogged}
          />
          <PrivateRouter
            exact
            path="/"
            component={Home}
            isAuthenticated={isLogged}
          />

          <PrivateRouter
            exact
            path="/statitics"
            component={Statitics}
            isAuthenticated={isLogged}
          />
          <PrivateRouter
            exact
            path="/profile"
            component={Profile}
            isAuthenticated={isLogged}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};
export default Routers;
