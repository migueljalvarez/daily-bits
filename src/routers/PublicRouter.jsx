import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "../context/AuthContext";

export const PublicRouter = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuthenticated }) => (
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    )}
  </AuthConsumer>
);

PublicRouter.propTypes = {
  component: PropTypes.func.isRequired,
};
