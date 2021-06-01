//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";

const selectPesanan = state => state.pesanan;

export const selectCheckoutModaltHidden = createSelector(
  [selectPesanan],
  pesanan => pesanan.checkoutModalHidden
);
