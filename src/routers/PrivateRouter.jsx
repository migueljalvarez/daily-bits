import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "../context/AuthContext";

export const PrivateRouter = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuthenticated }) => (
      <Route
        {...rest}
        
        component={(props) =>
          isAuthenticated ? ( 
            <Component {...props} />
          ) : (
            <Redirect to="/auth/login" />
          )
        }
      />
    )}
  </AuthConsumer>
);

PrivateRouter.propTypes = {
  component: PropTypes.func.isRequired,
};
