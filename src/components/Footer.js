import React from "react";
import "../assets/style/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <Link
          className="icon"
          style={{ color: "#1877F2" }}
          to="https://www.facebook.com/profile.php?id=100015463386226"
        >
          <div class="icon">
            <FaFacebookF />
          </div>
        </Link>

        <Link
          className="icon"
          style={{ color: "#0077B5" }}
          to="https://www.linkedin.com/in/abdelrahman-hassan-b09b80250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bf4hU2ZwhSB6eg8sfKk0Olg%3D%3D"
        >
          <div class="icon">
            <FaLinkedinIn />
          </div>
        </Link>

        <Link
          className="icon"
          style={{ color: "black" }}
          to="https://github.com/AbdelrahmanHassanAlii"
        >
          <div class="icon">
            <FaGithub />
          </div>
        </Link>
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
