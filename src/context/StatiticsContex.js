import React, { createContext, useReducer } from "react";
import constants from "../utils/constants";
const { TOTAL_RESPONSES, SUCCESS, FAILED } = constants;
const StatiticsContex = createContext({ statitics: {} });
const initialState = {
  totalResponse: 0,
  successResponses: 0,
  failedResponses: 0,
  hours: 0,
  userId: 0,
  id: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "GET":
      localStorage.setItem(SUCCESS, action.payload.successResponses || 0);
      localStorage.setItem(FAILED, action.payload.failedResponses || 0);
      localStorage.setItem(TOTAL_RESPONSES, action.payload.totalResponse || 0)
      return {
        ...state,
        totalResponse: action.payload.totalResponse || 0,
        successResponses: action.payload.successResponses || 0,
        failedResponses: action.payload.failedResponses || 0,
        hours: action.payload.hours || 0,
        userId: action.payload.userId,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

const StatiticsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StatiticsContex.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </StatiticsContex.Provider>
  );
};

const StatiticsConsumer = StatiticsContex.Consumer;
export { StatiticsProvider, StatiticsConsumer, StatiticsContex };
