import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import { store } from "../Redux/store";

import { addCart, getCartData } from "../Redux/Cart/action";
export const SingleProduct = () => {
  const [single, setSingle] = useState({});
  const { id } = useParams();

  const dispatch = useDispatch();

  const [demoData, setDemoData] = useState([]);
  console.log(id);
  const { products, cart } = useSelector((store) => {
    return {
      products: store.ProductReducer.products,
      cart: store.CartReducer.cart,
    };
  });
  console.log("singlePageData", cart);

  // const getData = () => {
  //   axios
  //     .get(`https://wadrobe.onrender.com/men?_page=2&_limit=20`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setDemoData(res.data);
  //     });
  // };
  console.log(demoData);
  useEffect(() => {
    // getData()
    let singleData = products.find((el) => el.id === id);
    setSingle(singleData);
    dispatch(getCartData());
  }, []);

  // console.log("", single);

  const handleClick = () => {
    alert("hi i am cart");
    dispatch(addCart(single));
  };

  console.log("storeeeee", store.getState());

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
            src={single.images && single.images[0]}
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
              <p style={{ marginTop: "10px", color: "#03A685" }}>
                <AiFillStar />
              </p>
            </div>
            <p style={{ margin: "0px 5px" }}> | </p>
            <p>{single.rating_count} Ratings</p>
          </div>

          <div style={{ border: "1px solid grey" }}></div>
          <div style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold", fontSize: "25px" }}>
              Rs:{single.discounted_price}
            </p>

            <p style={{ color: "tomato", fontSize: "20px" }}>
              {single.discount}
            </p>
          </div>
          <div className="taxs">
            <p style={{ color: "rgb(27,166,133)", fontWeight: "bold" }}>
              inclusive of all taxes
            </p>
          </div>
          <div
            style={{
              // border: "1px solid red",
              width: "40%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  // border: "1px solid green",
                  width: "100%",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "brown",
                }}
              >
                SELECT SIZE
              </p>
            </div>
            <div>
              <p
                style={{
                  // border: "1px solid green",
                  width: "100%",
                  color: "lightcoral",
                }}
              >
                SIZE CHART <span>+</span>
              </p>
            </div>
          </div>
          <p style={{ fontWeight: "bold", fontSize: "30px" }}>
            {single.category}
          </p>
          {/* .............................button..................................... */}
          <div
            className="btnadd"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              padding: " 10px 0px",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                width: "50%",
                backgroundColor: "rgb(255,62,108)",
                color: "white",
                padding: "8px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              <button onClick={handleClick}>ADD TO BAG</button>
            </div>
            <div
              style={{
                fontSize: "20px",
                border: "1px solid green",
                width: "40%",
                padding: "8px",
                textAlign: "center",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              <button>WISHLIST</button>
            </div>
          </div>
          {/* ........................................end................................. */}
        </div>
      </div>

      {/* <div
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
      </div> */}
    </>
  );
};
