import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  const location = useLocation();
  console.log("location", location);

  if (!isAuth) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }
  return children;
};
