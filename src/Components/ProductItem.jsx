import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DivWrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  align-items: center;
  & .brand {
    font-weight: bold;
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
        <h2 className="brand">Brand:{brand}</h2>
        <p className="category">Category:{category}</p>
        <p className="title">Title:{title}</p>
        <p className="rate">
          Price:{discounted_price}
          {discount}
        </p>
      </div>
    </DivWrapper>
  );
};

export default ProductItem;
