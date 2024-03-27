import React from "react";
import About from "../components/About";
import AboutMeLinks from "../components/AboutMeLinks";

export default function AboutMe() {
  return (
    <div className="narrow-container">
      <AboutMeLinks />
      <About />
    </div>
  );
}
