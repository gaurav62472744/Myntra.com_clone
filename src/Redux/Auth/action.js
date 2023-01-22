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
    payload,
  };
};

export const SignUp = (firstName, lastName, Email, Password) => (dispatch) => {
  const payload = {
    firstName,
    lastName,
    Email,
    Password,
  };

  return axios
    .post(`https://wadrobe.onrender.com/userData`, payload)
    .then((res) => {
      console.log(res);
      dispatch(signupSuccess(res.data));
    });
};

export const getLoginData = () => (dispatch) => {
  axios.get(`https://wadrobe.onrender.com/userData`).then((res) => {
    dispatch(getSignupSuccess(res.data));
  });
};
