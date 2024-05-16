import React from "react";

const FormRow = ({ label, error, children }) => {
  return (
    <div className="mainFormRow">
      {label && (
        <div className="label" htmlFor={children.props.id}>
          {label}
        </div>
      )}
      {children}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default FormRow;
