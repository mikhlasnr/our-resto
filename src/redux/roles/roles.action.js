import RolesActionTypes from "./roles.types";

import axios from "axios";

export const fetchDataRoles = () => {
  return dispatch => {
    dispatch(fetchRolesStart());
    axios("/user-role")
      .then(res => {
        console.log(res);
        dispatch(fetchRolesSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchRolesFailure(error.message));
      });
  };
};

const fetchRolesStart = () => ({
  type: RolesActionTypes.FETCH_ROLES_START,
});

const fetchRolesSuccess = data => ({
  type: RolesActionTypes.FETCH_ROLES_SUCCESS,
  payload: data,
});

const fetchRolesFailure = message => ({
  type: RolesActionTypes.FETCH_ROLES_FAILURE,
  payload: message,
});
