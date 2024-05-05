import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };
  return (
    <>
      <Modal buttonCaption="Okay" ref={modal}>
        <h2 className="text-xl font-semibold py-2 text-gray-800">
          Invalid Input
        </h2>
        <p className="py-1">You Forgot to enter value</p>
        <p className="py-1">Please Make Sure To Enter Every Value </p>
      </Modal>
      <div className="w-[35rem]  mt-16">
        <menu className="flex  items-center justify-end gap-6 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 p-2 px-4 shadow-md  hover:shadow-xl duration-500 rounded-md"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="text-zinc-100 backdrop-blur-lg bg-gradient-to-tr from-gray-700 via-gray-950 to-gray-600 rounded-md py-2 px-6 shadow hover:shadow-zinc-950 duration-700 hover:ring-2 ring-black hover:text-stone-100"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
