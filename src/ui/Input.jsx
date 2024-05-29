import React, { useState } from "react";
import { useEntrys } from "../entry/useEntry";
import TableSearch from "../components/TableSearch";

const Input = () => {
  const { entrys } = useEntrys();

  const [query, setQuery] = useState("");
  const keys = ["emp_name"];
  const search = (entrys) => {
    return entrys.filter((item) =>
      keys.some((key) => item[key]?.toLowerCase().includes(query))
    );
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="input-container">
          <input
            type="search"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            name="search"
            placeholder="serach by name; ex: rahul"
            pattern=".*\S.*"
            required
          />
          <button className="search-btn"></button>
        </div>
        {query === "" ? (
          ""
        ) : (
          <TableSearch entry={search(entrys)} query={query} />
        )}
      </div>
    </div>
  );
};

export default Input;
