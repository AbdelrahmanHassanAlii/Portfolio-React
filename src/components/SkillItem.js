import React from "react";
import "../assets/style/skill-item.css";

export default function SkillItem({ skillName, skillLevel }) {
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
            width: `${skillLevel}`,
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}
