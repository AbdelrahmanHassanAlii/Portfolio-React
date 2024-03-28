import React from "react";
import "../assets/style/skill-item.css";

export default function SkillItem({ skillName, skillLevel }) {
  // Parse the skillLevel string to a percentage value
  const percentage = parseFloat(skillLevel);

  return (
    <div className="skill-item">
      <div className="skill-name-container">
        <div className="skill-name">{skillName}</div>
        <div className="level">{skillLevel}</div>
      </div>
      <div className="skill-level-container">
        <div
          className="skill-level"
          style={{
            "--skill-width": percentage,
          }}
          role="progressbar"
          data-aos="zoom-in-right"
          data-aos-delay="100"
        ></div>
      </div>
    </div>
  );
}
