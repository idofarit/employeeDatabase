import React, { useState } from "react";
import Menus from "../ui/Menus";
import Modal from "../Modal";
import {
  FaEllipsisVertical,
  FaEye,
  FaPencil,
  FaRegTrashCan,
} from "react-icons/fa6";
import CreateEntryForm from "../entry/CreateEntryForm";
import { deleteEntry } from "../api/apiEntry";
import ShowEntry from "../entry/ShowEntry";
import ConfirmDelete from "../ui/ConfirmDelete";
import { useDeleteEntry } from "../entry/useDeleteEntry";

const TableSearch = ({ entry, query }) => {
  const [show, setShow] = useState(false);
  const { isDeleting } = useDeleteEntry();

  return (
    <div className="tableSearch">
      {entry
        .filter(
          (row) =>
            !query.length ||
            row.emp_name
              .toString()
              .toLowerCase()
              .includes(query.toString().toLowerCase())
        )
        .map((item) => (
          <div key={item.emp_id}>
            <div className="employeeList">
              <img className="Img" src={item.empImg} alt="" />

              <p className="empName">{item.emp_name}</p>
            </div>
            <div className="menuContainer">
              <Modal>
                <Menus.Menu>
                  <Menus.Toggle id={item.emp_id} />
                  <Menus.List id={item.emp_id}>
                    <Modal.Open opens="edit">
                      <Menus.Button icon={<FaPencil />}>Edit</Menus.Button>
                    </Modal.Open>

                    <Modal.Open opens="show-details">
                      <Menus.Button icon={<FaEye />}>Show Details</Menus.Button>
                    </Modal.Open>

                    <Modal.Open opens="delete">
                      <Menus.Button icon={<FaRegTrashCan />}>
                        Delete
                      </Menus.Button>
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
        ))}
    </div>
  );
};

export default TableSearch;
