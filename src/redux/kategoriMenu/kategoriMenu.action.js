import KategoriMenuActionTypes from "./kategoriMenu.types";
import axios from "axios";

// START Action Fetch Data Pegawai
export const fetchDataKategoriMenu = () => {
  return dispatch => {
    dispatch(fetchKategoriMenuStart());
    axios("/menus/kategori")
      .then(res => {
        dispatch(fetchKategoriMenuSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchKategoriMenuFailure(error.message));
      });
  };
};

const fetchKategoriMenuStart = () => ({
  type: KategoriMenuActionTypes.FETCH_KATEGORI_MENU_START,
});

const fetchKategoriMenuSuccess = data => ({
  type: KategoriMenuActionTypes.FETCH_KATEGORI_MENU_SUCCESS,
  payload: data,
});

const fetchKategoriMenuFailure = message => ({
  type: KategoriMenuActionTypes.FETCH_KATEGORI_MENU_FAILURE,
  payload: message,
});

// END Action Fetch Data Pegawai
