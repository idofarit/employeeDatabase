import React from "react";
import { useForm } from "react-hook-form";
import { useCreateEntry } from "./useCreateEntry";
import { useEditEntry } from "./useEditEntry";
import FormRow from "../FormRow";

const CreateEntryForm = ({ entryToEdit = {}, onCloseModal }) => {
  const { id: editID, ...editValues } = entryToEdit;

  const isEditSession = Boolean(editID);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const { isCreating, createEntry } = useCreateEntry();

  const { isEditing, editEntry } = useEditEntry();

  const isWorking = isCreating || isEditing;

  const onSubmit = (data) => {
    const empImg =
      typeof data.empImg === "string" ? data.empImg : data.empImg[0];

    if (isEditSession)
      editEntry(
        {
          newEntryData: {
            ...data,
            empImg: empImg,
          },
          id: editID,
        },
        {
          onSuccess: (data) => {
            console.log(data);

            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createEntry(
        { ...data, empImg: empImg },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Employee ID" error={errors?.emp_id?.message}>
        <input
          type="number"
          id="emp_id"
          disabled={isWorking}
          {...register("emp_id", {
            required: "This is required",
          })}
        />
      </FormRow>

      <FormRow label="Employee Name" error={errors?.emp_name?.message}>
        <input
          type="text"
          id="emp_name"
          disabled={isWorking}
          {...register("emp_name", {
            required: "This is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Employee Designation"
        error={errors?.emp_designation?.message}
      >
        <input
          type="text"
          id="emp_designation"
          disabled={isWorking}
          {...register("emp_designation", {
            required: "This is required",
          })}
        />
      </FormRow>

      <FormRow label="Employee Salary" error={errors?.emp_salary?.message}>
        <input
          type="number"
          id="emp_salary"
          disabled={isWorking}
          {...register("emp_salary", {
            required: "This is required",
          })}
        />
      </FormRow>

      <FormRow label="Employee Phone" error={errors?.emp_ph?.message}>
        <input
          type="number"
          id="emp_ph"
          disabled={isWorking}
          {...register("emp_ph", {
            required: "This is required",
          })}
        />
      </FormRow>

      <FormRow label="Employee Image" error={errors?.empImg?.message}>
        <input
          type="file"
          accept="empImg/*"
          id="empImg"
          disabled={isWorking}
          {...register("empImg", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <button type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </button>
        <button className="createBtn" disabled={isWorking}>
          {isEditSession ? "Edit Entry" : " Create Entry"}
        </button>
      </FormRow>
    </form>
  );
};

export default CreateEntryForm;
