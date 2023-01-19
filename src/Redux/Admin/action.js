import axios from "axios";
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
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

export const postProductRequest = () => {
  return { type: ADD_PRODUCT_REQUEST };
};
export const postProductSuccess = () => {
  return { type: ADD_PRODUCT_SUCCESS };
};
export const postProductFailure = () => {
  return { type: ADD_PRODUCT_FAILURE };
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

export const addAdminProduct = (text) => (dispatch) => {
  if (text) {
    const userData = {
      category: category,
      brand: brand,
      title: title,
      discounted_price: discounted_price,
      strike_price: strike_price,
      discount: discount,
      image: [],
      size: [],
    };

    dispatch(postProductRequest());
    return axios
      .post(`https://wadrobe.onrender.com/men`, userData)
      .then((res) => {
        dispatch(postProductSuccess());
      })
      .catch((err) => {
        dispatch(postProductFailure());
      });
  }
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
