//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";
// *====START SELECTOR FETCH DATA KATEGORI MENU====
const selectKategoriMenu = state => state.kategoriMenu;
export const selectDataKategoriMenu = createSelector(
  [selectKategoriMenu],
  kategoriMenu => kategoriMenu.dataKategoriMenu
);

export const selectIsFetching = createSelector(
  [selectKategoriMenu],
  kategoriMenu => kategoriMenu.isFetching
);

export const selectErrorMessage = createSelector(
  [selectKategoriMenu],
  kategoriMenu => kategoriMenu.errorMessage
);
// *====END SELECTOR FETCH DATA KATEGORI MENU====
// *====START SELECTOR HANDLING MODAL====
export const selectShowModalAddKategoriMenu = createSelector(
  [selectKategoriMenu],
  kategoriMenu => kategoriMenu.showModalAddKategoriMenu
);
export const selectShowModalDeleteKategoriMenu = createSelector(
  [selectKategoriMenu],
  kategoriMenu => kategoriMenu.showModalDeleteKategoriMenu
);
// *====END SELECTOR HANDLING MODAL====
// *====START SELECTOR HANDLING FOR UPLOADING====
export const selectInputProfile = createSelector(
  [selectKategoriMenu],
  kategoriMenu => kategoriMenu.inputProfile
);
export const selectIsUploading = createSelector(
  [selectKategoriMenu],
  kategoriMenu => kategoriMenu.isUploading
);
// *====END SELECTOR HANDLING FOR UPLOADING====
export const selectDeleteKategoriById = createSelector(
  [selectKategoriMenu],
  kategoriMenu => kategoriMenu.deleteKategoriById
);
