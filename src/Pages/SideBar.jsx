import React from "react";
import SideBarItem from "../Components/SideBarItem";

const categories = [
  {
    name: "Men",
  },
  {
    name: "Women",
  },
  {
    name: "Child",
  },
];

const brand = [
  {
    name: "Dennis Lingo",
    quan: 3250,
  },
  {
    name: "HIGHLANDER",
    quan: 3250,
  },
  {
    name: "Lee",
    quan: 3250,
  },
  {
    name: "Roadster",
    quan: 3250,
  },
  {
    name: "H&M",
    quan: 3250,
  },
  {
    name: "IVOC",
    quan: 3250,
  },
  {
    name: "United Colors of Benetton",
    quan: 3250,
  },
  {
    name: "The Indian Garage Co",
    quan: 3250,
  },
];
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
          {brand.map((item) => (
            <div key={item.id}>
              <SideBarItem name={item.name} quan={item.quan} type={"brand"} />
            </div>
          ))}
        </div>
        <hr />
        <div>
          <p>CATEGORIES</p>
          {categories.map((item) => (
            <div key={item.id}>
              <SideBarItem name={item.name} />
            </div>
          ))}
        </div>

        <div>
          <p>TITLE</p>
          {title.map((item) => (
            <div key={item.id}>
              <SideBarItem name={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
