import React, { useEffect, useState } from "react";
import { useEntrys } from "../entry/useEntry";
import Spinner from "./Spinner";
import Empty from "./Empty";
import Menus from "./Menus";
import Table from "./Table";
import EntryRow from "../entry/EntryRow";
import AddEntry from "../entry/AddEntry";
import AddSearch from "../components/AddSearch";

const EntryTable = () => {
  const { isLoading, entrys } = useEntrys();

  if (isLoading) return <Spinner />;

  if (!entrys.length) return <Empty resourceName="Entrys" />;

  return (
    <div className="entryTableContainer">
      <Menus>
        <Table>
          <Table.Header>
            <div>Employee</div>
            <div>Emp Name</div>
            <div>edit/Delete</div>
          </Table.Header>
          <AddSearch />
          <div className="employeeSection">
            <Table.Body
              data={entrys}
              render={(entrys) => <EntryRow entry={entrys} key={entrys.id} />}
            ></Table.Body>
          </div>
          <div className="elem2">
            <AddEntry />
          </div>
        </Table>
      </Menus>
    </div>
  );
};

export default EntryTable;
