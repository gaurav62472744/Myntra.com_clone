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
  },
  {
    name: "HIGHLANDER",
  },
  {
    name: "Lee",
  },
  {
    name: "Roadster",
  },
  {
    name: "H&M",
  },
  {
    name: "IVOC",
  },
  {
    name: "United Colors of Benetton",
  },
  {
    name: "The Indian Garage Co",
  },
];
const title = [
  { name: "Men Rapid Dry Running Joggers" },
  {
    name: "Printed Casual Shirt",
  },
  {
    name: "Men Slim Fit Casual Shirt",
  },
  {
    name: "Men Time Travlr Slim Fit Chinos",
  },
  {
    name: "Men Tapered Fit Chinos",
  },
];

const SideBar = () => {
  return (
    <div>
      <div>
        <p>CATEGORIES</p>
        {categories.map((item) => (
          <SideBarItem name={item.name} />
        ))}
      </div>
      <div>
        <p>BRAND</p>
        {brand.map((item) => (
          <SideBarItem name={item.name} />
        ))}
      </div>
      <div>
        <p>TITLE</p>
        {title.map((item) => (
          <SideBarItem name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
