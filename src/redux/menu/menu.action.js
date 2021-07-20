import MenuActionTypes from "./menu.types";
import axios from "axios";

// *====START FETCH DATA MENU====
export const fetchDataMenu = () => {
  return dispatch => {
    dispatch(fetchMenuStart());
    axios("/menus")
      .then(res => {
        dispatch(fetchMenuSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchMenuFailure(error.message));
      });
  };
};
const fetchMenuStart = () => ({
  type: MenuActionTypes.FETCH_MENU_START,
});
const fetchMenuSuccess = data => ({
  type: MenuActionTypes.FETCH_MENU_SUCCESS,
  payload: data,
});
const fetchMenuFailure = message => ({
  type: MenuActionTypes.FETCH_MENU_FAILURE,
  payload: message,
});
// *====END FETCH DATA KATEGORI MENU====

// *====START HANDLING SHOW MODAL====
export const toggleShowModalAddMenu = () => ({
  type: MenuActionTypes.TOGGLE_SHOW_MODAL_ADD_MENU,
});
export const toggleShowModalDeleteMenu = () => ({
  type: MenuActionTypes.TOGGLE_SHOW_MODAL_DELETE_MENU,
});
// *====END HANDLING SHOW MODAL====

// *====START HANDLING UPLOAD====
export const setInputProfile = imgFile => ({
  type: MenuActionTypes.SET_INPUT_PROFILE,
  payload: imgFile,
});
export const removeInputProfile = () => ({
  type: MenuActionTypes.REMOVE_INPUT_PROFILE,
});
export const toggleIsUploading = () => ({
  type: MenuActionTypes.TOGGLE_IS_UPLOADING,
});
// *====END HANDLING UPLOAD====
// *====START HANDLING DELETE====
