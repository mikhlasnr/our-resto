import PesananUtilsActionTypes from "./pesananUtils.types";

export const toggleCheckoutModalHidden = () => ({
  type: PesananUtilsActionTypes.TOGGLE_CHECKOUT_MODAL_HIDDEN,
});
export const toggleListPesananModalHidden = () => ({
  type: PesananUtilsActionTypes.TOGGLE_LIST_PESANAN_MODAL_HIDDEN,
});
// *====START HANDLING UPLOAD====
export const toggleIsUploadingPesanan = () => ({
  type: PesananUtilsActionTypes.TOGGLE_IS_UPLOADING_PESANAN,
});
// *====END HANDLING UPLOAD====
