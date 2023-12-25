import React from "react";
import { skills } from "../data";

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center p-2 md:p-4">
          {React.createElement(skill.icon, {
            style: { color: skill.color },
            className:
              "w-12 h-12 mb-1 md:mb-2 transform transition duration-500 hover:scale-125 hover:0 flex justify-center items-center",
          })}
          <span>{skill.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
