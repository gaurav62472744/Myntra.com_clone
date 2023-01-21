import { LOGIN_SUCCESS, SIGN_UP_SUCCESS } from "./actionTypes";

const initialState = {
  signupData: [],
  isAuth:false
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
      };
    }
 case LOGIN_SUCCESS:{
  return {
    ...state,signupData:payload,isAuth:true
  }
 }
    default:
      return state;
  }
};
