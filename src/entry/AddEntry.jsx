import React from "react";
import Modal from "../Modal";
import CreateEntryForm from "./CreateEntryForm";

const AddEntry = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="car-form">
          <button>Add Employee Entry</button>
        </Modal.Open>
        <Modal.Window name="car-form">
          <CreateEntryForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AddEntry;
