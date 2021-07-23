//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";
const selectMenuById = state => state.menuById;

// *====START SELECTOR FETCH DATA KATEGORI MENU====
export const selectDataMenuById = createSelector(
  [selectMenuById],
  menuById => menuById.dataMenuById
);

export const selectIsFetching = createSelector(
  [selectMenuById],
  menuById => menuById.isFetching
);

export const selectErrorMessage = createSelector(
  [selectMenuById],
  menuById => menuById.errorMessage
);

export const selectIsUploading = createSelector(
  [selectMenuById],
  menuById => menuById.isUploading
);
// *====END SELECTOR FETCH DATA KATEGORI MENU====
