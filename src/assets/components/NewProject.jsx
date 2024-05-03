import React from "react";
import Input from "./Input";

const NewProject = () => {
  return (
    <div className="w-[35rem]  mt-16">
      <menu className="flex  items-center justify-end gap-6 my-4">
        <li>
          <button className="text-stone-800 p-2 px-4 shadow-md  hover:shadow-xl duration-500 rounded-md">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-stone-800 p-2 px-4 text-stone-200 rounded-md hover:text-white hover:bg-stone-700 duration-500  hover:shadow-sm hover:shadow-black ">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
