import React from "react";

const Input = ({ label, textarea, ...props }) => {
  let classes =
    "w-full p-1 border-b-2 rounded-md focus:shadow-md duration-500 border-stone-300 bg-gray-200 text-stone-600 focus:outline-none focus:border-stone-300";
  return (
    <p className="flex flex-col gap-1 my-4 ">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
};

export default Input;
