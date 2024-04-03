import React from "react";
import "../assets/style/project-item.css";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

export default function ProjectItem({
  type,
  imageName,
  title,
  description,
  status,
  codeLink,
  demoLink,
}) {
  return (
    <div
      className={`project-item ${
        type === "even" ? "reverse" : ""
      } ${imageName}`}
      style={{
        backgroundSize: "cover",
      }}
    >
      <div className="project-overlay"></div>
      <div className="project-text">
        <h3 className="project-title">{title}</h3>
        {status === "completed" ? (
          <div className="project-status-container">
            <p className="project-status"> Status: Completed</p>
            <FaCheckCircle className="check-icon" />
          </div>
        ) : (
          <div className="project-status-container">
            <p className="project-status">Status: In Progress</p>
            <FaGear className="gear-icon spinning" />
          </div>
        )}
        <p className="project-desc">{description}</p>
        <div className="project-buttons">
          <Link
            to={demoLink}
            className="project-button"
            target="_blank"
            rel="noreferrer"
          >
            <TbWorld fontSize={"1.5rem"} style={{ marginRight: "5px" }} />
            Demo
          </Link>

          <Link
            to={codeLink}
            className="project-button"
            target="_blank"
            rel="noreferrer"
          >
            <FaCode fontSize={"1.5rem"} style={{ marginRight: "5px" }} />
            Code
          </Link>
        </div>
      </div>
    </div>
  );
}
