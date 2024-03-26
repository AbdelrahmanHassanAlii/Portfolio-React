import React from "react";
import "../assets/style/social.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

export default function Social() {
  return (
    <div className="social-icons">
      <SocialIcon icon={<FaFacebookF color="#1877F2" />} />
      <SocialIcon icon={<FaLinkedinIn color="#0077B5" />} />
      <SocialIcon icon={<FaGithub color="#fff" />} />
    </div>
  );
}
