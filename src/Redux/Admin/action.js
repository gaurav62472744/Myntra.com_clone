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
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_CHILD_PRODUCT_FAILURE,
  GET_CHILD_PRODUCT_REQUEST,
  GET_CHILD_PRODUCT_SUCCESS,
  GET_MEN_PRODUCT_FAILURE,
  GET_MEN_PRODUCT_REQUEST,
  GET_MEN_PRODUCT_SUCCESS,
  GET_USERLIST_FAILURE,
  GET_USERLIST_REQUEST,
  GET_USERLIST_SUCCESS,
  GET_WOMEN_PRODUCT_FAILURE,
  GET_WOMEN_PRODUCT_REQUEST,
  GET_WOMEN_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./actionTypes";

// get men data
export const getMenProductRequest = () => {
  return { type: GET_MEN_PRODUCT_REQUEST };
};
export const getMenProductSuccess = (payload) => {
  return { type: GET_MEN_PRODUCT_SUCCESS, payload };
};
export const getMenProductFailure = () => {
  return { type: GET_MEN_PRODUCT_FAILURE };
};

// get women data
export const getWomenProductRequest = () => {
  return { type: GET_WOMEN_PRODUCT_REQUEST };
};
export const getWomenProductSuccess = (payload) => {
  return { type: GET_WOMEN_PRODUCT_SUCCESS, payload };
};
export const getWomenProductFailure = () => {
  return { type: GET_WOMEN_PRODUCT_FAILURE };
};

// get child data

export const getChildProductRequest = () => {
  return { type: GET_CHILD_PRODUCT_REQUEST };
};
export const getChildProductSuccess = (payload) => {
  return { type: GET_CHILD_PRODUCT_SUCCESS, payload };
};
export const getChildProductFailure = () => {
  return { type: GET_CHILD_PRODUCT_FAILURE };
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

export const deleteProductRequest = () => {
  return { type: DELETE_PRODUCT_REQUEST };
};

export const deleteProductSuccess = () => {
  return { type: DELETE_PRODUCT_SUCCESS };
};

export const deleteProductFailure = () => {
  return { type: DELETE_PRODUCT_FAILURE };
};

export const userDataRequest = () => {
  return { type: GET_USERLIST_REQUEST };
};

export const userDataSuccess = (payload) => {
  return { type: GET_USERLIST_SUCCESS, payload };
};

export const userDataFailure = () => {
  return { type: GET_USERLIST_FAILURE };
};

export const deleteUserRequest = () => {
  return { type: DELETE_USER_REQUEST };
};

export const deleteUserSuccess = () => {
  return { type: DELETE_USER_SUCCESS };
};

export const deleteUserFailure = () => {
  return { type: DELETE_USER_FAILURE };
};
// fetch request men
export const getMenAdminProduct = (dispatch) => {
  dispatch(getMenProductRequest());
  axios
    .get(`https://wadrobe.onrender.com/men`)
    .then((res) => {
      dispatch(getMenProductSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getMenProductFailure());
    });
};

export const getWomenAdminProduct = (dispatch) => {
  dispatch(getWomenProductRequest());
  axios
    .get(`https://wadrobe.onrender.com/women`)
    .then((res) => {
      dispatch(getWomenProductSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getWomenProductFailure());
    });
};

export const getChildAdminProduct = (dispatch) => {
  dispatch(getChildProductRequest());
  axios
    .get(`https://wadrobe.onrender.com/child`)
    .then((res) => {
      dispatch(getChildProductSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getChildProductFailure());
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
    .patch(`https://wadrobe.onrender.com/men/${id}`, data)
    .then((res) => {
      dispatch(updateProductSuccess(res.data));
    })
    .catch((err) => {
      dispatch(updateProductFailure());
    });
};

//  delete request
export const deleteAdminProduct = (id) => (dispatch) => {
  dispatch(deleteProductRequest());
  return axios
    .delete(`https://wadrobe.onrender.com/men/${id}`)
    .then((res) => {
      dispatch(deleteProductSuccess());
    })
    .catch((err) => {
      dispatch(deleteProductFailure());
    });
};

// user data get request

export const getUserDataProduct = (dispatch) => {
  dispatch(userDataRequest());
  axios
    .get(`https://wadrobe.onrender.com/userData`)
    .then((res) => {
      dispatch(userDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(userDataFailure());
    });
};

export const deleteUserData = (id) => (dispatch) => {
  dispatch(deleteUserRequest());
  return axios
    .delete(`https://wadrobe.onrender.com/userData/${id}`)
    .then((res) => {
      dispatch(deleteUserSuccess());
    })
    .catch((err) => {
      dispatch(deleteUserFailure());
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
