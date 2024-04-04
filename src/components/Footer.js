import React from "react";
import "../assets/style/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div class="top-footer">
        <p>Abdelrahman Hassan .</p>
      </div>
      <div class="middle-footer">
        <ul class="footer-menu">
          <li class="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li class="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li class="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li class="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="footer-social-icons">
        <div class="icon">
          <FaFacebookF />
        </div>
        <div class="icon">
          <FaLinkedinIn />
        </div>
        <div class="icon">
          <FaGithub />
        </div>
      </div>
      <div class="bottom-footer" style={{ textAlign: "center" }}>
        <p class="copyright">Copyright © 2024. All rights reserved.</p>
        <p class="design-by">
          Designed with 💜 by{" "}
          <span className="my-name">Abdelrahman Hassan</span>
        </p>
      </div>
    </footer>
  );
}
