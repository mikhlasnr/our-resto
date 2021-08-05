import PembayaranActionTypes from "./pembayaran.types";
import axios from "axios";

// *====START FETCH DATA DETAIL PESANAN====
export const fetchPembayaran = IdPesanan => {
  return dispatch => {
    dispatch(fetchPembayaranStart());
    axios(`/pembayaran/get-by-id-pesanan/${IdPesanan}`)
      .then(res => {
        dispatch(fetchPembayaranSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchPembayaranFailure(error.message));
      });
  };
};

const fetchPembayaranStart = () => ({
  type: PembayaranActionTypes.FETCH_PEMBAYARAN_START,
});
const fetchPembayaranSuccess = data => ({
  type: PembayaranActionTypes.FETCH_PEMBAYARAN_SUCCESS,
  payload: data,
});
const fetchPembayaranFailure = message => ({
  type: PembayaranActionTypes.FETCH_PEMBAYARAN_FAILURE,
  payload: message,
});

export const removeDataPembayaran = () => ({
  type: PembayaranActionTypes.REMOVE_DATA_PEMBAYARAN,
});
