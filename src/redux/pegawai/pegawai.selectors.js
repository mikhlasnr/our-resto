//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";

const selectPegawai = state => state.pegawai;

export const selectDataPegawai = createSelector(
  [selectPegawai],
  pegawai => pegawai.dataPegawai
);

export const selectPegawaiIsFetching = createSelector(
  [selectPegawai],
  pegawai => pegawai.isFetching
);

export const selectPegawaiErrorMessage = createSelector(
  [selectPegawai],
  pegawai => pegawai.errorMessage
);

export const selectIsEmailExist = createSelector(
  [selectPegawai],
  pegawai => pegawai.isEmailExist
);
// START HANDLING SELECTOR MODAL
export const selectShowModalAddPegawai = createSelector(
  [selectPegawai],
  pegawai => pegawai.showModalAddPegawai
);
export const selectShowModalUpdatePegawai = createSelector(
  [selectPegawai],
  pegawai => pegawai.showModalUpdatePegawai
);
export const selectShowModalDeletePegawai = createSelector(
  [selectPegawai],
  pegawai => pegawai.showModalDeletePegawai
);
// END HANDLING SELECTOR MODAL

export const selectInputProfile = createSelector(
  [selectPegawai],
  pegawai => pegawai.inputProfile
);

export const selectIsUploading = createSelector(
  [selectPegawai],
  pegawai => pegawai.isUploading
);
