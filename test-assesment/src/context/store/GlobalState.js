import React, { createContext, useReducer } from "react";
import { ACTION, addUser, removeUser } from "../actions";
import AppReducer from "../reducer/AppReducer";

export const initialtState = {
  users: [
    {
      id: 1,
      name: "Ali",
      age: 22,
      country: "Uzbekistan",
    },
    {
      id: 4,
      name: "Izzatillo",
      age: 22,
      country: "Uzbekistan",
    },
  ],
  counter: 0,
    fav:[]
};

export const GlobalContext = createContext(initialtState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialtState);

  const addUser = (user) => {
    dispatch({
      type: ACTION.ADD_USER,
      payload: user,
    });
  };

  const increaseCounter = () => {
    dispatch({
      type: "INCREAMENT",
    });
  };

  const removeUser =(id)=> {
    dispatch({
      type: ACTION.REMOVE_USER,
      payload:id
    })
  }
  const decreaseCounter = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const addToFav = (u) => {
    dispatch({
      type: "ADD_FAV",
      payload:u
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        fav:state.fav,
        counter: state.counter,
        removeUser: removeUser,
        addUser: addUser,
        increaseCounter,
        decreaseCounter,
        removeUser,
        addToFav:addToFav
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
