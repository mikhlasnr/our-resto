//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";

const selectUsers = state => state.users;

export const selectPegawai = createSelector(
  [selectUsers],
  users => users.pegawai
);

export const selectUsersIsFetching = createSelector(
  [selectUsers],
  users => users.isFetching
);

export const selectUsersErrorMessage = createSelector(
  [selectUsers],
  users => users.errorMessage
);

export const selectIsEmailExist = createSelector(
  [selectUsers],
  users => users.isEmailExist
);
