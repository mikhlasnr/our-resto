//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";
// *====START SELECTOR FETCH DATA KATEGORI MENU====
const selectListPesanan = state => state.listPesanan;

export const selectDataListPesanan = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.dataListPesanan
);

export const isDataListPesananExist = createSelector(
  [selectListPesanan],
  listPesanan => !!listPesanan.dataListPesanan.length
);

export const selectListPesananIsFetching = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.isFetching
);

export const selectListPesananErrorMessage = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.errorMessage
);
// *====END SELECTOR FETCH DATA KATEGORI MENU====
// *====START SELECTOR HANDLING MODAL====
export const selectListPesananModaltHidden = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.listPesananModalHidden
);
export const selectListPesananDeleteModaltHidden = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.listPesananDeleteModalHidden
);
export const selectListPesananLihatModaltHidden = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.listPesananLihatModalHidden
);
// *====END SELECTOR HANDLING MODAL====

// *====START SELECTOR HANDLING FOR UPLOADING====
export const selectListPesananIsUploading = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.isUploading
);
// *====END SELECTOR HANDLING FOR UPLOADING====
