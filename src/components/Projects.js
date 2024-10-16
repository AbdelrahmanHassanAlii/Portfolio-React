import React, { useEffect, useState } from "react";
import "../assets/style/projects.css";
import "../assets/style/projects.css";
import ProjectItem from "./ProjectItem";
import projectsData from "../data/Json Folder/projects.json";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div div className="projects-section narrow-container" id="projects">
      <SectionHeader title="Projects" subtitle="Check out some of my projects" />
      <div className="projects-container">
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              id={project.id}
              type={project.type}
              imageName={project.image}
              title={project.title}
              description={project.description}
              status={project.status}
              codeLink={project.codeLink}
              demoLink={project.demoLink}
              accessCode={project.accessCode}
              accessDemo={project.accessDemo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
