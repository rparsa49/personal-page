import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { FaHourglassEnd } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="bg-zinc-800">
      <div className="h-5"></div>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300 text-center">
        My Experience
      </h1>
      <div className="experience">
        <VerticalTimeline lineColor="#9ca3af">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#9ca3af", color: "#fff" }}
            icon={<FaGraduationCap />}
            date="Aug. 2021 - Dec. 2022"
          >
            <h3>Stony Brook University</h3>
            <p>Bachelor of Science in Computer Science</p>
            <ul>• Women in Science and Engineering (WISE) Honors Program</ul>
            <ul>• Dean's List (All Semesters)</ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#9ca3af", color: "#fff" }}
            icon={<FaBriefcase />}
            date="Jun. 2022 - Oct. 2022"
          >
            <h3>Coding Minds Academy</h3>
            <p>Coding Instructor</p>
            <ul>• Lead classes in Java, Python, and Flutter to students.</ul>
            <ul>• Assigned homework.</ul>
            <ul>• Monitored student progress.</ul>
            <ul>
              • Aided students in completion of a final project in the end of a
              course.
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#9ca3af", color: "#fff" }}
            icon={<FaBriefcase />}
            date="Dec. 2022 - Apr. 2023"
          >
            <h3>Pure Match</h3>
            <p>Mobile Frontend Developer Intern</p>
            <ul>
              • Utilized Dart and Flutter to maintain the application across the
              App Store and Google Play Store.
            </ul>
            <ul>
              • Met with team of 5 2x a week to discuss current progress and
              future plans for growth.
            </ul>
            <ul>
              • Implemented redesigned features to improve user experience
              throughout the app.
            </ul>
            <ul>
              • Supplied bug fixes and worked with other developers to produce
              new features for users.
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            iconStyle={{ background: "#9ca3af", color: "#fff" }}
            icon={<FaGraduationCap />}
            date="Dec. 2022 - Present"
          >
            <h3>Adelphi University</h3>
            <p>Bachelor of Science in Computer Science (GPA: 4.0)</p>
            <ul>• Transferred from Stony Brook University</ul>
            <ul>• Honors College</ul>
            <ul>• Minor in Statistics and Data Analytics</ul>
            <ul>• Deans List (All Semesters)</ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#9ca3af", color: "#fff" }}
            icon={<FaBriefcase />}
            date="Jan. 2023 - Dec 2023"
          >
            <h3>Adelphi University</h3>
            <p>Undergraduate TA (Math/CS Department)</p>
            <ul>
              • TA'ed for two courses across two semesters, CSC 171 and MTH 225
              with a total of 60 students across both courses.
            </ul>
            <ul>
              • Assisted professor in leading weekly laboratory classes for 30
              students, offering individualized guidance on Python code
              debugging and semester-long support.
            </ul>
            <ul>
              • Swiftly graded and provided feedback for all students on a
              weekly basis while collaborating with the professor for future
              assignment plans.
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#9ca3af", color: "#fff" }}
            icon={<FaBriefcase />}
            date="June 2023 - Present"
          >
            <h3>North Atlantic Industries</h3>
            <p>Software Engineer Intern</p>
            <ul>
              • Created an automated testing script and pipeline for the Vx
              Works 6.9 and 7 SSK using Python and Jenkins. Tests the SSK
              against both VSB and Image creation and compilation.
            </ul>
            <ul>
              • Led the design and implementation of two full-stack
              React/Tailwind applications, specifically tailored for in-house
              AI-powered projects.
            </ul>
            <ul>
              • Developed a pipelined parser for the SSK1 and SSK2 with Python
              to populate an internal function database, containing function
              names, return types, parameters, and function code with the use of
              the pyodbc library.
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#9ca3af", color: "#fff" }}
            icon={<FaHourglassEnd />}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}
