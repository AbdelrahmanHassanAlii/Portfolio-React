import React from "react";
import "../assets/style/social.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

export default function Social() {
  return (
    <div className="social-icons">
      <SocialIcon
        icon={<FaFacebookF color="#1877F2" />}
        link={"https://www.facebook.com/profile.php?id=100015463386226"}
      />
      <SocialIcon
        icon={<FaLinkedinIn color="#0077B5" />}
        link={
          "https://www.linkedin.com/in/abdelrahman-hassan-b09b80250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bf4hU2ZwhSB6eg8sfKk0Olg%3D%3D"
        }
      />
      <SocialIcon
        icon={<FaGithub color="#fff" />}
        link={"https://github.com/AbdelrahmanHassanAlii"}
      />
    </div>
  );
}
