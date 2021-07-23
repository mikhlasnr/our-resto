import MenuByIdActionTypes from "./menuById.types";
import axios from "axios";

// *====START FETCH DATA MENU====
export const fetchDataMenuById = IdMenu => {
  return dispatch => {
    dispatch(fetchMenuByIdStart());
    axios(`/menu/get-by-id-menu/${IdMenu}`)
      .then(res => {
        console.log(res.data);
        dispatch(fetchMenuByIdSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchMenuByIdFailure(error.message));
      });
  };
};
const fetchMenuByIdStart = () => ({
  type: MenuByIdActionTypes.FETCH_MENUBYID_START,
});
const fetchMenuByIdSuccess = data => ({
  type: MenuByIdActionTypes.FETCH_MENUBYID_SUCCESS,
  payload: data,
});
const fetchMenuByIdFailure = message => ({
  type: MenuByIdActionTypes.FETCH_MENUBYID_FAILURE,
  payload: message,
});
// *====END FETCH DATA KATEGORI MENU====
export const removeCurrentMenuById = () => ({
  type: MenuByIdActionTypes.REMOVE_CURRENT_MENUBYID,
});
export const toggleIsUploading = () => ({
  type: MenuByIdActionTypes.TOGGLE_IS_UPLOADING,
});
