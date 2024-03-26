import React from "react";
import "../assets/style/cv-button.css";
import CV from "../data/Pdfs/Abdelrahman Hassan CV.pdf";

export default function CvButton() {
  return (
    <a
      href={CV}
      target="_blank"
      rel="noreferrer"
      download="Abdelrahman Hassan CV.pdf"
    >
      <button>Download CV</button>
    </a>
  );
}
