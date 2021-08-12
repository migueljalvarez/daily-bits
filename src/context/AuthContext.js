import React, { createContext, useReducer } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  user: {},
});

const getAuthorization = () => (localStorage.getItem("token") ? true : false);

const initialState = {
  isAuthenticated: getAuthorization(),
  user: null,
  token: null,
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
      break;
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
