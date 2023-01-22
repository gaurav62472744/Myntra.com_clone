import React from "react";
import SideBarItem from "../Components/SideBarItem";

const title = [
  { name: "Men Casual Shirt" },
  {
    name: "Printed Casual Shirt",
  },
  {
    name: "Men Slim Fit Casual Shirt",
  },
  {
    name: "Bomber Jacket",
  },
  {
    name: "Men Tapered Fit Chinos",
  },
];

const SideBar = () => {
  return (
    <div>
      <div>
        <h1 style={{ fontStyle: "italic", fontSize: "25px" }}>Filter By :-</h1>
        <div style={{ marginTop: "20px" }}>
          <p style={{ fontSize: "18px" }}>BRAND</p>
          <SideBarItem />
        </div>
        <hr />

        <div>
          {title.map((item) => (
            <div key={item.id}>{/* <SideBarItem name={item.name} /> */}</div>
          ))}
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default SideBar;

// 1.div for title with h1
//
