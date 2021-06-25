import UsersActionTypes from "./users.types";

export const toggleCreateUserModalHidden = () => ({
  type: UsersActionTypes.TOGGLE_CREATE_USER_MODAL_HIDDEN,
});

export const setCurrentUser = user => ({
  type: UsersActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const removeCurrentUser = () => ({
  type: UsersActionTypes.REMOVE_CURRENT_USER,
});
