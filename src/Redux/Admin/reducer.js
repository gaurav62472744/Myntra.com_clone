import {
  ADD_MEN_PRODUCT_FAILURE,
  ADD_MEN_PRODUCT_REQUEST,
  ADD_MEN_PRODUCT_SUCCESS,
  ADD_WOMEN_PRODUCT_REQUEST,
  ADD_WOMEN_PRODUCT_SUCCESS,
  ADD_WOMEN_PRODUCT_FAILURE,
  ADD_CHILD_PRODUCT_REQUEST,
  ADD_CHILD_PRODUCT_SUCCESS,
  ADD_CHILD_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  GET_WOMEN_PRODUCT_REQUEST,
  GET_WOMEN_PRODUCT_SUCCESS,
  GET_WOMEN_PRODUCT_FAILURE,
  GET_MEN_PRODUCT_REQUEST,
  GET_MEN_PRODUCT_SUCCESS,
  GET_MEN_PRODUCT_FAILURE,
  GET_CHILD_PRODUCT_REQUEST,
  GET_CHILD_PRODUCT_SUCCESS,
  GET_CHILD_PRODUCT_FAILURE,
  GET_USERLIST_REQUEST,
  GET_USERLIST_SUCCESS,
  GET_USERLIST_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "./actionTypes";

const inisitalState = {
  women: [],
  men: [],
  child: [],
  isLoading: false,
  isError: false,
  users: [],
};

const reducer = (state = inisitalState, { type, payload }) => {
  switch (type) {
    case GET_WOMEN_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_WOMEN_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false, women: payload };
    }
    case GET_WOMEN_PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_MEN_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_MEN_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false, men: payload };
    }
    case GET_MEN_PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_CHILD_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_CHILD_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false, child: payload };
    }
    case GET_CHILD_PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case ADD_MEN_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_MEN_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_MEN_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case ADD_WOMEN_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_WOMEN_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_WOMEN_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case ADD_CHILD_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case ADD_CHILD_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_CHILD_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case UPDATE_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case UPDATE_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case UPDATE_PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case DELETE_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case DELETE_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case DELETE_PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_USERLIST_REQUEST: {
      return { ...state, isloading: true };
    }
    case GET_USERLIST_SUCCESS: {
      return { ...state, isLoading: false, users: payload };
    }
    case GET_USERLIST_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case DELETE_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case DELETE_USER_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case DELETE_USER_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
export { reducer };
