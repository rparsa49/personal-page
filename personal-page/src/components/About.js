import React from "react";
import me from "./pfp.png";
import { SocialIcon } from "react-social-icons";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md: pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">
            Hey! I'm Roya!
            <br className="hidden lg:inline-block" />I am a Junior Computer
            Science Student at Adelphi University.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm an Afghan American with dreams of becoming a software engineer.
            Presently, I work as a software engineer intern at North Atlantic
            Industries in Bohemia, NY. I have previous experience as a mobile
            frontend developer and have been both a coding instructor and a TA as well! When
            I'm not coding, you can find me on the saddle or behind a good book!
          </p>
          <div className="flex justify-center">
            <SocialIcon url="https://www.linkedin.com/in/roya-parsa-715b42234/" />
            <div className="w-5"></div>
            <SocialIcon url="https://github.com/rparsa49" />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center h-100 w-100 drop-shadow-lg"
            alt="roya"
            src={me}
          />
        </div>
      </div>
    </section>
  );
}
