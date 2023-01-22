import React from "react";
import SideBarItem from "../Components/SideBarItem";
const brands = [
  {
    name: "Dennis Lingo",
    quan: 2,
  },
  {
    name: "HIGHLANDER",
    quan: 17,
  },
  {
    name: "Lee",
    quan: 1,
  },
  {
    name: "Roadster",
    quan: 30,
  },
  {
    name: "H&M",
    quan: 5,
  },
  {
    name: "IVOC",
    quan: 1,
  },
  {
    name: "United Colors of Benetton",
    quan: 1,
  },
  {
    name: "The Indian Garage Co",
    quan: 1,
  },
  {
    name: "Alan Jones",
    quan: 10,
  },
  {
    name: "AUSK",
    quan: 15,
  },
  {
    name: "ALIZA",
    quan: 10,
  },
  {
    name: "MAZY",
    quan: 6,
  },
  {
    name: "D&J",
    quan: 16,
  },
  {
    name: "more+",
  },
];
const titles = [
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
        <h1
          style={{
            fontStyle: "italic",
            fontSize: "25px",
            color: "rgb(83,71,57)",
          }}
        >
          Filter By :-
        </h1>
        <div style={{ marginTop: "10px", fontSize: "18px" }}>
          <p>BRAND</p>
          <SideBarItem brands={brands} />
        </div>
        <hr />

        <div style={{ marginTop: "10px", fontSize: "18px" }}>
          <p>TITLE</p>
          <SideBarItem titles={titles} />
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
