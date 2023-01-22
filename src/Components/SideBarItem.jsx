import { buildTransform } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const DivWrap = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  font-size: 18px;
  text-align: left;
  padding: 0px 20px;
  line-height: 40px;
`;

const SideBarItem = ({ brands, titles }) => {
  // const [value, setValue] = useState([]);
  console.log("brandds", brands, titles);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialStateBrand = searchParams.getAll("brand");
  const initialStateTitle = searchParams.getAll("title");
  // const initialOrder = searchParams.get("order");
  const [brand, setBrand] = useState(initialStateBrand || []);
  const [title, setTitle] = useState(initialStateTitle || []);
  // const [order, setOrder] = useState(initialOrder || "");
  console.log("searchParams", searchParams);
  const handleFilter = (e) => {
    let newCategory = [...brand];

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setBrand(newCategory);
  };
  const handleFilterTitle = (e) => {
    let newTitle = [...title];
    if (newTitle.includes(e.target.value)) {
      newTitle.splice(newTitle.indexOf(e.target.value), 1);
    } else {
      newTitle.push(e.target.value);
    }
    setTitle(newTitle);
  };
  useEffect(() => {
    if (brand.length > 0) {
      let params = {};
      params.brand = brand;
      setSearchParams(params);
      console.log("params.....", params);
    }
    if (title.length > 0) {
      let params = {};
      params.title = title;
      setSearchParams(params);
      console.log("params title.....", params);
    } else if (brand.length > 0 && title.length > 0) {
      let params = {};
      params.brand = brand;
      params.title = title;
      setSearchParams(params);
    } else {
      let params = {};
      params.brand = brand;
      setSearchParams(params);
    }
  }, [brand]);

  return (
    <DivWrap>
      <div>
        {brands &&
          brands.map((item) => (
            <div>
              <input
                type="checkbox"
                value={item.name}
                onChange={handleFilter}
                checked={brand.includes(item.name)}
              />
              <label style={{ marginLeft: "10px", color: "green" }}>
                {item.name}
              </label>
            </div>
          ))}
      </div>
      <div>
        {titles &&
          titles.map((item) => (
            <div>
              <input
                type="checkbox"
                value={item.name}
                onChange={handleFilterTitle}
                checked={title.includes(item.name)}
              />
              <label style={{ marginLeft: "10px", color: "green" }}>
                {item.name}
              </label>
            </div>
          ))}
      </div>
    </DivWrap>
  );
};

export default SideBarItem;

// 1.div(display flex,text align;left,padding)
// 2. two more div under avove div
//
