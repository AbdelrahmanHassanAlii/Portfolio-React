import React from "react";
import { Link } from "react-router-dom";

export default function SocialIcon({ icon, link }) {
  return (
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <button className="iconButton">
        <span className="iconContainer">{icon}</span>
        <span className="back-ground"></span>
      </button>
    </Link>
  );
}
