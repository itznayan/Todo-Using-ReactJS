import React from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";

import { createPortal } from "react-dom";
const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/60 backdrop:backdrop-blur-[2px] p-4 rounded-xl border-black shadow-xl"
      ref={dialog}
    >
      {children}
      <form method="dialog">
        <button className="py-1 px-4 text-gray-200 mt-2 rounded-lg  bg-stone-800  hover:bg-black duration-700">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
