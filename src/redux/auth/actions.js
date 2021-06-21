import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "./constants";

export const loginRequest = () => ({
  type: LOG_IN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOG_IN_SUCCESS,
  payload: {
    user,
  },
});

export const loginFailure = (error) => ({
  type: LOG_IN_FAILURE,
  payload: {
    error,
  },
});

export const signUpRequest = () => ({
  type: SIGN_UP_REQUEST,
});

export const signUpSuccess = (user) => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    user,
  },
});

export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: {
    error,
  },
});

export const logout = () => ({
  type: LOG_OUT,
});
