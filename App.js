import React, { useState } from "react";
import { ProjectsContext } from "./context";
import { ConnectRouter } from "./router/connectRouter";
import { ProjectsRouter } from "./router/projectsRouter";


export default function App() {
  
  const [user, setUser] = useState({});
  const [runningProject, setRunningProject] = useState("");
  const [runningColumn, setRunningColumn] = useState("");

  return (
    <ProjectsContext.Provider 
      value={
        { 
          user, setUser,
          runningProject,setRunningProject,
          runningColumn,setRunningColumn
        }}>
      {(user.email) ? <ProjectsRouter /> : <ConnectRouter />}
    </ProjectsContext.Provider>

  )
}

