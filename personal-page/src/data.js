import { DiDart, DiJava } from "react-icons/di";
import { SiBootstrap, SiMysql, SiPhp, SiC, SiCplusplus, SiCss3, SiFlask, SiFlutter, SiHtml5, SiJavascript, SiPython, SiR, SiReact, SiSpringboot, SiTailwindcss } from "react-icons/si";

export const coursesData = [
  {
    title: "Object Oriented Programming (Honors)",
    courseCode: "CSE 160",
    description:
      "Introduction to Object-Oriented Programming (OOP) concepts using Java. Topics include classes, objects, inheritance, polymorphism, and more.",
    grade: "A",
    university: "Stony Brook University",
  },
  {
    title: "Data Structures (Honors)",
    courseCode: "CSE 260",
    description:
      "Comprehensive study of common data structures such as arrays, linked lists, trees, and graphs. Includes hands-on programming and implementation.",
    grade: "A",
    university: "Stony Brook University",
  },
  {
    title: "Foundations of Computer Science (Honors)",
    courseCode: "CSE 150",
    description:
      "Fundamental course covering computer science principles, algorithms, and problem-solving techniques.",
    grade: "A",
    university: "Stony Brook University",
  },
  {
    title: "Algorithms and Complexities",
    courseCode: "CSC 344",
    description:
      "In-depth exploration of algorithms, their analysis, and complexity. Focus on algorithm design and optimization.",
    grade: "A",
    university: "Adelphi University",
  },
  {
    title: "Principles of Programming Languages",
    courseCode: "CSC 272",
    description:
      "Study of programming language paradigms, syntax, and semantics. Explore different programming language concepts.",
    grade: "A",
    university: "Adelphi University",
  },
  {
    title: "Statistics and Data Analytics",
    courseCode: "MTH 225",
    description:
      "Introduction to statistics and data analysis techniques, including data visualization and hypothesis testing. Completed an independent research project and performed hypothesis testing, data analysis, and 20 page report with code in R.",
    grade: "A",
    university: "Adelphi University",
  },
  {
    title: "Database Management Systems",
    courseCode: "CSC 263",
    description:
      "Explore the design and management of database systems, including SQL and relational database concepts which culminated in a final full-stack web application project.",
    grade: "A",
    university: "Adelphi University",
  },
  {
    title: "Software Engineering",
    courseCode: "CSC 440",
    description:
      "In-depth course covering software engineering principles, methodologies, and practices. Focus on software development life cycle through the completion of a semester-long project.",
    grade: "A+",
    university: "Adelphi University",
  },
  {
    title: "C and C++ Programming",
    courseCode: "CSC 301",
    description:
      "Introduction to the C and C++ programming languages, including syntax, data types, and basic programming concepts.",
    grade: "In Progress",
    university: "Adelphi University",
  },
];

export const upcomingcoursesData = [
  {
    title: "Operating Systems",
    courseCode: "CSC 453",
    description:
      "In-depth exploration of operating system principles, processes, memory management, and file systems.",
    grade: "In Progress",
    university: "Adelphi University",
  },
  {
    title: "Differential Equations",
    courseCode: "MTH 244",
    description:
      "Introduction to differential equations and their applications in science and engineering.",
    grade: "In Progress",
    university: "Adelphi University",
  },
  {
    title: "Linear Algebra",
    courseCode: "MTH 253",
    description:
      "Introduction to linear algebra, including vector spaces, matrices, and linear transformations.",
    grade: "In Progress",
    university: "Adelphi University",
  },
];



export const skills = [
  {
    title: "Python",
    icon: SiPython,
    color: "#d0e384",
  },
  {
    title: "Java",
    icon: DiJava,
    color: "#6299E0",
  },
  {
    title: "C",
    icon: SiC,
    color: "#3565A3",
  },
  {
    title: "C++",
    icon: SiCplusplus,
    color: "#84c0e3",
  },
  {
    title: "HTML",
    icon: SiHtml5,
    color: "#F47744",
  },
  {
    title: "CSS",
    icon: SiCss3,
    color: "#44BFF4",
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
    color: "#FEEB17",
  },
  {
    title: "Dart",
    icon: DiDart,
    color: "#17FEBE",
  },
  {
    title: "R",
    icon: SiR,
    color: "#3666BB",
  },
  {
    title: "Flask",
    icon: SiFlask,
    color: "#FFFFFF",
  },
  {
    title: "Flutter",
    icon: SiFlutter,
    color: "#6FCCFF",
  },
  {
    title: "Bootstrap",
    icon: SiBootstrap,
    color: "#5E31AA",
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
    color: "#65B7E9",
  },
  {
    title: "Springboot",
    icon: SiSpringboot,
    color: "#12BC4F",
  },
  {
    title: "React",
    icon: SiReact,
    color: "#73E8EA",
  },
  {
    title: "PHP",
    icon: SiPhp,
    color: "#702963",
  },
  {
    title: "MySQL",
    icon: SiMysql,
    color: "#3C7ED3",
  },
];

export const projects = [
    {
        title: "Host4Me",
        subtitle: "Flutter, Python, Flask, Firebase",
        description: "A Flutter app to allow international students to find suitable host families. Hosted on App Store and Google Play.",
        image: process.env.PUBLIC_URL + "/host4me.png",
        link: "https://github.com/rparsa49/host4me",
    },
    {
        title: "Syllabuddy",
        subtitle: "React, Flask, Tailwind, MySQL",
        description: "A web application to help students with making informed course descisions. CSC 440 Final Project.",
        image: process.env.PUBLIC_URL + "/syllabuddy.png",
        link: "https://github.com/rparsa49/syllabuddy",
    },
    {
        title: "PSIRT",
        subtitle: "HTML/CSS, PHP, MySQL",
        description: "An online system to allow users to connect with pet sitters and view status reports. Final project from CSC 263.",
        image: process.env.PUBLIC_URL + "/psirt.png",
        link: "https://github.com/rparsa49/PSIRT",
    },
];