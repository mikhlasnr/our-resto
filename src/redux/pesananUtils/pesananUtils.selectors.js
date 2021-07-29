//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";

const selectPesananUtils = state => state.pesananUtils;

export const selectCheckoutModaltHidden = createSelector(
  [selectPesananUtils],
  pesanan => pesanan.checkoutModalHidden
);

// *====START SELECTOR HANDLING FOR UPLOADING====
export const selectIsUploading = createSelector(
  [selectPesananUtils],
  pesanan => pesanan.isUploadingPesanan
);
// *====END SELECTOR HANDLING FOR UPLOADING====
