import ListPesananActionTypes from "./listPesanan.types";
import axios from "axios";

// *====START FETCH DATA LIST PESANAN====
export const fetchDataListPesanan = () => {
  return dispatch => {
    dispatch(fetchListPesananStart());
    axios(`/pesanan`)
      .then(res => {
        dispatch(fetchListPesananSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchListPesananFailure(error.message));
      });
  };
};
export const fetchDataListPesananPelayan = () => {
  return dispatch => {
    dispatch(fetchListPesananStart());
    axios(`/pesanan?StatusAntar=belum`)
      .then(res => {
        dispatch(fetchListPesananSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchListPesananFailure(error.message));
      });
  };
};
export const fetchDataListPesananKoki = () => {
  return dispatch => {
    dispatch(fetchListPesananStart());
    axios(`/pesanan?StatusMasak=dimasak`)
      .then(res => {
        dispatch(fetchListPesananSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchListPesananFailure(error.message));
      });
  };
};
export const fetchDataListPesananKasir = () => {
  return dispatch => {
    dispatch(fetchListPesananStart());
    axios(`/pesanan?getPesananByCurrentDay=true`)
      .then(res => {
        dispatch(fetchListPesananSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchListPesananFailure(error.message));
      });
  };
};
const fetchListPesananStart = () => ({
  type: ListPesananActionTypes.FETCH_LIST_PESANAN_START,
});
const fetchListPesananSuccess = data => ({
  type: ListPesananActionTypes.FETCH_LIST_PESANAN_SUCCESS,
  payload: data,
});
const fetchListPesananFailure = message => ({
  type: ListPesananActionTypes.FETCH_LIST_PESANAN_FAILURE,
  payload: message,
});
export const removeDataListPesanan = () => ({
  type: ListPesananActionTypes.REMOVE_LIST_PESANAN,
});
// *====END FETCH DATA DATA LIST PESANAN====
// *====START FETCH DATA  PESANAN====
// for handling update
export const setDataPesanan = data => ({
  type: ListPesananActionTypes.SET_DATA_PESANAN,
  payload: data,
});
export const removeDataPesanan = () => ({
  type: ListPesananActionTypes.REMOVE_DATA_PESANAN,
});
// *====END FETCH DATA  PESANAN====
// *====START HANDLING SHOW MODAL====
// Handling Dashboard Pelayan Modal
export const toggleListPesananModalHidden = () => ({
  type: ListPesananActionTypes.TOGGLE_LIST_PESANAN_MODAL_HIDDEN,
});
export const toggleListPesananDeleteModalHidden = () => ({
  type: ListPesananActionTypes.TOGGLE_LIST_PESANAN_DELETE_MODAL_HIDDEN,
});
export const toggleListPesananLihatModalHidden = () => ({
  type: ListPesananActionTypes.TOGGLE_LIST_PESANAN_LIHAT_MODAL_HIDDEN,
});
// Handling Dashboard Koki Modal
export const toggleModalUpdateStatusMasakHidden = () => ({
  type: ListPesananActionTypes.TOGGLE_MODAL_UPDATE_STATUS_MASAK_HIDDEN,
});
// Handling Dashboard Kasir Modal
export const toggleModalDetailPesananHidden = () => ({
  type: ListPesananActionTypes.TOGGLE_MODAL_DETAIL_PESANAN_HIDDEN,
});
export const toggleModalBayarHidden = () => ({
  type: ListPesananActionTypes.TOGGLE_MODAL_BAYAR_HIDDEN,
});
export const toggleModalStrukHidden = () => ({
  type: ListPesananActionTypes.TOGGLE_MODAL_STRUK_HIDDEN,
});
// *====END HANDLING SHOW MODAL====

// *====START HANDLING UPLOAD====
export const toggleIsUploadingListPesanan = () => ({
  type: ListPesananActionTypes.TOGGLE_IS_UPLOADING_LIST_PESANAN,
});
// *====END HANDLING UPLOAD====

// *====START HANDLING DELETE====
