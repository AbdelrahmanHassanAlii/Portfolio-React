import React from "react";
import About from "../components/About";
import AboutMeLinks from "../components/AboutMeLinks";
import { Route, Routes } from "react-router-dom";
import Skills from "../components/Skills";

export default function AboutMe() {
  return (
    <div className="narrow-container" id="about">
      <AboutMeLinks />
      <Routes>
        <Route path="/" element={<About />} exact />
        <Route path="/aboutme/about" element={<About />} exact />
        <Route path="/aboutme/skills" element={<Skills />} exact />
      </Routes>
    </div>
  );
}
