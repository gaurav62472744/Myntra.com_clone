import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
export const SingleProduct = () => {
  const [single, setSingle] = useState({});
  const { id } = useParams();
  console.log(id);
  const products = useSelector((store) => store.products);
  console.log(products);

  useEffect(() => {
    let singleData = products.find((el) => el.id === id);
    setSingle(singleData);
  }, []);

  console.log(single);
  return (
    <div>
      <img src={single.images} alt="" />
      <h3>
        Discount:{single.discount} {single.discounted_price}
      </h3>
      <p>Title:{single.title}</p>
    </div>
  );
};
