import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from "./actionTypes";

const inisitalState = {
  products: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = inisitalState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case GET_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case ADD_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
export { reducer };
