import UsersActionTypes from "./users.types";

const INITIAL_STATE = {
  pegawai: null,
  isFetching: false,
  errorMessage: undefined,
  isEmailExist: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.FETCH_PEGAWAI_START:
      return {
        ...state,
        isFetching: true,
      };
    case UsersActionTypes.FETCH_PEGAWAI_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pegawai: action.payload,
      };
    case UsersActionTypes.FETCH_PEGAWAI_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case UsersActionTypes.IS_EMAIL_EXIST:
      return {
        ...state,
        isEmailExist: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
