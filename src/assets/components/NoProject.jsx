import React from "react";
import noProjectImg from "../../assets/no-projects.png";
import Button from "./Button";
const NoProject = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An Empty task list"
        className="size-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500">No Project Selected</h2>
      <p className="text-stone-400 mb-4">
        select a project or get started with new one
      </p>
      <p>
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
};

export default NoProject;
