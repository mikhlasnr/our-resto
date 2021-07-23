import MenuActionTypes from "./menu.types";

const INITIAL_STATE = {
  dataMenu: null,
  isFetching: false,
  errorMessage: undefined,
  showModalAddMenu: false,
  showModalDeleteMenu: false,
  showModalUpdateMenu: false,
  inputProfile: null,
  isUploading: false,
};

const MenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // *====START FETCH DATA  MENU====
    case MenuActionTypes.FETCH_MENU_START:
      return {
        ...state,
        isFetching: true,
      };
    case MenuActionTypes.FETCH_MENU_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataMenu: action.payload,
      };
    case MenuActionTypes.FETCH_MENU_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    // *====END FETCH DATA  MENU====
    // *====START HANDLING SHOW MODAL====
    case MenuActionTypes.TOGGLE_SHOW_MODAL_ADD_MENU:
      return {
        ...state,
        showModalAddMenu: !state.showModalAddMenu,
      };
    case MenuActionTypes.TOGGLE_SHOW_MODAL_DELETE_MENU:
      return {
        ...state,
        showModalDeleteMenu: !state.showModalDeleteMenu,
      };
    case MenuActionTypes.TOGGLE_SHOW_MODAL_UPDATE_MENU:
      return {
        ...state,
        showModalUpdateMenu: !state.showModalUpdateMenu,
      };
    // *====START HANDLING UPLOAD====
    case MenuActionTypes.SET_INPUT_PROFILE_MENU:
      return {
        ...state,
        inputProfile: action.payload,
      };
    case MenuActionTypes.REMOVE_INPUT_PROFILE_MENU:
      return {
        ...state,
        inputProfile: null,
      };
    case MenuActionTypes.TOGGLE_IS_UPLOADING_MENU:
      return {
        ...state,
        isUploading: !state.isUploading,
      };
    // *====END HANDLING UPLOAD====
    // *====START HANDLING DELETE====

    // *====END HANDLING DELETE====

    default:
      return state;
  }
};

export default MenuReducer;
