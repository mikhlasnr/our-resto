import PesananActionTypes from "./pesanan.types";

const INITIAL_STATE = {
  checkoutModalHidden: true,
  cartItems: [],
};

const pesananReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PesananActionTypes.TOGGLE_CHECKOUT_MODAL_HIDDEN:
      return {
        ...state,
        checkoutModalHidden: !state.checkoutModalHidden,
      };

    default:
      return state;
  }
};

export default pesananReducer;
