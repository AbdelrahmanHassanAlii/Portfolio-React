import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/Json Folder/projects.json";
import "../assets/style/project-details.css";
export default function ProjectDetail() {
  const [projectDetails, setProjectDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      let projects = projectsData;
      let project = projects.find((project) => project.id === id);
      setProjectDetails(project);
      console.log(project);
    }
  }, [id]);
  return (
    <div className="project-detail-page">
      <div className="project-detail-container"></div>
      <div className="project-detail-img">
        <img
          src={projectDetails.image_1}
          alt={projectDetails.title}
        />
      </div>
      <div className="project-detail-info">
        <h1 className="project-detail-title">{projectDetails.title}</h1>
        <p className="project-detail-description">
          {projectDetails.description}
        </p>
      </div>
    </div>
  );
}
