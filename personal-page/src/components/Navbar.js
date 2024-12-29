import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlus,
  FaHome,
  FaBook,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-20">
      {/* FAB Button */}
      <motion.button
        onClick={toggleMenu}
        className="bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 p-4 rounded-full shadow-lg focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaPlus className="text-gray-800" />
        </motion.div>
      </motion.button>

      {/* Expandable Menu */}
      {isOpen && (
        <motion.div
          className="flex flex-col items-center space-y-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.a
            href="#about"
            className="bg-white p-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaHome className="text-gray-800" />
          </motion.a>
          <motion.a
            href="#education"
            className="bg-white p-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaBook className="text-gray-800" />
          </motion.a>
          <motion.a
            href="#projects"
            className="bg-white p-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaProjectDiagram className="text-gray-800" />
          </motion.a>
          {/* <motion.a
            href="#skills"
            className="bg-white p-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaUser className="text-gray-800" />
          </motion.a> */}
        </motion.div>
      )}
    </div>
  );
}
