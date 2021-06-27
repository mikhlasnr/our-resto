//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";

const selectUsers = state => state.roles;

export const selectRoles = createSelector(
  [selectUsers],
  roles => roles.rolesData
);

export const selectRolesIsFetching = createSelector(
  [selectUsers],
  roles => roles.isFetching
);

export const selectRolesErrorMessage = createSelector(
  [selectUsers],
  roles => roles.errorMessage
);
