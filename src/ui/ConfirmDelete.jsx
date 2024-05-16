import React from "react";

const ConfirmDelete = ({
  resourceName,
  onConfirm,
  onCloseModal,
  disabled,
  getEntry,
}) => {
  const handleConfirm = () => {
    onConfirm();
    onCloseModal();
  };

  return (
    <div className="StyledConfirmDelete">
      <header className="Heading" as="h3">
        Delete {resourceName} ?
      </header>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <button onClick={onCloseModal}>Cancel</button>
        <button onClick={handleConfirm}>Delete</button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
