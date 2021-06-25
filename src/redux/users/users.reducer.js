import UsersActionTypes from "./users.types";

const INITIAL_STATE = {
  currentUser: null,
  createUserModalHidden: true,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.TOGGLE_CREATE_USER_MODAL_HIDDEN:
      return {
        ...state,
        createUserModalHidden: !state.createUserModalHidden,
      };
    case UsersActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UsersActionTypes.REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default usersReducer;
