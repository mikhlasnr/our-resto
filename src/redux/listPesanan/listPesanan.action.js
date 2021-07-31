import ListPesananActionTypes from "./listPesanan.types";
import axios from "axios";

// *====START FETCH DATA KATEGORI MENU====
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
// *====END FETCH DATA KATEGORI MENU====

// *====START HANDLING SHOW MODAL====
export const toggleListPesananModalHidden = () => ({
  type: ListPesananActionTypes.TOGGLE_LIST_PESANAN_MODAL_HIDDEN,
});
export const toggleListPesananDeleteModalHidden = () => ({
  type: ListPesananActionTypes.TOGGLE_LIST_PESANAN_DELETE_MODAL_HIDDEN,
});
export const toggleListPesananLihatModalHidden = () => ({
  type: ListPesananActionTypes.TOGGLE_LIST_PESANAN_LIHAT_MODAL_HIDDEN,
});
// *====END HANDLING SHOW MODAL====

// *====START HANDLING UPLOAD====
export const toggleIsUploadingListPesanan = () => ({
  type: ListPesananActionTypes.TOGGLE_IS_UPLOADING_LIST_PESANAN,
});
// *====END HANDLING UPLOAD====

// *====START HANDLING DELETE====
