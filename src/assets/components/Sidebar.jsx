import React from "react";
import Button from "./Button";

const Sidebar = ({ onStartAddProject, project }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your project
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {project.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-3 py-2 duration-500 rounded-lg my-1 text-stone-400 hover:text-stone-100 hover:bg-stone-950 ">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
