import KategoriMenuActionTypes from "./kategoriMenu.types";

const INITIAL_STATE = {
  dataKategoriMenu: null,
  isFetching: false,
  errorMessage: undefined,
  showModalAddKategoriMenu: false,
  inputProfile: null,
  isUploading: false,
};

const kategoriMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // *====START FETCH DATA KATEGORI MENU====
    case KategoriMenuActionTypes.FETCH_KATEGORI_MENU_START:
      return {
        ...state,
        isFetching: true,
      };
    case KategoriMenuActionTypes.FETCH_KATEGORI_MENU_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataKategoriMenu: action.payload,
      };
    case KategoriMenuActionTypes.FETCH_KATEGORI_MENU_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    // *====END FETCH DATA KATEGORI MENU====
    // *====START HANDLING SHOW MODAL====
    case KategoriMenuActionTypes.TOGGLE_SHOW_MODAL_ADD_KATEGORI_MENU:
      return {
        ...state,
        showModalAddKategoriMenu: !state.showModalAddKategoriMenu,
      };
    // *====START HANDLING UPLOAD====
    case KategoriMenuActionTypes.SET_INPUT_PROFILE:
      return {
        ...state,
        inputProfile: action.payload,
      };
    case KategoriMenuActionTypes.REMOVE_INPUT_PROFILE:
      return {
        ...state,
        inputProfile: null,
      };
    case KategoriMenuActionTypes.TOGGLE_IS_UPLOADING:
      return {
        ...state,
        isUploading: !state.isUploading,
      };
    // *====END HANDLING UPLOAD====

    default:
      return state;
  }
};

export default kategoriMenuReducer;
