import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DivWrapper = styled.div`
  border: 1px solid red;
  width: 15%;
  align-items: center;
`;

const DivBox = styled.div`
  border: 1px solid green;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
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
  console.log("images", images);
  return (
    <DivWrapper>
      <DivBox>
        <img
          onClick={() => navigate(`/productlist/${id}`)}
          src={images[0]}
          alt=""
        />

        <h2>Brand:{brand}</h2>
        <h4>Category:{category}</h4>
        <h4>Title:{title}</h4>
        <h4>
          {discounted_price}
          {discount}
        </h4>
      </DivBox>
    </DivWrapper>
  );
};

export default ProductItem;
