import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  createUserModalHidden: true,
  pegawai: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.TOGGLE_CREATE_USER_MODAL_HIDDEN:
      return {
        ...state,
        createUserModalHidden: !state.createUserModalHidden,
      };

    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case UserActionTypes.REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
