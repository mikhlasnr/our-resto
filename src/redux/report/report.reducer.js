import ReportActionTypes from "./report.types";

const INITIAL_STATE = {
  dataReport: null,
  isFetching: false,
  errorMessage: undefined,
};

const reportReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReportActionTypes.FETCH_REPORT_START:
      return {
        ...state,
        isFetching: true,
      };
    case ReportActionTypes.FETCH_REPORT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataReport: action.payload,
      };
    case ReportActionTypes.FETCH_REPORT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ReportActionTypes.REMOVE_DATA_REPORT:
      return {
        ...state,
        dataReport: null,
      };
    default:
      return state;
  }
};

export default reportReducer;
