import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/about-me-links.css";

export default function AboutMeLinks() {
  return (
    <div className="about-me-links">
      <Link to="/aboutme/about">About</Link>
      <Link to="/aboutme/skills">Skills</Link>
      <Link to="/aboutme/services">Services</Link>
      {/* <Link to="/aboutme/education">Education</Link>
      <Link to="/aboutme/award">Award</Link> */}
    </div>
  );
}
