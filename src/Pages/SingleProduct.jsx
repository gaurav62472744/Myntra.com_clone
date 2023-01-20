import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export const SingleProduct = () => {
  const [single, setSingle] = useState({});
  const { id } = useParams();
  console.log(id);
  const products = useSelector((store) => store.ProductReducer.products);
  console.log(products);

  useEffect(() => {
    let singleData = products.find((el) => el.id === id);
    setSingle(singleData);
  }, []);

  console.log(single);
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "80%",
          border: "1px solid red",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "49%" }}>
          <img
            style={{ width: "100%" }}
            src={single.images && single.images}
            alt=""
          />
        </div>
        {/* .............................................. */}
        <div
          style={{
            border: "1px solid green",
            width: "49%",
            textAlign: "left",
            padding: "10px",
            lineHeight: "35px",
          }}
        >
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>{single.brand}</p>
          <p style={{ fontSize: "20px", color: "grey" }}>{single.title}</p>
          <div
            style={{
              display: "flex",
              border: "1px solid grey",
              width: "30%",
              marginBottom: "15px",
            }}
          >
            <div style={{ display: "flex" }}>
              <p style={{ fontWeight: "bold" }}>{single.rating}</p>
              <p style={{ marginTop: "4.5px", color: "#03A685" }}>
                <AiFillStar />
              </p>
            </div>
            <p style={{ margin: "0px 5px" }}> | </p>
            <p>{single.rating_count} Ratings</p>
          </div>

          <div style={{ border: "1px solid grey" }}></div>
          <h3>
            Rs: {single.discounted_price} {single.discount}
          </h3>
          <p>{single.category}</p>
        </div>
      </div>
      <div
        style={{
          border: "1px solid red",
          width: "90%",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          SIMILAR PRODUCTS
        </h1>
      </div>
      <div>{/* <ProductList /> */}</div>
    </>
  );
};
