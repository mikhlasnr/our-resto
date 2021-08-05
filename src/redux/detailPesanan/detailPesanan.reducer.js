import DetailPesananActionTypes from "./detailPesanan.types";

const INITIAL_STATE = {
  infoPemesan: null,
  dataDetailPesanan: null,
  isFetching: false,
  errorMessage: null,
  isUploading: false,
};

const detailPesananReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // *====START FETCH DATA DETAIL PESANAN====
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
    // *====END FETCH DETAIL PESANAN====
    // *====START HANDLING FOR CRUD====
    case DetailPesananActionTypes.SET_INFO_PEMESAN:
      return {
        ...state,
        infoPemesan: action.payload,
      };
    case DetailPesananActionTypes.REMOVE_DATA_DETAIL_PESANAN:
      return {
        ...state,
        dataDetailPesanan: null,
        infoPemesan: null,
      };
    // *====END HANDLING FOR CRUD====
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
