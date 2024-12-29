import React, { useState } from "react";
import { experiences } from "../data";
import { motion } from "framer-motion";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-purple-300 via-pink-200 to-red-200 py-10"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            My Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700">
            Take a walk down memory lane with me to see how far I've come! 📍
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="absolute w-1 bg-gradient-to-b from-pink-300 via-pink-400 to-red-400 h-full left-1/2 transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`w-full max-w-3xl mb-8 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } items-center relative`}
              onClick={() => setSelectedExperience(index)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className={`absolute w-8 h-8 bg-white rounded-full border-2 border-gradient-to-b from-pink-400 to-red-400 flex items-center justify-center z-10 ${
                  index % 2 === 0
                    ? "left-1/2 -translate-x-1/2"
                    : "right-1/2 translate-x-1/2"
                }`}
              >
                <div className="bg-pink-400 w-4 h-4 rounded-full"></div>
              </div>
              <div
                className={`bg-white p-6 rounded-lg shadow-lg w-5/12 ${
                  index % 2 === 0 ? "ml-10 text-left" : "mr-10 text-right"
                }`}
              >
                <h2 className="text-gray-800 text-lg font-bold">{exp.role}</h2>
                <p className="text-sm text-gray-600">
                  {exp.title} | {exp.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
