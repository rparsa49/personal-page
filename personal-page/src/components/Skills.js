import React from "react";
import {skill} from "../data";
import SkillsGrid  from "./SkillsGrid";

export default function Skills() {
  return (
    <section id="skills" className="bg-zinc-800">
      <div className="containter px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My Skills
          </h1>
          <p className="text-base leading-relaxexd xl:w-2/4 lg:w-3/4 mx-auto">
            A list of technical skills I have gained throughout my undergraduate
            and professional career. I am in no way an expert (yet!) in these
            skills, but I am highly proficient and have various projects/work
            experience to demonstrate my abilities.
          </p>
          <div className="h-6" />
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}
