//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";

const selectKategoriMenu = state => state.kategoriMenu;

export const selectDataKategoriMenu = createSelector(
  [selectKategoriMenu],
  kategoriMenu => kategoriMenu.dataKategoriMenu
);

export const selectIsFetching = createSelector(
  [selectKategoriMenu],
  kategoriMenu => kategoriMenu.isFetching
);

export const selectErrorMessage = createSelector(
  [selectKategoriMenu],
  kategoriMenu => kategoriMenu.errorMessage
);
