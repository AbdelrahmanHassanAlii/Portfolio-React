import React from "react";
import aboutImage from "../assets/images/about.c07f3d2b.png";
import "../assets/style/about.css";
import CvButton from "./CvButton";

export default function About() {
  return (
    <div className="about-section about-section">
      <div className="about-image">
        <img src={aboutImage} alt="about" />
      </div>
      <div className="about-text">
        <h1 className="about-title">I create products not just art</h1>
        <p className="about-text-p">
          I'm a Full Stack Web Developer with a passion for creating and
          developing web applications. I am currently a student at the
          University of helwan at Egypt. I am always looking for new and
          exciting projects to work on. If you like what you see and want to get
          in touch, please don't hesitate to contact me.
        </p>
        <div className="about-cv-button">
          <CvButton />
        </div>
      </div>
    </div>
  );
}
