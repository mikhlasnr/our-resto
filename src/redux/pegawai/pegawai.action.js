import PegawaiActionTypes from "./pegawai.types";
import axios from "axios";

// START Action Fetch Data Pegawai
export const fetchDataPegawai = () => {
  return dispatch => {
    dispatch(fetchPegawaiStart());
    axios("/users")
      .then(res => {
        dispatch(fetchPegawaiSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchPegawaiFailure(error.message));
      });
  };
};

const fetchPegawaiStart = () => ({
  type: PegawaiActionTypes.FETCH_PEGAWAI_START,
});

const fetchPegawaiSuccess = data => ({
  type: PegawaiActionTypes.FETCH_PEGAWAI_SUCCESS,
  payload: data,
});

const fetchPegawaiFailure = message => ({
  type: PegawaiActionTypes.FETCH_PEGAWAI_FAILURE,
  payload: message,
});
// END Action Fetch Data Pegawai

export const handlingIsEmailExist = response => ({
  type: PegawaiActionTypes.IS_EMAIL_EXIST,
  payload: response,
});

// Handling add pegawai modal
export const toggleShowModalAddPegawai = () => ({
  type: PegawaiActionTypes.TOGGLE_SHOW_MODAL_ADD_PEGAWAI,
});

// handling update pegawai modal
export const toggleShowModalUpdatePegawai = () => ({
  type: PegawaiActionTypes.TOGGLE_SHOW_MODAL_UPDATE_PEGAWAI,
});

// handling delete pegawai modal
export const toggleShowModalDeletePegawai = () => ({
  type: PegawaiActionTypes.TOGGLE_SHOW_MODAL_DELETE_PEGAWAI,
});

// START handling get input profile for uploading
export const setInputProfile = imgFile => ({
  type: PegawaiActionTypes.SET_INPUT_PROFILE,
  payload: imgFile,
});
export const removeInputProfile = () => ({
  type: PegawaiActionTypes.REMOVE_INPUT_PROFILE,
});
// END handling get input profile for uploading

export const toggleIsUploading = () => ({
  type: PegawaiActionTypes.TOGGLE_IS_UPLOADING,
});
