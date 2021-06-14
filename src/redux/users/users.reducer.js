import UsersActionTypes from "./users.types";

const INITIAL_STATE = {
  currentUser: { nama: "admin", email: "admin", role: "admin" },
  createUserModalHidden: true,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.TOGGLE_CREATE_USER_MODAL_HIDDEN:
      return {
        ...state,
        createUserModalHidden: !state.createUserModalHidden,
      };

    default:
      return state;
  }
};

export default usersReducer;
