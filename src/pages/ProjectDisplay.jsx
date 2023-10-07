import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import { GitHub } from "@mui/icons-material";
import "../styles/ProjectDisplay.css";

function ProjectDisplay({ id }) {
  
  console.log("id ye rhi"+ id)
  const project = ProjectList[id];


  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} />{" "}
     
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>Features:</b> {project.features}
      </p>
      <GitHub />
    </div>
  );
}

export default ProjectDisplay;