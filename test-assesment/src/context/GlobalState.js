import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialtState = {
  users: [],
};

export const GlobalContext = createContext(initialtState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialtState);

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
