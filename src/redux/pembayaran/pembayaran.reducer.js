import PembayaranActionTypes from "./pembayaran.types";

const INITIAL_STATE = {
  dataPembayaran: null,
  isFetching: false,
  errorMessage: null,
};

const pembayaranReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PembayaranActionTypes.FETCH_PEMBAYARAN_START:
      return {
        ...state,
        isFetching: true,
      };
    case PembayaranActionTypes.FETCH_PEMBAYARAN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataPembayaran: action.payload,
      };
    case PembayaranActionTypes.FETCH_PEMBAYARAN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PembayaranActionTypes.REMOVE_DATA_PEMBAYARAN:
      return {
        ...state,
        dataPembayaran: null,
      };
    default:
      return state;
  }
};

export default pembayaranReducer;
