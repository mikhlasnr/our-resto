import KategoriMenuActionTypes from "./kategoriMenu.types";
import axios from "axios";

// *====START FETCH DATA KATEGORI MENU====
export const fetchDataKategoriMenu = () => {
  return dispatch => {
    dispatch(fetchKategoriMenuStart());
    axios("/kategori-menu")
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
// *====END FETCH DATA KATEGORI MENU====

// *====START HANDLING SHOW MODAL====
export const toggleShowModalAddKategoriMenu = () => ({
  type: KategoriMenuActionTypes.TOGGLE_SHOW_MODAL_ADD_KATEGORI_MENU,
});
// *====END HANDLING SHOW MODAL====

// *====START HANDLING UPLOAD====
export const setInputProfile = imgFile => ({
  type: KategoriMenuActionTypes.SET_INPUT_PROFILE,
  payload: imgFile,
});
export const removeInputProfile = () => ({
  type: KategoriMenuActionTypes.REMOVE_INPUT_PROFILE,
});
export const toggleIsUploading = () => ({
  type: KategoriMenuActionTypes.TOGGLE_IS_UPLOADING,
});
// *====END HANDLING UPLOAD====
