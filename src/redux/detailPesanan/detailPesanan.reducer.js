import DetailPesananActionTypes from "./detailPesanan.types";

const INITIAL_STATE = {
  dataDetailPesanan: null,
  isFetching: false,
  errorMessage: null,
  isUploading: false,
};

const detailPesananReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // *====START FETCH DATA KATEGORI MENU====
    case DetailPesananActionTypes.FETCH_DETAIL_PESANAN_START:
      return {
        ...state,
        isFetching: true,
      };
    case DetailPesananActionTypes.FETCH_DETAIL_PESANAN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataDetailPesanan: action.payload,
      };
    case DetailPesananActionTypes.FETCH_DETAIL_PESANAN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    // *====END FETCH DATA KATEGORI MENU====
    case DetailPesananActionTypes.REMOVE_DATA_DETAIL_PESANAN:
      return {
        ...state,
        dataDetailPesanan: null,
      };
    // *====START HANDLING UPLOAD====
    case DetailPesananActionTypes.TOGGLE_IS_UPLOADING_DETAIL_PESANAN:
      return {
        ...state,
        isUploading: !state.isUploading,
      };
    // *====END HANDLING UPLOAD====

    default:
      return state;
  }
};

export default detailPesananReducer;
