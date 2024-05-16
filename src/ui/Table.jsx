import { createContext, useContext } from "react";

const TableContext = createContext();

const Table = ({ columns, children }) => {
  return (
    <TableContext.Provider
      value={{
        columns,
      }}
    >
      <div className="styledTable">{children}</div>
    </TableContext.Provider>
  );
};

const Header = ({ children }) => {
  const { columns } = useContext(TableContext);
  return (
    <div className="styledHeader" role="row" columns={columns} as="header">
      {children}
    </div>
  );
};
const Row = ({ children, emp_id }) => {
  const { columns } = useContext(TableContext);

  return (
    <div className="styledRow" role="row" id={emp_id} columns={columns}>
      {children}
    </div>
  );
};
const Body = ({ data, render }) => {
  if (!data?.length) return <h5>No data at the moment</h5>;
  return <section className="styledBody">{data.map(render)}</section>;
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
