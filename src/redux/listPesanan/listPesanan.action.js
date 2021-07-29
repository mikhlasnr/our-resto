import KategoriMenuActionTypes from "./listPesanan.types";
import axios from "axios";

// *====START FETCH DATA KATEGORI MENU====
export const fetchDataListPesanan = () => {
  return dispatch => {
    dispatch(fetchListPesananStart());
    axios("/pesanan")
      .then(res => {
        dispatch(fetchListPesananSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchListPesananFailure(error.message));
      });
  };
};
const fetchListPesananStart = () => ({
  type: KategoriMenuActionTypes.FETCH_LIST_PESANAN_START,
});
const fetchListPesananSuccess = data => ({
  type: KategoriMenuActionTypes.FETCH_LIST_PESANAN_SUCCESS,
  payload: data,
});
const fetchListPesananFailure = message => ({
  type: KategoriMenuActionTypes.FETCH_LIST_PESANAN_FAILURE,
  payload: message,
});
// *====END FETCH DATA KATEGORI MENU====

// *====START HANDLING SHOW MODAL====

// *====END HANDLING SHOW MODAL====

// *====START HANDLING UPLOAD====
export const toggleIsUploadingKategoriMenu = () => ({
  type: KategoriMenuActionTypes.TOGGLE_IS_UPLOADING_LIST_PESANAN,
});
// *====END HANDLING UPLOAD====
// *====START HANDLING DELETE====
