import React, { useEffect, useState } from "react";
import me from "./me.jpeg";
import { SocialIcon } from "react-social-icons";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className={`bg-zinc-900 text-gray-200 py-20 h-screen ${
        isVisible ? "animate-fade-in" : ""
      }`}
    >
      <div className="container mx-auto flex px-10 md:px-20 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-extrabold text-transparent text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 p-4">
            Hey, I'm Roya!
          </h1>
          <h3 className="font-extrabold text-transparent text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 p-4">
            I'm a Computer Science Junior at Adelphi University.
          </h3>
          <div className="mockup-code m-10">
            <pre data-prefix="$">
              <code>who is roya</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>An Afghan American with dreams of</code>
            </pre>
            <pre data-prefix="" className="text-warning">
              <code>becoming a software engineer.</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>Intern experience in the defense industry, mobile</code>
            </pre>
            <pre data-prefix="" className="text-warning">
              <code>development, and teaching experience.</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>Avid equestrian and reader!</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Scroll down to see some more about me!</code>
            </pre>
          </div>
          <div className="flex justify-center space-x-6">
            <SocialIcon
              url="https://www.linkedin.com/in/roya-parsa-715b42234/"
              className="w-8 h-8 transition-transform transform hover:scale-110"
            />
            <SocialIcon
              url="https://github.com/rparsa49"
              className="w-8 h-8 transition-transform transform hover:scale-110"
            />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pl-6">
          <img
            className={`object-cover object-center h-100 w-100 rounded-lg drop-shadow-lg ${
              isVisible ? "animate-fade-in" : ""
            }`}
            alt="roya"
            src={me}
          />
        </div>
      </div>
    </section>
  );
}
