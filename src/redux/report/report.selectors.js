//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";

const selectReport = state => state.report;

export const selectDataReport = createSelector(
  [selectReport],
  report => report.dataReport
);

export const selectReportIsFetching = createSelector(
  [selectReport],
  report => report.isFetching
);

export const selectReportErrorMessage = createSelector(
  [selectReport],
  report => report.errorMessage
);
