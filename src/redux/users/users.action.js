import UsersActionTypes from "./users.types";
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

// END Action Fetch Data Pegawai
