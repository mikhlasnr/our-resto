import KategoriMenuActionTypes from "./kategoriMenu.types";

const INITIAL_STATE = {
  dataKategoriMenu: null,
  isFetching: false,
  errorMessage: undefined,
  showModalAddKategoriMenu: false,
  showModalDeleteKategoriMenu: false,
  inputProfile: null,
  isUploading: false,
  deleteKategoriById: null,
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
    case KategoriMenuActionTypes.TOGGLE_SHOW_MODAL_DELETE_KATEGORI_MENU:
      return {
        ...state,
        showModalDeleteKategoriMenu: !state.showModalDeleteKategoriMenu,
      };
    // *====START HANDLING UPLOAD====
    case KategoriMenuActionTypes.SET_INPUT_PROFILE_KATEGORI_MENU:
      return {
        ...state,
        inputProfile: action.payload,
      };
    case KategoriMenuActionTypes.REMOVE_INPUT_PROFILE_KATEGORI_MENU:
      return {
        ...state,
        inputProfile: null,
      };
    case KategoriMenuActionTypes.TOGGLE_IS_UPLOADING_KATEGORI_MENU:
      return {
        ...state,
        isUploading: !state.isUploading,
      };
    // *====END HANDLING UPLOAD====
    // *====START HANDLING DELETE====
    case KategoriMenuActionTypes.SET_DELETE_KATEGORI_BY_ID:
      return {
        ...state,
        deleteKategoriById: action.payload,
      };
    case KategoriMenuActionTypes.REMOVE_DELETE_KATEGORI_BY_ID:
      return {
        ...state,
        deleteKategoriById: null,
      };
    // *====END HANDLING DELETE====

    default:
      return state;
  }
};

export default kategoriMenuReducer;
