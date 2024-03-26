import React from "react";
import "../assets/style/social.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Social() {
  return (
    <div className="social-icons">
      <button className="iconButton">
        <span className="iconContainer">
          <FaFacebookF color="#1877F2" fontSize={"20px"} />
        </span>
        <span className="back-ground"></span>
      </button>

      <button className="iconButton">
        <span className="iconContainer">
          <FaLinkedinIn color="#0077B5" fontSize={"20px"} />
        </span>
        <span className="back-ground"></span>
      </button>

      <button className="iconButton">
        <span className="iconContainer">
          <FaGithub color="#fff" fontSize={"20px"} />
        </span>
        <span className="back-ground"></span>
      </button>
    </div>
  );
}
