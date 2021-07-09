import UserByIdActionTypes from "./userById.types";

const INITIAL_STATE = {
  userData: null,
  isFetching: false,
  errorMessage: undefined,
};

const userByIdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserByIdActionTypes.FETCH_USERBYID_START:
      return {
        ...state,
        isFetching: true,
      };
    case UserByIdActionTypes.FETCH_USERBYID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userData: action.payload,
      };
    case UserByIdActionTypes.FETCH_USERBYID_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case UserByIdActionTypes.REMOVE_CURRENT_USERBYID:
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

export default userByIdReducer;
