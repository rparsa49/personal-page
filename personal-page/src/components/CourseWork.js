import React from "react";
import { courses, upcomingcourses } from "../data";
import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";

export default function CourseWork() {
  return (
    <section id="coursework" className="bg-zinc-800">
      <div className="h-14" />
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Completed Course Work
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A collection of my recent undergraduate coursework, combined from
            both Stony Brook University and Adelphi University.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {courses.map((course) => (
            <div key={course} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-300 rounded-xl flex p-4 h-full items-center hover:bg-black">
                <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-gray-500">
                  {course}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="h-6" />
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            In Progress Course Work
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            A list of courses I am currently in progress completing at Adelphi
            University to pursue my undergraduate Computer Science career.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {upcomingcourses.map((course) => (
            <div key={course} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-300 rounded-xl flex p-4 h-full items-center hover:bg-black">
                <FaPlayCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-gray-500">
                  {course}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
