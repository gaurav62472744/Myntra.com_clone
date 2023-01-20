import axios from "axios";
import { LOGIN_SUCCESS, SIGN_UP_SUCCESS } from "./actionTypes";

const signupSuccess = () => {
  return {
    type: SIGN_UP_SUCCESS,
  };
};

const getSignupSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const SignUp = (firstName, LastName, Email, Password) => (dispatch) => {
  const payload = {
    firstName,
    LastName,
    Email,
    Password,
  };

  return axios.post(`http://localhost:8080/auth`, payload).then((res) => {
    console.log(res);
    dispatch(signupSuccess(res.data));
  });
};

export const getLoginData = () => (dispatch) => {
  axios.get(`http://localhost:8080/auth`).then((res) => {
    dispatch(getSignupSuccess(res.data));
  });
};
