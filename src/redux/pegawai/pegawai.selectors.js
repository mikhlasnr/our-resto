//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";

const selectUsers = state => state.pegawai;

export const selectIsEmailExist = createSelector(
  [selectUsers],
  users => users.isEmailExist
);

export const selectShowModalAddPegawai = createSelector(
  [selectUsers],
  pegawai => pegawai.showModalAddPegawai
);

export const selectShowModalUpdatePegawai = createSelector(
  [selectUsers],
  pegawai => pegawai.showModalUpdatePegawai
);

export const selectInputProfile = createSelector(
  [selectUsers],
  pegawai => pegawai.inputProfile
);

export const selectIsUploading = createSelector(
  [selectUsers],
  pegawai => pegawai.isUploading
);
