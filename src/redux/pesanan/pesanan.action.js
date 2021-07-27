import PesananActionTypes from "./pesanan.types";

export const addItemPesanan = item => ({
  type: PesananActionTypes.ADD_ITEM_PESANAN,
  payload: item,
});

export const removeItemPesanan = item => ({
  type: PesananActionTypes.REMOVE_ITEM_PESANAN,
  payload: item,
});

export const clearItemFromPesanan = item => ({
  type: PesananActionTypes.CLEAR_ITEM_FROM_PESANAN,
  payload: item,
});

export const clearPesananItems = () => ({
  type: PesananActionTypes.CLEAR_PESANAN_ITEMS,
});
