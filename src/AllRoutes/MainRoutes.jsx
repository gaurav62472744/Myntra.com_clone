import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartAddress } from "../Pages/CartAddress";
import { CartPayment } from "../Pages/CartPayment";
import  ProductList  from "../Pages/ProductList";
import Homepage from "../Pages/Homepage";
import NotFound from "../Pages/NotFound";
import  {SingleProduct}  from "../Pages/SingleProduct";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/cartaddress" element={<CartAddress />} />
        <Route path="/cartpayment" element={<CartPayment />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path='/productlist/:id' element={<SingleProduct/>}/>
      </Routes>
    </div>
  );
};

export default MainRoutes;
