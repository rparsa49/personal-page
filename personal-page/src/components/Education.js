import React from "react";
import adelphiImage from "./adelphi.jpeg";
import { education } from "../data";
import { motion } from "framer-motion";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, delay: 0.3 },
    },
  };

  return (
    <section
      id="education"
      className="bg-gradient-to-r from-purple-300 via-pink-200 to-red-200 py-10"
      style={{ fontFamily: "'Montserrat', sans-serif" }} // Apply the font here
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ fontFamily: "'Montserrat', sans-serif" }} // Apply the font here
          >
            My Education at Adelphi University
          </motion.h1>
          <motion.p
            className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ fontFamily: "'Montserrat', sans-serif" }} // Apply the font here
          >
            Dive into my academic experiences, accomplishments, and the
            knowledge I've gained during my time at Adelphi University.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ fontFamily: "'Montserrat', sans-serif" }} // Apply the font here
        >
          <div className="relative bg-white bg-opacity-70 p-8 rounded-lg shadow-lg hover:bg-opacity-80 transition duration-300 ease-in-out">
            <img
              src={adelphiImage}
              alt="Adelphi University"
              className="w-full h-48 object-cover object-center rounded-t mb-6"
            />
            <h2 className="text-gray-800 text-lg title-font font-medium mb-2">
              {education.university}
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-2">
              {education.degree}
            </p>
            <p className="text-base leading-relaxed text-gray-500 mb-4">
              {education.dates}
            </p>
            <ul className="leading-relaxed text-gray-700">
              {education.details.map((detail, index) => (
                <li key={index} className="mb-2">
                  • {detail}
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            className="relative bg-white bg-opacity-70 p-8 rounded-lg shadow-lg hover:bg-opacity-80 transition duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-gray-800 text-lg title-font font-medium mb-2">
              Highlights & Achievements
            </h2>
            <ul className="leading-relaxed text-gray-700">
              {education.achievements.map((achievement, index) => (
                <li key={index} className="mb-4">
                  • {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
