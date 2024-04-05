import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/about-me-links.css";

export default function AboutMeLinks() {
  const [activeLink, setActiveLink] = useState("/aboutme/about");

  const handleClick = (to) => {
    setActiveLink(to);
  };

  return (
    <div className="about-me-links">
      <Link
        to="/aboutme/about"
        className={activeLink === "/aboutme/about" ? "active" : ""}
        onClick={() => handleClick("/aboutme/about")}
      >
        About
      </Link>
      <Link
        to="/aboutme/skills"
        className={activeLink === "/aboutme/skills" ? "active" : ""}
        onClick={() => handleClick("/aboutme/skills")}
      >
        Skills
      </Link>
      <Link
        to="/aboutme/services"
        className={activeLink === "/aboutme/services" ? "active" : ""}
        onClick={() => handleClick("/aboutme/services")}
      >
        Services
      </Link>
    </div>
  );
}
