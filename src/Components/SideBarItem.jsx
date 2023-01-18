import React from "react";
import { useState } from "react";

const SideBarItem = ({ name, quan }) => {
//   console.log("props", name, quan);
  const [value, setValue] = useState([]);
//   console.log("value", value);
  return (
    <div>
      <div>
        <input
          type="checkbox"
          value={name}
          onClick={(e) => setValue([e.target.value])}
        />
      </div>
      <div>
        <div>{name}</div>
        <div>{quan}</div>
      </div>
    </div>
  );
};

export default SideBarItem;
