//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";
// *====START SELECTOR FETCH DATA KATEGORI MENU====
const selectDetailPesanan = state => state.detailPesanan;

export const selectDataDetailPesanan = createSelector(
  [selectDetailPesanan],
  detailPesanan => detailPesanan.dataDetailPesanan
);

export const selectListPesananIsFetching = createSelector(
  [selectDetailPesanan],
  detailPesanan => detailPesanan.isFetching
);

export const selectListPesananErrorMessage = createSelector(
  [selectDetailPesanan],
  detailPesanan => detailPesanan.errorMessage
);
// *====END SELECTOR FETCH DATA KATEGORI MENU====

// *====START SELECTOR HANDLING FOR UPLOADING====

export const selectListPesananIsUploading = createSelector(
  [selectDetailPesanan],
  detailPesanan => detailPesanan.isUploading
);
// *====END SELECTOR HANDLING FOR UPLOADING====
