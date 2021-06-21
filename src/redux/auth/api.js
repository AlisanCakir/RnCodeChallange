import { useAPI } from "../../hooks/useApi";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  signUpFailure,
  signUpRequest,
  signUpSuccess,
} from "./actions";
const { post } = useAPI();

export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  let response = await post({
    endpoint: "Auth/login",
    body: {
      username,
      password,
    },
  });
  //dummy data for test endpoint
  if(!response){
    response={}
    response['status'] = '1'
  }
  if (response?.status == '1') {
    dispatch(
      loginSuccess({
        username,
        token: response?.data?.token || "token",
      })
    );
  } else {
    dispatch(loginFailure(response?.error));
  }
};

export const signUp = (username, name, password) => async (dispatch) => {
  dispatch(signUpRequest());
  let response = await post({
    endpoint: "Auth/signUp",
    body: {
      username,
      name,
      password,
    },
  });
  if(!response){
    response={}
    response['status'] = '1'
  }
  if (response?.status == '1') {
    dispatch(
      signUpSuccess({ username, name, token: response?.token || "token" })
    );
  } else {
    dispatch(signUpFailure(response.error));
  }
};