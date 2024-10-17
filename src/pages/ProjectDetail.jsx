import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/Json Folder/projects.json";
import "../assets/style/project-details.css";

export default function ProjectDetail() {
  const [projectDetails, setProjectDetails] = useState({});
  const [baseimageLink, setBaseImageLink] = useState("");
  const [activeImage, setActiveImage] = useState("image_1"); // Start with the first image
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      let projects = projectsData;
      let project = projects.find((project) => project.id === id);
      setProjectDetails(project);
      console.log(project);
      setBaseImageLink(project.image_1);
    }
  }, [id]);

  const handleImageChange = (imageKey) => {
    setBaseImageLink(projectDetails[imageKey]);
    setActiveImage(imageKey);
  };

  return (
    <div className="project-detail-page">
      <div className="project-detail-content">
        <div className="project-detail-images">
          <div className="main-image">
            <img src={baseimageLink} alt={projectDetails.title} />
          </div>
          <div className="images">
            <img
              src={projectDetails.image_1}
              alt={projectDetails.title}
              className={activeImage === "image_1" ? "active" : ""}
              onClick={() => handleImageChange("image_1")}
            />
            <img
              src={projectDetails.image_2}
              alt={projectDetails.title}
              className={activeImage === "image_2" ? "active" : ""}
              onClick={() => handleImageChange("image_2")}
            />
            <img
              src={projectDetails.image_3}
              alt={projectDetails.title}
              className={activeImage === "image_3" ? "active" : ""}
              onClick={() => handleImageChange("image_3")}
            />
          </div>
        </div>
        <div className="project-detail-info">
          <h1 className="project-detail-title">{projectDetails.title}</h1>
          <p className="project-detail-description">
            {projectDetails.description}
          </p>
          <div className="project-detail-technology-stack">
            <p>Technology Stack:</p>
            <ul>
              {projectDetails.technologyStack?.map((stack, index) => (
                <li key={index} className="technology-stack-item">
                  {stack}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
