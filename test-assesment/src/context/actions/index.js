export const ACTION = {
  REMOVE_USER: "REMOVE_USER",
  ADD_USER:"ADD_USER"
};

export const removeUser = (user_id) => {
  return (dispatch) => {
    dispatch({
      type: ACTION.REMOVE_USER,
      payload: user_id,
    });
  };
};
