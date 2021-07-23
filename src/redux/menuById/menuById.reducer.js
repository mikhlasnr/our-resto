import MenuByIdActionTypes from "./menuById.types";

const INITIAL_STATE = {
  dataMenuById: null,
  isFetching: false,
  errorMessage: undefined,
  isUploading: false,
};

const MenuByIdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // *====START FETCH DATA  MENU====
    case MenuByIdActionTypes.FETCH_MENUBYID_START:
      return {
        ...state,
        isFetching: true,
      };
    case MenuByIdActionTypes.FETCH_MENUBYID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataMenuById: action.payload,
      };
    case MenuByIdActionTypes.FETCH_MENUBYID_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case MenuByIdActionTypes.REMOVE_CURRENT_MENUBYID:
      return {
        ...state,
        dataMenuById: null,
      };
    // *====END FETCH DATA  MENU====
    case MenuByIdActionTypes.TOGGLE_IS_UPLOADING:
      return {
        ...state,
        isUploading: !state.isUploading,
      };
    default:
      return state;
  }
};

export default MenuByIdReducer;
