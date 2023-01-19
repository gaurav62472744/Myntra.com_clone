import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Product/action";
import SideBar from "./SideBar";
import { store } from "../Redux/store";
import ProductItem from "../Components/ProductItem";
import styled from "styled-components";
import ProdcutText from "../Components/ProdcutText";

const DivWraper = styled.div`
  box-sizing: border-box;
  /* overflow-x: hidden; */
  & .container {
    border: 1px solid brown;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  & .sidebr {
    width: 18%;
    border: 1px solid red;
  }
  & .prodtlist {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 80%;
    gap: 10px;
    /* height: 10px; */
  }
  & .wrap {
    width: 100%;
    border: 1px solid black;
  }
  & .protext {
    width: 100%;
    background-color: rgb(250, 251, 252);
  }
`;

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.ProductReducer.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  //console.log(store.getState())
  console.log("productss", products);

  // ..........................................
  return (
    <>
      <DivWraper>
        <div className="container">
          <div className="sidebr">
            <SideBar />
          </div>
          <div className="prodtlist">
            {products?.map((el, index) => {
              return (
                // <div className="wrap" key={index}>
                <div key={index}>
                  <ProductItem {...el} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="protext">
          <ProdcutText />
        </div>
      </DivWraper>
    </>
  );
};

export default ProductList;
