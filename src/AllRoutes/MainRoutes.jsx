import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminStore from "../Pages/AdminStore";
import Dashboard from "../Pages/Dashboard";
import TrendingPro from "../Pages/TrendingPro";
import ProductList from "../Pages/ProductList";
import Homepage from "../Pages/Homepage";
import NotFound from "../Pages/NotFound";
import { SingleProduct } from "../Pages/SingleProduct";
import { CartAddress } from "../Pages/CartAddress";
import { CartPayment } from "../Pages/CartPayment";
import SignupCard from "../Pages/Signup";
import Login from "../Components/Login";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path='/cartaddress' element={<CartAddress/>} />
        <Route path="/cartpayment" element={<CartPayment/>} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/trending" element={<TrendingPro />}></Route>
        <Route path="/storeproduct" element={<AdminStore />}></Route>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productlist/:id" element={<SingleProduct />} />
        <Route path='/signup' element={<SignupCard/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
