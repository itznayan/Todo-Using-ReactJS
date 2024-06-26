import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 text-gray-200 py-2 text-xs md:text-base rounded-md bg-gray-800 hover:bg-stone-800 duration-500 hover:text-stone-200"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
