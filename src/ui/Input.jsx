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
    <div>
      <input
        id="emp_name"
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<TableSearch entry={search(entrys)} query={query} />}
    </div>
  );
};

export default Input;
