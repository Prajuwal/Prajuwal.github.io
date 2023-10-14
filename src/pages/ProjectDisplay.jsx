import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import { GitHub } from "@mui/icons-material";
import "../styles/ProjectDisplay.css";
import { Link } from "react-router-dom";

function ProjectDisplay({ id }) {
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
      <a href={project.github} target="_blank" rel="link to github">
        <GitHub />
      </a>
    </div>
  );
}

export default ProjectDisplay;
