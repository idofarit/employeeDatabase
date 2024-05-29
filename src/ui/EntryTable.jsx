import React, { useState } from "react";
import { useEntrys } from "../entry/useEntry";
import Spinner from "./Spinner";
import Empty from "./Empty";
import Menus from "./Menus";
import Table from "./Table";
import EntryRow from "../entry/EntryRow";
import AddEntry from "../entry/AddEntry";
import AddSearch from "../components/AddSearch";
import Filter from "../filter/Filter";

const EntryTable = () => {
  const { isLoading, entrys } = useEntrys();

  const [items, setItems] = useState(entrys);

  const filterItems = [...new Set(entrys?.map((e) => e.emp_designation))];

  const filterValue = (designation) => {
    const newValue = entrys.filter(
      (desig) => desig.emp_designation === designation
    );

    setItems(newValue);
  };

  if (isLoading) return <Spinner />;

  if (!entrys.length) return <Empty resourceName="Entrys" />;

  const onFilterValueSelected = (e) => {
    filterValue(e);
  };

  return (
    <div className="entryTableContainer">
      <Menus>
        <Table>
          <Table.Header>
            <div>Employee</div>
            <div>Emp Name</div>
            <div>
              <Filter
                filterItems={filterItems}
                onFilterValueSelected={onFilterValueSelected}
                setItems={setItems}
              />
            </div>
          </Table.Header>
          <div className="employeeSection">
            {items === undefined ? (
              <Table.Body
                data={entrys}
                render={(entrys) => <EntryRow entry={entrys} key={entrys.id} />}
              ></Table.Body>
            ) : (
              <Table.Body
                data={items}
                render={(items) => <EntryRow entry={items} key={items.id} />}
              ></Table.Body>
            )}
          </div>
          <div className="elem2">
            <AddEntry />
            <AddSearch />
          </div>
        </Table>
      </Menus>
    </div>
  );
};

export default EntryTable;
