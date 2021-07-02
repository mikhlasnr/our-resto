import UsersActionTypes from "./users.types";
import axios from "axios";

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
  type: UsersActionTypes.FETCH_PEGAWAI_START,
});

const fetchPegawaiSuccess = data => ({
  type: UsersActionTypes.FETCH_PEGAWAI_SUCCESS,
  payload: data,
});

const fetchPegawaiFailure = message => ({
  type: UsersActionTypes.FETCH_PEGAWAI_FAILURE,
  payload: message,
});

export const handlingIsEmailExist = response => ({
  type: UsersActionTypes.IS_EMAIL_EXIST,
  payload: response,
});
