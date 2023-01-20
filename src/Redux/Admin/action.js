import axios from "axios";
import {
  ADD_CHILD_PRODUCT_FAILURE,
  ADD_CHILD_PRODUCT_REQUEST,
  ADD_CHILD_PRODUCT_SUCCESS,
  ADD_MEN_PRODUCT_FAILURE,
  ADD_MEN_PRODUCT_REQUEST,
  ADD_MEN_PRODUCT_SUCCESS,
  ADD_WOMEN_PRODUCT_FAILURE,
  ADD_WOMEN_PRODUCT_REQUEST,
  ADD_WOMEN_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./actionTypes";

export const getProductRequest = () => {
  return { type: GET_PRODUCT_REQUEST };
};
export const getProductSuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};
export const getProductFailure = () => {
  return { type: GET_PRODUCT_FAILURE };
};

//men data
export const postMenProductRequest = () => {
  return { type: ADD_MEN_PRODUCT_REQUEST };
};
export const postMenProductSuccess = () => {
  return { type: ADD_MEN_PRODUCT_SUCCESS };
};
export const postMenProductFailure = () => {
  return { type: ADD_MEN_PRODUCT_FAILURE };
};

//women data

export const postWomenProductRequest = () => {
  return { type: ADD_WOMEN_PRODUCT_REQUEST };
};
export const postWomenProductSuccess = () => {
  return { type: ADD_WOMEN_PRODUCT_SUCCESS };
};
export const postWomenProductFailure = () => {
  return { type: ADD_WOMEN_PRODUCT_FAILURE };
};

// Child Data

export const postChildProductRequest = () => {
  return { type: ADD_CHILD_PRODUCT_REQUEST };
};
export const postChildProductSuccess = () => {
  return { type: ADD_CHILD_PRODUCT_SUCCESS };
};
export const postChildProductFailure = () => {
  return { type: ADD_CHILD_PRODUCT_FAILURE };
};

export const updateProductRequest = () => {
  return { type: UPDATE_PRODUCT_REQUEST };
};

export const updateProductSuccess = (payload) => {
  return { type: UPDATE_PRODUCT_SUCCESS, payload };
};

export const updateProductFailure = () => {
  return { type: UPDATE_PRODUCT_FAILURE };
};

export const getAdminProduct = (dispatch) => {
  dispatch(getProductRequest());
  axios
    .get(`https://wadrobe.onrender.com/men`)
    .then((res) => {
      dispatch(getProductSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getProductFailure());
    });
};

// Men Data Post

export const addMenAdminProduct = (data) => (dispatch) => {
  dispatch(postMenProductRequest());
  return axios
    .post(`https://wadrobe.onrender.com/men`, data)
    .then((res) => {
      dispatch(postMenProductSuccess());
    })
    .catch((err) => {
      dispatch(postMenProductFailure());
    });
};

// Women data Post

export const addWomenAdminProduct = (data) => (dispatch) => {
  dispatch(postWomenProductRequest());
  return axios
    .post(`https://wadrobe.onrender.com/women`, data)
    .then((res) => {
      dispatch(postWomenProductSuccess());
    })
    .catch((err) => {
      dispatch(postWomenProductFailure());
    });
};

// Child data post

export const addChildAdminProduct = (data) => (dispatch) => {
  dispatch(postChildProductRequest());
  return axios
    .post(`https://wadrobe.onrender.com/child`, data)
    .then((res) => {
      dispatch(postChildProductSuccess());
    })
    .catch((err) => {
      dispatch(postChildProductFailure());
    });
};

// update request

export const updateAdminProduct = (id, data) => (dispatch) => {
  dispatch(updateProductRequest());
  return axios
    .post(`https://wadrobe.onrender.com/men/${id}`, data)
    .then((res) => {
      dispatch(updateProductSuccess(res.data));
    })
    .catch((err) => {
      dispatch(updateProductFailure());
    });
};
// export const addProduct = (product) => async (dispatch) => {
//   dispatch(addProductRequest());
//   try {
//     const { data } = await axios.post(
//       "https://paytmmallserver.onrender.com/product",
//       product
//     );
//     console.error(" data", data);
//     dispatch(addProductSuccess(data));
//   } catch (error) {
//     dispatch(addProductFailure(error));
//   }
// };

// export const deleteProduct = (id) => async (dispatch) => {
//   dispatch(deleteProductRequest());
//   try {
//     const { data } = await axios.delete(
//       `https://paytmmallserver.onrender.com/product/${id}`
//     );
//     dispatch(deleteProductSuccess(data));
//   } catch (error) {
//     dispatch(deleteProductFailure(error));
//   }
// };

// export const updateProduct = (id, product) => async (dispatch) => {
//   dispatch(updateProductRequest());
//   try {
//     const { data } = await axios.put(
//       `https://paytmmallserver.onrender.com/product/${id}`,
//       product
//     );
//     dispatch(updateProductSuccess(data));
//   } catch (error) {
//     dispatch(updateProductFailure(error));
//   }
// };

// export const getUsersList = async (dispatch) => {
//   dispatch(getUserListRequest());
//   try {
//     const { data } = await axios.get(
//       "https://paytmmallserver.onrender.com/users"
//     );
//     dispatch(getUserListSuccess(data));
//   } catch (error) {
//     console.log("error", error);
//     dispatch(getUserListFailure(error));
//   }
// };

// export const addUser = (user) => async (dispatch) => {
//   try {
//     const { data } = await axios.post(
//       "https://paytmmallserver.onrender.com/users",
//       user
//     );
//     console.log(data);
//     // dispatch()
//   } catch (error) {
//     // dispatch()
//     console.log("error", error);
//   }
// };

// export const deleteUser = (email) => async (dispatch) => {
//   dispatch(deleteUserRequest());
//   try {
//     const { data } = await axios.delete(
//       `https://paytmmallserver.onrender.com/users?email=${email}`
//     );
//     console.log("data", data);
//     dispatch(deleteUserSuccess(data.email));
//   } catch (error) {
//     dispatch(deleteUserFailure("error", error));
//   }
// };
