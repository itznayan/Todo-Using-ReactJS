import { useState } from "react";
import NewProject from "./assets/components/NewProject";
import NoProject from "./assets/components/NoProject";
import Sidebar from "./assets/components/Sidebar";
import SelectedProject from "./assets/components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
    tasks: [],
  });
  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };
  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: prevState.project.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };
  const handleSelectedProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  function handleStartProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  const handleCancelAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };
  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [...prevState.project, newProject],
      };
    });
  };
  const selectedProject = projectState.project.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={handleDeleteProject}
      project={selectedProject}
      tasks={projectState.tasks}
    ></SelectedProject>
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartProject}
        project={projectState.project}
        onSelectProject={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
