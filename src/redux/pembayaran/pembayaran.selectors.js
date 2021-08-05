//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";
// *====START SELECTOR FETCH DATA KATEGORI MENU====
const selectPembayaran = state => state.pembayaran;

export const selectDataPembayaran = createSelector(
  [selectPembayaran],
  pembayaran => pembayaran.dataPembayaran
);

export const selectPembayaranIsFetching = createSelector(
  [selectPembayaran],
  pembayaran => pembayaran.isFetching
);
