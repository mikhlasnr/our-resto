import PesananActionTypes from "./pesananUtils.types";

const INITIAL_STATE = {
  checkoutModalHidden: true,
  isUploadingPesanan: false,
};

const pesananUtilsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PesananActionTypes.TOGGLE_CHECKOUT_MODAL_HIDDEN:
      return {
        ...state,
        checkoutModalHidden: !state.checkoutModalHidden,
      };

    case PesananActionTypes.TOGGLE_IS_UPLOADING_PESANAN:
      return {
        ...state,
        isUploadingPesanan: !state.isUploadingPesanan,
      };
    default:
      return state;
  }
};

export default pesananUtilsReducer;
