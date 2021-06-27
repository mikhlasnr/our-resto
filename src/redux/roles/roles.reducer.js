import RolesActionTypes from "./roles.types";

const INITIAL_STATE = {
  rolesData: null,
  isFetching: false,
  errorMessage: undefined,
};

const rolesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RolesActionTypes.FETCH_ROLES_START:
      return {
        ...state,
        isFetching: true,
      };
    case RolesActionTypes.FETCH_ROLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        rolesData: action.payload,
      };
    case RolesActionTypes.FETCH_ROLES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default rolesReducer;
