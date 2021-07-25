import PesananActionTypes from "./pesanan.types";
import { addItemToPesanan, removeItemFromPesanan } from "./pesanan.utils";

const INITIAL_STATE = {
  checkoutModalHidden: true,
  pesananItems: [],
};

const pesananReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PesananActionTypes.TOGGLE_CHECKOUT_MODAL_HIDDEN:
      return {
        ...state,
        checkoutModalHidden: !state.checkoutModalHidden,
      };
    case PesananActionTypes.ADD_ITEM_PESANAN:
      return {
        ...state,
        pesananItems: addItemToPesanan(state.pesananItems, action.payload),
      };
    case PesananActionTypes.REMOVE_ITEM_PESANAN:
      return {
        ...state,
        pesananItems: removeItemFromPesanan(state.pesananItems, action.payload),
      };
    case PesananActionTypes.CLEAR_ITEM_FROM_PESANAN:
      return {
        ...state,
        pesananItems: state.pesananItems.filter(
          pesananItem => pesananItem.IdMenu !== action.payload.IdMenu
        ),
      };
    case PesananActionTypes.CLEAR_PESANAN_ITEMS:
      return {
        ...state,
        pesananItems: [],
      };
    default:
      return state;
  }
};

export default pesananReducer;
