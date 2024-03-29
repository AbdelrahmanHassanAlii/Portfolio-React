import React from "react";
import "../assets/style/projects.css";
import image_1 from "../assets/images/Demo.png";
import "../assets/style/projects.css";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div
      div
      className="projects-section narrow-container"
      id="projects"
      // style={{ backgroundColor: "red" }}
    >
      <div className="projects-title">Projects</div>
      <div className="projects-container">
        <div className="projects-list">
          <ProjectItem
            type="odd"
            image={image_1}
            title="Project 1"
            description="lorem ipsum lorem ipsum lorem ipsumlorem ipsumvlorem ipsumlorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum
        lorem ipsum vlorem ipsum vvvlorem ipsum vvlorem ipsum vvvvvlorem ipsum
        lorem ipsum vlorem ipsum lorem ipsum lorem ipsum vvlorem ipsum vlorem
        ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vlorem ipsum
      "
          />

          <ProjectItem
            type="even"
            image={image_1}
            title="Project 1"
            description="This is a description of project 1."
          />

          <ProjectItem
            type="even"
            image={image_1}
            title="Project 1"
            description="This is a description of project 1."
          />

          <ProjectItem
            type="even"
            image={image_1}
            title="Project 1"
            description="This is a description of project 1."
          />

          <ProjectItem
            type="even"
            image={image_1}
            title="Project 1"
            description="This is a description of project 1."
          />

          <ProjectItem
            type="even"
            image={image_1}
            title="Project 1"
            description="This is a description of project 1."
          />
        </div>
      </div>
    </div>
  );
}
