//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";
const selectMenu = state => state.menu;

// *====START SELECTOR FETCH DATA KATEGORI MENU====
export const selectDataMenu = createSelector(
  [selectMenu],
  menu => menu.dataMenu
);

export const selectIsFetching = createSelector(
  [selectMenu],
  menu => menu.isFetching
);

export const selectErrorMessage = createSelector(
  [selectMenu],
  menu => menu.errorMessage
);
// *====END SELECTOR FETCH DATA KATEGORI MENU====
// *====START SELECTOR HANDLING MODAL====
export const selectShowModalAddMenu = createSelector(
  [selectMenu],
  menu => menu.showModalAddMenu
);
export const selectShowModalDeleteMenu = createSelector(
  [selectMenu],
  menu => menu.showModalDeleteMenu
);
export const selectShowModalUpdateMenu = createSelector(
  [selectMenu],
  menu => menu.showModalUpdateMenu
);
// *====END SELECTOR HANDLING MODAL====
// *====START SELECTOR HANDLING FOR UPLOADING====
export const selectInputProfileMenu = createSelector(
  [selectMenu],
  menu => menu.inputProfile
);
export const selectIsUploading = createSelector(
  [selectMenu],
  menu => menu.isUploading
);
// *====END SELECTOR HANDLING FOR UPLOADING====
