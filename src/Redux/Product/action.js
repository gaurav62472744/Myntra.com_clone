import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
 
} from "./actionTypes";

const getProductRequestAction = () => {
  return { type: GET_PRODUCTS_REQUEST };
};

const getProductSuccessAction = (payload) => {
  return { type: GET_PRODUCTS_SUCCESS, payload };
};

const getProductFailureAction = () => {
  return { type: GET_PRODUCTS_FAILURE };
};


// ..........................getApi............................

export const getProducts = (param) => (dispatch) => {
  dispatch(getProductRequestAction());

  axios
    .get(`https://wadrobe.onrender.com/men?_page=2&_limit=50`, param)
    .then((res) => {
      dispatch(getProductSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getProductFailureAction());
    });
};


