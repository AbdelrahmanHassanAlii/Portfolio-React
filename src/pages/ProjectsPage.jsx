import React, { useEffect, useState } from "react";
import projectsData from "../data/Json Folder/projects.json";
import ProjectItem from "../components/ProjectItem";
import "../assets/style/projects-page.css";

export default function ProjectsPage() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="projects">
      {projects?.map((project) => (
        <ProjectItem
          key={project.id}
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
  );
}
