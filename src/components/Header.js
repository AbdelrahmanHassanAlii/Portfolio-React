import React, { useEffect, useState } from "react";
import "../assets/style/header.css";
import "../assets/style/responsive.css";
import CvButton from "./CvButton";
import { FaBars } from "react-icons/fa";

export default function Header() {

  function myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
  }

  const [activeLink, setActiveLink] = useState(""); // State to store the active link

  useEffect(() => {
    // Function to handle intersection observer callback
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    // Create an intersection observer instance
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Get all sections with ids
    const sections = document.querySelectorAll("div[id]");

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Hassan</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a
              href="#home"
              className={`nav-link ${
                activeLink === "home" ? "active-link" : ""
              }`}
            >
              Home
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#about"
              className={`nav-link ${
                activeLink === "about" ? "active-link" : ""
              }`}
            >
              About
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#projects"
              className={`nav-link ${
                activeLink === "projects" ? "active-link" : ""
              }`}
            >
              Projects
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#contact"
              className={`nav-link ${
                activeLink === "contact" ? "active-link" : ""
              }`}
            >
              Contact
            </a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <CvButton />
      </div>
      <div className="nav-menu-btn">
        <i onClick={myMenuFunction}>
          <FaBars />
        </i>
      </div>
    </nav>
  );
}
