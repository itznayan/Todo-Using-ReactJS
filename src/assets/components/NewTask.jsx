import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredTask}
        onChange={handleChange}
        type="text"
        className="w-64 px-2 border py-1 rounded-sm bg-gray-300"
      />

      <button
        onClick={handleClick}
        className="text-stone-500  rounded-lg p-1 duration-500 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
