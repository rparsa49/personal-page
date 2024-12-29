import React from "react";
import { skills } from "../data";

export default function SkillsGrid() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-purple-300 via-pink-200 to-red-200 py-10"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
          My Skills
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700 mb-12">
          A collection of technical skills that I have gained throughout my
          undergraduate and professional career.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 transform transition-transform duration-300 hover:scale-110"
            >
              {React.createElement(skill.icon, {
                style: { color: "#f062a0" },
                className: "w-14 h-14 mb-2",
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
