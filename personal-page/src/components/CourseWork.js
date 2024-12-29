import React from "react";
import { coursesData, upcomingcoursesData } from "../data";

const getGradeColor = (grade) => {
  switch (grade) {
    case "A+":
    case "A":
    case "A-":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
};

export default function CourseWork() {
  return (
    <section
      id="coursework"
      className="bg-gradient-to-r from-purple-300 via-pink-200 to-red-200 py-10"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="container px-5 py-10 mx-auto">
        {/* Completed Course Work */}
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
            Completed Course Work
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700">
            A collection of my recent undergraduate coursework from both Stony
            Brook University and Adelphi University.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coursesData.map((course) => (
            <div
              key={course.courseCode}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div className="flex flex-col">
                <span className="font-medium text-gray-800">
                  {course.courseCode}
                </span>
                <span className="text-gray-600">{course.title}</span>
                <span className="text-gray-500 text-sm">
                  {course.university}
                </span>
              </div>
              <div
                className={`font-bold text-lg ${getGradeColor(course.grade)}`}
              >
                {course.grade}
              </div>
            </div>
          ))}
        </div>

        {/* In Progress Course Work */}
        <div className="h-16" />
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
            In Progress Course Work
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700">
            A list of courses I am currently completing at Adelphi University to
            pursue my undergraduate Computer Science career.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingcoursesData.map((course) => (
            <div
              key={course.courseCode}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div className="flex flex-col">
                <span className="font-medium text-gray-800">
                  {course.courseCode}
                </span>
                <span className="text-gray-600">{course.title}</span>
                <span className="text-gray-500 text-sm">
                  {course.university}
                </span>
              </div>
              <div className="font-bold text-lg text-yellow-500">
                In Progress
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
