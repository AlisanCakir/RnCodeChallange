import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_OUT,
} from "./constants";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {},
  error: "",
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_IN_REQUEST:
      return { ...state, isLoading: false };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload.user,
        error: "",
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: payload.error,
        isLoading: false,
      };
    case SIGN_UP_REQUEST:
      return { ...state, isLoading: true };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload.user,
        error: "",
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: payload.error,
        isLoading: false,
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: {},
      };
    default:
      return state;
  }
};
