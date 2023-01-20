import React from "react";
import { useState } from "react";
import styled from "styled-components";

const DivWrap = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;

  font-size: 15px;
`;

const SideBarItem = ({ name, quan, type }) => {
  const [value, setValue] = useState([]);

  return (
    <DivWrap>
      <div>
        <input
          type="checkbox"
          value={name}
          onClick={(e) => setValue([e.target.value])}
        />
      </div>
      <div>
        <div>{name}</div>
        {type === "brand" && <div>({quan})</div>}
      </div>
    </DivWrap>
  );
};

export default SideBarItem;
