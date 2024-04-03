import React, { useEffect, useState } from "react";
import "../assets/style/projects.css";
import "../assets/style/projects.css";
import ProjectItem from "./ProjectItem";
import projectsData from "../data/Json Folder/projects.json";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div div className="projects-section narrow-container" id="projects">
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              type={project.type}
              imageName={project.image}
              title={project.title}
              description={project.description}
              status={project.status}
              codeLink={project.codeLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
