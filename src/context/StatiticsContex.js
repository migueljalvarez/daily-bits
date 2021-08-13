import React, { createContext, useReducer } from "react";
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
    case 'GET':
      return {
        ...state,
        totalResponse: action.payload.totalResponse,
        successResponses: action.payload.successResponses,
        failedResponses: action.payload.failedResponses,
        hours: action.payload.hours,
        userId: action.payload.userId,
        id: action.payload.id,
      };
    default:
      return state
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
