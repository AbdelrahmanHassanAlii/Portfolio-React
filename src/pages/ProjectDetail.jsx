import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/Json Folder/projects.json";
import "../assets/style/project-details.css";
export default function ProjectDetail() {
  const [projectDetails, setProjectDetails] = useState({});
  const [baseimageLink, setBaseImageLink] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      let projects = projectsData;
      let project = projects.find((project) => project.id === id);
      setProjectDetails(project);
      setBaseImageLink(project.image_1);
    }
  }, [id]);

  const handleImageChange = (image) => {
    setBaseImageLink(image);
  };

  return (
    <div className="project-detail-page">
      <div className="project-detail-content">
        <div className="project-detail-images">
          <div className="main-image">
            <img
            src={baseimageLink}
            alt={projectDetails.title}
          />
          </div>
          <div className="images">
            <img
              src={projectDetails.image_1}
              alt={projectDetails.title}
              onClick={() => handleImageChange(projectDetails.image_1)}
            />
            <img
              src={projectDetails.image_2}
              alt={projectDetails.title}
              onClick={() => handleImageChange(projectDetails.image_2)}
            />
            <img
              src={projectDetails.image_3}
              alt={projectDetails.title}
              onClick={() => handleImageChange(projectDetails.image_3)}
            />
          </div>
        </div>
        <div className="project-detail-info">
          <h1 className="project-detail-title">{projectDetails.title}</h1>
          <p className="project-detail-description">
            {projectDetails.description}
          </p>
        </div>
      </div>
    </div>
  );
}
