import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Product/action";
import SideBar from "./SideBar";
import { store } from "../Redux/store";
import ProductItem from "../Components/ProductItem";
import styled from "styled-components";
import ProdcutText from "../Components/ProdcutText";
import { useLocation, useSearchParams } from "react-router-dom";
import DummyNavbar from "../Components/Navbar";
import LargeWithAppLinksAndSocial from "../Components/Footer";

const DivWraper = styled.div`
  box-sizing: border-box;
  /* overflow-x: hidden; */
  & .container {
    /* border: 1px solid brown; */
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 70px;
  }
  & .sidebr {
    width: 18%;
    /* border: 1px solid red; */
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
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const search = searchParams.getAll("brand");

  useEffect(() => {
    let getBrandData;
    if (location.search || products.length === 0) {
      getBrandData = {
        params: {
          brand: search,
        },
      };
    }
    dispatch(getProducts(getBrandData));
  }, [location.search, dispatch, products.length, searchParams]);

  //console.log(store.getState())

  // ..........................................
  return (
    <>
      <DummyNavbar />
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
      <LargeWithAppLinksAndSocial />
    </>
  );
};

export default ProductList;
