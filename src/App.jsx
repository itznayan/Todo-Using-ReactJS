import { useState } from "react";
import NewProject from "./assets/components/NewProject";
import NoProject from "./assets/components/NoProject";
import Sidebar from "./assets/components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });
  function handleStartProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartProject} />
      {content}
    </main>
  );
}

export default App;
