import ListPesananActionTypes from "./listPesanan.types";

const INITIAL_STATE = {
  dataListPesanan: [],
  isFetching: false,
  errorMessage: null,
  isUploading: false,
};

const listPesananReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // *====START FETCH DATA KATEGORI MENU====
    case ListPesananActionTypes.FETCH_LIST_PESANAN_START:
      return {
        ...state,
        isFetching: true,
      };
    case ListPesananActionTypes.FETCH_LIST_PESANAN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataListPesanan: action.payload,
      };
    case ListPesananActionTypes.FETCH_LIST_PESANAN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    // *====END FETCH DATA KATEGORI MENU====
    // *====START HANDLING UPLOAD====
    case ListPesananActionTypes.TOGGLE_IS_UPLOADING_LIST_PESANAN:
      return {
        ...state,
        isUploading: !state.isUploading,
      };
    // *====END HANDLING UPLOAD====

    default:
      return state;
  }
};

export default listPesananReducer;
