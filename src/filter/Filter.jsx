import React from "react";
import { useEntrys } from "../entry/useEntry";

const Filter = ({ filterItems, onFilterValueSelected, setItems }) => {
  const { entrys } = useEntrys();
  const onChangeHandler = (e) => {
    onFilterValueSelected(e.target.value);
    if (e.target.value === "All") {
      setItems(entrys);
    }
  };
  return (
    <div>
      <select onChange={onChangeHandler}>
        <option value="All">All</option>
        {filterItems.map((e, id) => (
          <option key={id} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
