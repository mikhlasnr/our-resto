import UsersActionTypes from "./users.types";

const INITIAL_STATE = {
  pegawai: null,
  isFetching: false,
  errorMessage: undefined,
  isEmailExist: false,
  showModalPegawai: false,
  showModalUpdatePegawai: false,
  userById: [],
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
    case UsersActionTypes.TOGGLE_SHOW_MODAL_PEGAWAI:
      return {
        ...state,
        showModalPegawai: !state.showModalPegawai,
      };
    case UsersActionTypes.TOGGLE_SHOW_MODAL_UPDATE_PEGAWAI:
      return {
        ...state,
        showModalUpdatePegawai: !state.showModalUpdatePegawai,
      };
    case UsersActionTypes.GET_USER_BY_ID:
      return {
        ...state,
        userById: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
