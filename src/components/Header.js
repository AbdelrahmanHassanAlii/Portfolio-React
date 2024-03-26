import React from "react";
import "../assets/style/header.css";
import "../assets/style/responsive.css";
import CvButton from "./CvButton";
import { FaBars } from "react-icons/fa";

function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}

export default function Header() {
  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Hassan</p>
        <span>.</span>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">
              Home
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">
              About
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#contact" className="nav-link">
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
