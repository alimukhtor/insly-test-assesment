import React, { createContext, useReducer } from "react";
import { addUser, removeUser } from "../actions";
import AppReducer from "../reducer/AppReducer";

const initialtState = {
  users: [],
};

export const GlobalContext = createContext(initialtState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialtState);


  
const addUser = (user) => {
  dispatch({
    type: "ADD_USER",
    payload: user,
  });
};

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser:removeUser,
        addUser:addUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
