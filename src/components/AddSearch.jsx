import React from "react";
import Modal from "../Modal";
import Input from "../ui/Input";
import { FaSearch } from "react-icons/fa";

const AddSearch = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="search-form">
          <button>Search here</button>
        </Modal.Open>
        <Modal.Window name="search-form">
          <Input />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AddSearch;
