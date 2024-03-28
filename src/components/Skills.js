import React from "react";
import SkillItem from "./SkillItem";
import "../assets/style/skills.css";

export default function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-container">
        <div className="skills-list">
          <SkillItem skillName="HTML5" skillLevel="90%" />
          <SkillItem skillName="CSS3" skillLevel="90%" />
          <SkillItem skillName="JavaScript" skillLevel="80%" />
          <SkillItem skillName="React" skillLevel="90%" />
          <SkillItem skillName="WordPress" skillLevel="70%" />
          <SkillItem skillName="NodeJS" skillLevel="50%" />
          <SkillItem skillName="MySQL" skillLevel="50%" />
          <SkillItem skillName="Photoshop" skillLevel="50%" />
        </div>
      </div>
    </div>
  );
}
