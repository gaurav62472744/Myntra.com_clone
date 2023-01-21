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
        <h1>Filter By</h1>
        <div>
          <p>BRAND</p>
          <SideBarItem />
        </div>
        <hr />

        <div>
          <p>TITLE</p>
          {title.map((item) => (
            <div key={item.id}>{/* <SideBarItem name={item.name} /> */}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
