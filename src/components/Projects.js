import React from "react";
import "../assets/style/projects.css";
import image_1 from "../assets/images/2-small.png";
import "../assets/style/projects.css";

export default function Projects() {
  return (
    <div div className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-list">
          <ProjectItem
            image={image_1}
            title="Project 1"
            description="This is a description of project 1."
          />
          <ProjectItem
            image={image_1}
            title="Project 2"
            description="This is a description of project 2."
          />
          <ProjectItem
            image={image_1}
            title="Project 3"
            description="This is a description of project 3."
          />
          <ProjectItem
            image={image_1}
            title="Project 4"
            description="This is a description of project 4."
          />
        </div>
      </div>
    </div>
  );
}
