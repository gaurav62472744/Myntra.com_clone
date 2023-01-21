import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
    

//Create the HOC for protected Routes

  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  

  if (!isAuth) {
    return <Navigate to="/login"  />;
  }
  return children;
};


