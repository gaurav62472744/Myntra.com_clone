import { buildTransform } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

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
];
const DivWrap = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;

  font-size: 15px;
`;

const SideBarItem = ({ name, quan, type }) => {
  // const [value, setValue] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("brand");
  // const initialOrder = searchParams.get("order");
  const [brand, setBrand] = useState(initialState || []);
  // const [title, setTitle] = useState(initialState || []);
  // const [order, setOrder] = useState(initialOrder || "");

  const handleFilter = (e) => {
    let newCategory = [...brand];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setBrand(newCategory);
  };

  useEffect(() => {
    if (brand) {
      let params = {};
      params.brand = brand;
      setSearchParams(params);
    }
  }, [brand, searchParams]);

  return (
    <DivWrap>
      <div>
        {brands.map((item) => (
          <div>
            <input
              type="checkbox"
              value={item.name}
              onChange={handleFilter}
              checked={brand.includes(item.name)}
            />
            <label>{item.name}</label>
          </div>
        ))}
      </div>
      <div>
        <div>{name}</div>
        {type === "brand" && <div>({quan})</div>}
      </div>
    </DivWrap>
  );
};

export default SideBarItem;
