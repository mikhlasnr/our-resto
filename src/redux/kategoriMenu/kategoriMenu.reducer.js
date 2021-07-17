import KategoriMenuActionTypes from "./kategoriMenu.types";

const INITIAL_STATE = {
  dataKategoriMenu: null,
  isFetching: false,
  errorMessage: undefined,
  currentKategoriMenu: "all",
  showModalAddKategoriMenu: false,
};

const kategoriMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
    case KategoriMenuActionTypes.SET_CURRENT_KATEGORI_MENU:
      return {
        ...state,
        currentKategoriMenu: action.payload,
      };

    case KategoriMenuActionTypes.SET_CURRENT_KATEGORI_MENU_TO_DEFAULT:
      return {
        ...state,
        currentKategoriMenu: "all",
      };
    case KategoriMenuActionTypes.TOGGLE_SHOW_MODAL_ADD_KATEGORI_MENU:
      return {
        ...state,
        showModalAddKategoriMenu: !state.showModalAddKategoriMenu,
      };

    default:
      return state;
  }
};

export default kategoriMenuReducer;
