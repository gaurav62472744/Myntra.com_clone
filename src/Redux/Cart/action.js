import { GET_CART_SUCCESS, POST_CART_SUCCESS } from "./actionTypes";
import axios from "axios";

const postCartSuccess = () => {
  return {
    type: POST_CART_SUCCESS,
  };
};

const getCartSuccess = (payload) => {
  console.log("payload", payload);
  return {
    type: GET_CART_SUCCESS,
    payload,
  };
};

export const addCart = (data) => (dispatch) => {
  axios.post(`https://wadrobe.onrender.com/cart`, data).then((res) => {
    console.log(res.data);
    dispatch(postCartSuccess(res.data));
  });
};

export const getCartData = () => (dispatch) => {
  axios.get(`https://wadrobe.onrender.com/cart`).then((res) => {
    console.log("original cart", res.data);
    dispatch(getCartSuccess(res.data));
  });
};
