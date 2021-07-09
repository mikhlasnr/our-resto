//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";

const selectUsers = state => state.userById;

export const selectUserData = createSelector(
  [selectUsers],
  userById => userById.userData
);

export const selectUserByIdIsFetching = createSelector(
  [selectUsers],
  userById => userById.isFetching
);

export const selectUserByIdErrorMessage = createSelector(
  [selectUsers],
  userById => userById.errorMessage
);
