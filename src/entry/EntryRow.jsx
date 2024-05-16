import React, { useState } from "react";
import { useDeleteEntry } from "./useDeleteEntry";

import Table from "../ui/Table";
import Modal from "../Modal";
import Menus from "../ui/Menus";

import { FaEye, FaPencil, FaRegTrashCan } from "react-icons/fa6";
import CreateEntryForm from "./CreateEntryForm";
import ConfirmDelete from "../ui/ConfirmDelete";
import ShowEntry from "./ShowEntry";

const EntryRow = ({ entry }) => {
  const { isDeleting, deleteEntry } = useDeleteEntry();

  const { emp_id, emp_name, emp_designation, emp_salary, emp_phone, empImg } =
    entry;

  return (
    <div className="tableRow">
      <Table.Row>
        <strong className="employeeList">
          {/* {empId && console.log(empId)} */}
          {/* <img className="Img" src={empImg} alt="" /> */}
          <p className="emp_id">{emp_id}</p>
          <p className="empName">{emp_name}</p>
        </strong>
      </Table.Row>
      <div className="menuContainer">
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={emp_id} />
            <Menus.List id={emp_id}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<FaPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="show-details">
                <Menus.Button icon={<FaEye />}>Show Details</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<FaRegTrashCan />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateEntryForm entryToEdit={entry} />
            </Modal.Window>

            <Modal.Window name="show-details">
              <ShowEntry entry={entry} />
            </Modal.Window>
          </Menus.Menu>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="entrys"
              disabled={isDeleting}
              onConfirm={() => deleteEntry(emp_id)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default EntryRow;
