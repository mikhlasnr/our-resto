//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";

const selectPesanan = state => state.pesanan;

export const selectPesananItems = createSelector(
  [selectPesanan],
  pesanan => pesanan.pesananItems
);

export const selectPesananItemsForPelayan = createSelector(
  [selectPesanan],
  pesanan => {
    let result;
    return pesanan.pesananItems;
  }
);

export const isPesananItemsExist = createSelector(
  [selectPesanan],
  pesanan => pesanan.pesananItems.length
);

export const selectPesananItemsForUpload = createSelector(
  [selectPesananItems],
  pesananItems =>
    pesananItems.map(item => {
      const { IdMenu, Quantity, SubTotal } = item;
      return { IdMenu, Quantity, SubTotal };
    })
);
export const selectPesananItemsCount = createSelector(
  [selectPesananItems],
  pesananItems =>
    pesananItems.reduce(
      (accumulatedQuantity, pesananItem) =>
        accumulatedQuantity + pesananItem.Quantity,
      0
    )
);
export const selectPesananItemsTotal = createSelector(
  [selectPesananItems],
  pesananItems =>
    pesananItems.reduce(
      (accumulatedQuantity, pesananItem) =>
        accumulatedQuantity + pesananItem.Quantity * pesananItem.Harga,
      0
    )
);
