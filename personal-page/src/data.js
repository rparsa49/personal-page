import { DiDart, DiJava } from "react-icons/di";
import { SiBootstrap, SiC, SiCplusplus, SiCss3, SiFlask, SiFlutter, SiHtml5, SiJavascript, SiPython, SiR, SiReact, SiSpringboot, SiTailwindcss } from "react-icons/si";

export const courses = [
    "Object Oriented Programming",
    "Data Structures",
    "Foundations of Computer Science",
    "Principles of Programming Languages",
    "Algorithms and Complexities",
    "Statistics and Data Analytics"
];

export const upcomingcourses = [
    "Database Management Systems",
    "Software Engineering",
    "C and C++ Programming"
];


export const skills = [
  {
    title: "Python",
    icon: SiPython,
    color: "#d0e384"
  },
  {
    title: "Java",
    icon: DiJava,
    color: "#6299E0"
  },
  {
    title: "C",
    icon: SiC,
    color: "#3565A3"
  },
  {
    title: "C++",
    icon: SiCplusplus,
    color: "#84c0e3"
  },
  {
    title: "HTML",
    icon: SiHtml5,
    color: "#F47744"
  },
  {
    title: "CSS",
    icon: SiCss3,
    color: "#44BFF4"
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
    color: "#FEEB17"
  },
  {
    title: "Dart",
    icon: DiDart,
    color: "#17FEBE"
  },
  {
    title: "R",
    icon: SiR,
    color: "#3666BB"
  },
  {
    title: "Flask",
    icon: SiFlask,
    color: "#FFFFFF"
  },
  {
    title: "Flutter",
    icon: SiFlutter,
    color: "#6FCCFF"
  },
  {
    title: "Bootstrap",
    icon: SiBootstrap,
    color: "#5E31AA"
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
    color: "#65B7E9"
  },
  {
    title: "Springboot",
    icon: SiSpringboot,
    color: "#12BC4F"
  },
  {
    title: "React",
    icon: SiReact,
    color: "#73E8EA"
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
        title: "Secret Chat",
        subtitle: "Python, Flask, SocketIO, HTML/CSS",
        description: "A web application for local chatting over a LAN network.",
        image: process.env.PUBLIC_URL + "/secretchat.png",
        link: "https://github.com/rparsa49/secret_chat",
    },
    {
        title: "Portfolio Page",
        subtitle: "React, Tailwind, HTML5",
        description: "A virtual portfolio I created for myself to display my work and acheivements. This was also my first major delve into using React!",
        image: process.env.PUBLIC_URL + "/portfolio.png",
        link: "https://github.com/rparsa49/personal-page",
    },
];