import React from "react";
import { projects } from "../data";
import { FaGithub } from "react-icons/fa";

export default function ProjectCards() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-purple-300 via-pink-200 to-red-200 py-10"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
          My Projects
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700 mb-12">
          A showcase of some of my most recent projects that display my various
          technical skills. Links to Github are provided if you would like to
          peruse the code!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                className="rounded-t-lg mb-4 w-full h-40 object-cover"
                src={project.image}
                alt={project.title}
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-base inline-flex items-center text-white py-2 px-4 bg-gradient-to-r from-purple-300 via-pink-200 to-red-200  rounded"
              >
                <FaGithub size={30} className="mr-2" /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
