import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import { store } from "../Redux/store";
import LargeWithAppLinksAndSocial from "../Components/Footer";

import { addCart, getCartData } from "../Redux/Cart/action";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import DummyNavbar from "../Components/Navbar";
export const SingleProduct = () => {
  const [single, setSingle] = useState({});
  const { id } = useParams();
  const [cartBtn, setCartBtn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  console.log("singleData", single);
  useEffect(() => {
    // getData()
    let singleData = products.find((el) => el.id === id);
    setSingle(singleData);
    dispatch(getCartData());
  }, []);

  // console.log("", single);

  const handleClick = () => {
    dispatch(addCart(single));
    setCartBtn(true);
  };

  console.log("storeeeee", store.getState());

  return (
    <>
      <DummyNavbar />
      <div
        style={{
          display: "flex",
          marginTop: "100px",
          width: "80%",
          // border: "1px solid red",
          margin: "auto",

          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "49%" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={single.images && single.images[0]}
            alt=""
          />
        </div>
        {/* .............................................. */}
        <div
          style={{
            // border: "1px solid green",
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
            <p style={{ fontWeight: "400", fontSize: "30px" }}>
              {single.category}
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
                  borderRadius: "5px",
                  width: "100%",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "white",
                  backgroundColor: "rgb(190,180,242)",
                  padding: "0px 10px",
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

          {/* ................................................sizecahrt .............................................. */}
          <div
            className="size"
            style={{
              // border: "1px solid red",
              display: "flex",
              width: "60%",
              justifyContent: "space-between",
              padding: "8px 10px 5px 0px",
              marginTop: "10px",
              gap: "5px",
            }}
          >
            <button
              style={{
                border: "1px solid red",
                width: "20%",
                borderRadius: "100px",
              }}
            >
              S
            </button>
            <button
              style={{
                border: "1px solid red",
                width: "20%",
                borderRadius: "100px",
              }}
            >
              M
            </button>
            <button
              style={{
                border: "1px solid red",
                width: "20%",
                borderRadius: "100px",
              }}
            >
              L
            </button>
            <button
              style={{
                border: "1px solid red",
                width: "20%",
                borderRadius: "100px",
              }}
            >
              XL
            </button>
            <button
              style={{
                border: "1px solid red",
                width: "20%",
                borderRadius: "100px",
              }}
            >
              XXL
            </button>
          </div>
          {/* ......................................................................................................... */}

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
              {cartBtn ? (
                <button onClick={() => navigate("/cartbag")}>GO TO BAG</button>
              ) : (
                <button onClick={handleClick}>ADD TO BAG</button>
              )}
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
          <div style={{ border: "1px solid grey" }}></div>

          <div style={{ fontWeight: "bold" }}>DELIVERY OPTIONS :-</div>
          <div
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              width: "50%",
              display: "flex",
              padding: "0px 10px ",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "40%",
                // border: "1px solid red",
              }}
            >
              <input
                style={{ textAlign: "center" }}
                type="text"
                placeholder="Enter PinCode"
              />
            </div>
            <div>
              <button
                style={{
                  color: "rgb(255,62,108)",
                  // border: "1px solid red",
                  width: "100%",
                }}
              >
                Check
              </button>
            </div>
          </div>
          {/* ....................................... */}
          <div>
            <p style={{ fontSize: "12px" }}>
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
          </div>
          {/* ........................................ */}
          <div>
            <p>100% Original Products</p>
            <p>Pay on delivery might be available</p>
            <p>Easy 30 days returns and exchanges</p>
            <p>Try & Buy might be available</p>
          </div>
          {/* ....................................... */}
          <div style={{ border: "1px solid grey" }}></div>
          <div style={{ marginTop: "15px" }}>
            <p style={{ fontSize: "20px", fontWeight: "500" }}>BEST OFFER :-</p>
          </div>
          {/* ......................................... */}

          <div>
            <li>
              Applicable on: Orders above Rs. 799 (only on first purchase)
            </li>
            <li>
              Coupon code: <span style={{ fontWeight: "500" }}>MYNTRA200</span>
            </li>
            <li>Coupon Discount: Rs. 175 off (check cart for final savings)</li>
          </div>
          {/* ........................................ */}
          <div>
            <p
              style={{
                color: "rgb(255,62,108)",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              View Eligible Products
            </p>
          </div>
          {/* .................................... */}
          <div>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              EMI option available
            </p>
          </div>
          {/* ...................... */}
          <div>
            <li>EMI starting from Rs.33/month</li>
          </div>
          <div>
            <p
              style={{
                color: "rgb(255,62,108)",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              View Plan
            </p>
          </div>
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
      <LargeWithAppLinksAndSocial />
    </>
  );
};
