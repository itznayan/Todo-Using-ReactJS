import React from "react";
import { forwardRef } from "react";
const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  let classes =
    "w-full p-1 border-b-2 px-2 rounded-xl shadow-inner rounded-2xl border duration-500 bg-gray-200 text-stone-600 focus:outline-none border-stone-300 focus:border-stone-200";
  return (
    <p className="flex flex-col gap-1 my-4 ">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
