import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return (
            <ProjectItem id={project.id} name={project.name} image={project.image} key={project.id} />
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
