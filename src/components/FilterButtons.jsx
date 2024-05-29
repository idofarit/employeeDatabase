import React from "react";
import { useEntrys } from "../entry/useEntry";

const FilterButtons = ({ filterItems, filterValue, setItems }) => {
  const { entrys } = useEntrys();

  return (
    <div className="btn-container">
      <button onClick={() => setItems(entrys)}>All</button>
      <div className="btn-cat-container">
        {filterItems?.map((e) => (
          <button className="filter-btn" onClick={() => filterValue(e)}>
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
