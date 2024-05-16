import React, { useEffect, useState } from "react";
import { useEntrys } from "../entry/useEntry";
import Spinner from "./Spinner";
import Empty from "./Empty";
import Menus from "./Menus";
import Table from "./Table";
import EntryRow from "../entry/EntryRow";
import AddEntry from "../entry/AddEntry";
import { getEntrys } from "../api/apiEntry";

const EntryTable = () => {
  const { isLoading, entrys } = useEntrys();

  if (isLoading) return <Spinner />;

  if (!entrys.length) return <Empty resourceName="Entrys" />;

  return (
    <div>
      <Menus>
        <Table>
          <Table.Header>
            <div>Employee ID</div>
            <div>Emp Name</div>
            <div>edit/Delete</div>
          </Table.Header>
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
