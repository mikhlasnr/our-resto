import UserByIdActionTypes from "./userById.types";
import axios from "axios";

// START Action Fetch Data User By Id
export const fetchUserById = userId => {
  return dispatch => {
    dispatch(fetchUserByIdStart());
    axios(`user/${userId}`)
      .then(res => {
        dispatch(fetchUserByIdSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchUserByIdFailure(error.message));
      });
  };
};

const fetchUserByIdStart = () => ({
  type: UserByIdActionTypes.FETCH_USERBYID_START,
});

const fetchUserByIdSuccess = data => ({
  type: UserByIdActionTypes.FETCH_USERBYID_SUCCESS,
  payload: data,
});

const fetchUserByIdFailure = message => ({
  type: UserByIdActionTypes.FETCH_USERBYID_FAILURE,
  payload: message,
});

// END Action Fetch Data User By Id
export const removeCurrentUserById = () => ({
  type: UserByIdActionTypes.REMOVE_CURRENT_USERBYID,
});
