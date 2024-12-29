import React, { useEffect, useState } from "react";
import me from "./me.jpeg";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center bg-gray-100"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <motion.div
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
        >
          <h1
            className="font-extrabold text-6xl lg:text-8xl mb-4"
            style={{
              background:
                "linear-gradient(to right, #D8B4FE, #FBCFE8, #FECDD3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hey, I'm Roya! 👋🏻
          </h1>
          <h3
            className="font-bold text-3xl lg:text-4xl mb-6"
            style={{
              background:
                "linear-gradient(to right, #D8B4FE, #FBCFE8, #FECDD3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Computer Science Senior at Adelphi University
          </h3>
          <p className="text-lg lg:text-xl text-gray-700 mb-8">
            Passionate about computational science, ML/AI, and all things research.
          </p>
          <div className="flex space-x-6">
            <SocialIcon
              url="https://www.linkedin.com/in/roya-parsa-715b42234/"
              className="w-8 h-8 transition-transform transform hover:scale-110"
              style={{ transition: "transform 0.3s ease-in-out" }}
            />
            <SocialIcon
              url="https://github.com/rparsa49"
              className="w-8 h-8 transition-transform transform hover:scale-110"
              style={{ transition: "transform 0.3s ease-in-out" }}
            />
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img
            className="object-cover object-center rounded-full w-96 h-96 shadow-lg"
            src={me}
            alt="Roya"
          />
        </motion.div>
      </div>
    </section>
  );
}
