import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminStore from "../Pages/AdminStore";
import { CartAddress } from "../Pages/CartAddress";
import { CartPayment } from "../Pages/CartPayment";
import Dashboard from "../Pages/Dashboard";
import Homepage from "../Pages/Homepage";
import NotFound from "../Pages/NotFound";
import TrendingPro from "../Pages/TrendingPro";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/cartaddress" element={<CartAddress />} />
        <Route path="/cartpayment" element={<CartPayment />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/trending" element={<TrendingPro />}></Route>
        <Route path="/storeproduct" element={<AdminStore />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
