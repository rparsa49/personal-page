import React from "react";
import ProjectCarousel from './ProjectCarousel';

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-800">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A carousel of some of my most recent projects that display my
            various technical skills. Links to Github are provided if you would
            like to peruse the code!
          </p>
          <div className="h-12" />
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
}
