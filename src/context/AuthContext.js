import React, { createContext, useReducer } from "react";
import { getAuthorization } from "../helpers/getAuthorization";

const AuthContext = createContext({
  isAuthenticated: false,
  user: {},
});

const initialState = {
  isAuthenticated: getAuthorization(),
  user:null,
  token:null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "logout":
      localStorage.removeItem("token")
      return initialState
    default:
      break;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer, AuthContext };
