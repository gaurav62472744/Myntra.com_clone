import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { Zoom } from "react-slideshow-image";

const DivWrapper = styled.div`
  /* border: 1px solid red; */
  background-color: rgb(250, 251, 252);
  width: 100%;
  text-align: left;
  height: auto;
  padding: 10px;
  margin-bottom: 20px;
  & .imag {
    width: 100%;
    /* height: 100%; */
  }
  & .imag:hover {
    -ms-transform: scale(1.03); /* IE 9 */
    -webkit-transform: scale(1.03); /* Safari 3-8 */
    transform: scale(1.03);
  }
  & .brand {
    font-weight: bold;
  }
  & .title {
    font-size: 12px;
  }
  & .btn {
    background-color: rgb(255, 62, 108);
    color: white;
    border-radius: 2px;
    font-size: 15px;
    padding: 0px 5px 0px 5px;
  }
  & .btn:hover {
    -ms-transform: scale(1.03); /* IE 9 */
    -webkit-transform: scale(1.03); /* Safari 3-8 */
    transform: scale(1.03);
  }
`;

const ProductItem = ({
  id,
  category,
  brand,
  title,
  images,
  discounted_price,
  discount,
}) => {
  const navigate = useNavigate();

  return (
    <DivWrapper>
      <div>
        <img
          className="imag"
          onClick={() => navigate(`/productlist/${id}`)}
          src={images[0]}
          alt=""
        />
        <h2 className="brand">{brand}</h2>
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <div style={{ display: "flex", gap: "5px" }}>
          <p className="rate">
            Rs: {discounted_price ? discounted_price : "500"}
          </p>
          <p style={{ color: "tomato" }}>{discount ? discount : "(65% OFF)"}</p>
        </div>
        <div className="divbtn">
          <button className="btn">ADD TO CART</button>
        </div>
      </div>
    </DivWrapper>
  );
};

export default ProductItem;
