import React from "react";
import nyproton from "./nyproton.jpeg";

const Research = () => {
  return (
    <section
      id="research"
      className="bg-gradient-to-r from-purple-300 via-pink-200 to-red-200 py-10"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            My Research
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black">
            A showcase of my research projects that highlight my contributions
            to the field.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full md:w-2/3">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={nyproton}
                alt="Research Image"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gray-800 bg-opacity-75 text-white">
                <h2 className="text-xl font-semibold mb-2">
                  Optimizing Dual Energy CT Models for Accurate Proton Stopping
                  Power Estimation in Pediatric Cancer Therapy
                </h2>
                <p className="leading-relaxed mb-4 text-base">
                  My senior thesis focuses on improving the accuracy of proton
                  stopping power estimation using dual energy CT models,
                  particularly in pediatric cancer therapy. This research is
                  conducted in cooperation with the New York Proton Center. My
                  research advisor is Dr. Sixia Chen from the Computer Science
                  department at Adelphi University. Additionally, I was awarded
                  the prestigious Honors College Summer Research Fellowship to
                  pursue these studies.
                </p>
                <p className="text-base text-gray-400">
                  Ongoing Research, Senior Thesis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
