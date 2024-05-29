import React from "react";
import Modal from "../Modal";
import CreateEntryForm from "./CreateEntryForm";
import { FaPlus } from "react-icons/fa6";

const AddEntry = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="car-form">
          <button>
            <FaPlus />
          </button>
        </Modal.Open>
        <Modal.Window name="car-form">
          <CreateEntryForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AddEntry;
