import DetailPesananActionTypes from "./detailPesanan.types";
import axios from "axios";

// *====START FETCH DATA DETAIL PESANAN====
export const fetchDataDetailPesanan = IdPesanan => {
  return dispatch => {
    dispatch(fetchDetailPesananStart());
    axios(`detail-pesanan/${IdPesanan}`)
      .then(res => {
        dispatch(fetchDetailPesananSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchDetailPesananFailure(error.message));
      });
  };
};

const fetchDetailPesananStart = () => ({
  type: DetailPesananActionTypes.FETCH_DETAIL_PESANAN_START,
});
const fetchDetailPesananSuccess = data => ({
  type: DetailPesananActionTypes.FETCH_DETAIL_PESANAN_SUCCESS,
  payload: data,
});
const fetchDetailPesananFailure = message => ({
  type: DetailPesananActionTypes.FETCH_DETAIL_PESANAN_FAILURE,
  payload: message,
});

export const setInfoPemesan = dataPemesan => ({
  type: DetailPesananActionTypes.SET_INFO_PEMESAN,
  payload: dataPemesan,
});

// *====END FETCH DATA DETAIL PESANAN====
export const removeDetailPesanan = () => ({
  type: DetailPesananActionTypes.REMOVE_DATA_DETAIL_PESANAN,
});
// *====START HANDLING UPLOAD====
export const toggleIsUploadingDetailPesanan = () => ({
  type: DetailPesananActionTypes.TOGGLE_IS_UPLOADING_DETAIL_PESANAN,
});
// *====END HANDLING UPLOAD====
// *====START HANDLING DELETE====
