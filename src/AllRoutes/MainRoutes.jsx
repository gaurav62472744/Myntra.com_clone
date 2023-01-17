import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartAddress } from "../Pages/CartAddress";
import { CartPayment } from "../Pages/CartPayment";
import Homepage from "../Pages/Homepage";
import NotFound from "../Pages/NotFound";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path='/cartaddress' element={<CartAddress/>} />
        <Route path="/cartpayment" element={<CartPayment/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
