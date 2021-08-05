import ReportActionTypes from "./report.types";
import axios from "axios";

export const fetchDataReport = () => {
  return dispatch => {
    dispatch(fetchReportStart());
    axios("/report/get-by-year")
      .then(res => {
        dispatch(fetchReportSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchReportFailure(error.message));
      });
  };
};

const fetchReportStart = () => ({
  type: ReportActionTypes.FETCH_REPORT_START,
});

const fetchReportSuccess = data => ({
  type: ReportActionTypes.FETCH_REPORT_SUCCESS,
  payload: data,
});

const fetchReportFailure = message => ({
  type: ReportActionTypes.FETCH_REPORT_FAILURE,
  payload: message,
});
export const removeDataReport = () => ({
  type: ReportActionTypes.REMOVE_DATA_REPORT,
});
