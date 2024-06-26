import React from "react";
import About from "../components/About";
import AboutMeLinks from "../components/AboutMeLinks";
import { Route, Routes } from "react-router-dom";
import Skills from "../components/Skills";
import '../assets/style/about-me.css';
import Services from "../components/Services";
import SectionHeader from "../components/SectionHeader";


export default function AboutMe() {
  return (
    <div className="about-me-section narrow-container" id="about">
      <SectionHeader title="About Me" subtitle="Get to know me" />
      <AboutMeLinks />
      <Routes>
        <Route path="/" element={<About />} exact />
        <Route path="/Portfolio-React" element={<About />} exact />
        <Route path="/aboutme/about" element={<About />} exact />
        <Route path="/aboutme/skills" element={<Skills />} exact />
        <Route path="/aboutme/services" element={<Services />} exact />
      </Routes>
    </div>
  );
}
