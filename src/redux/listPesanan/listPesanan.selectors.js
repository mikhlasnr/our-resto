//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";
// *====START SELECTOR FETCH DATA LIST PESANAN====
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
// *====END SELECTOR DATA LIST PESANAN====
// *====START SELECTOR  DATA PESANAN====
// for handling update
export const selectDataPesanan = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.dataPesanan
);
// *====END SELECTOR DATA PESANAN====
// *====START SELECTOR HANDLING MODAL====
// Handling Dashboard Pelayan Modal
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
// Handling Dashboard Koki Modal
export const selectModalUpdateStatusMasakHidden = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.modalUpdateStatusMasakHidden
);
// Handling Dashboard Kasir Modal
export const selectDetailPesananHidden = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.modalDetailPesananHidden
);
export const selectModalBayarHidden = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.modalBayarHidden
);
export const selectModalStrukrHidden = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.modalStrukHidden
);
// *====END SELECTOR HANDLING MODAL====

// *====START SELECTOR HANDLING FOR UPLOADING====
export const selectListPesananIsUploading = createSelector(
  [selectListPesanan],
  listPesanan => listPesanan.isUploading
);
// *====END SELECTOR HANDLING FOR UPLOADING====
