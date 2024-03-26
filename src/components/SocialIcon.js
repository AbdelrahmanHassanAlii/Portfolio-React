import React from "react";

export default function SocialIcon({ icon }) {
  return (
    <button className="iconButton">
      <span className="iconContainer">
        {icon}
      </span>
      <span className="back-ground"></span>
    </button>
  );
}
