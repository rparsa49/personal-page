import React from "react";
import { coursesData, upcomingcoursesData } from "../data";
import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";

const getGradeColor = (grade) => {
  switch (grade) {
    case "A+":
    case "A":
    case "A-":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

export default function CourseWork() {
  return (
    <section id="coursework" className="bg-zinc-800">
      <div className="h-14" />
      <div className="container px-5 py-10 mx-auto">
        {/* Completed Course Work */}
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
          {coursesData.map((course) => (
            <div key={course.courseCode} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-300 hover:bg-gray-100 rounded-xl flex p-4 h-full items-center relative">
                <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />
                <div>
                  <span className="title-font font-medium text-gray-500">
                    {course.courseCode} | {course.title}
                  </span>
                  <div className="text-sm mt-1 mb-2">
                    <span
                      className={`rounded-full px-2 py-1 text-white text-xs ${getGradeColor(
                        course.grade
                      )}`}
                    >
                      {course.grade}
                    </span>
                    <span className="mx-2">|</span>
                    <span className="text-gray-600">{course.university}</span>
                  </div>
                  <p className="text-sm text-gray-600">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* In Progress Course Work */}
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
          {upcomingcoursesData.map((course) => (
            <div key={course.courseCode} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-300 hover:bg-gray-100 rounded-xl flex p-4 h-full items-center relative">
                <FaPlayCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />
                <div>
                  <span className="title-font font-medium text-gray-500">
                    {course.courseCode} | {course.title}
                  </span>
                  <div className="text-sm mt-1 mb-2">
                    <span
                      className={`rounded-full px-2 py-1 text-white text-xs ${getGradeColor(
                        course.grade
                      )}`}
                    >
                      {course.grade}
                    </span>
                    <span className="mx-2">|</span>
                    <span className="text-gray-600">{course.university}</span>
                  </div>
                  <p className="text-sm text-gray-600">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
