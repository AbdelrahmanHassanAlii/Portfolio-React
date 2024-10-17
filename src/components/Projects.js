import React, { useEffect, useState } from "react";
import "../assets/style/projects.css";
import "../assets/style/projects.css";
import ProjectItem from "./ProjectItem";
import projectsData from "../data/Json Folder/topProjects.json";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log(projectsData);
    setProjects(projectsData);
  }, []);

  return (
    <div div className="projects-section narrow-container" id="projects">
      <SectionHeader
        title="Projects"
        subtitle="Check out some of my projects"
      />
      <div className="projects-container">
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              id={project.id}
              image={project.image}
              title={project.title}
            />
          ))}
        </div>
      </div>
      <div className="more-projects">
        <Link
          to="/projects"
          // target="_blank"
          rel="noreferrer"
        >
          More Projects
        </Link>
      </div>
    </div>
  );
}
