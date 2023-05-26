import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data';

const ProjectCarousel = () => {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={false}
        transitionTime={500}
        emulateTouch={true}
        swipeable={true}
        showArrows={false}
      >
        {projects.map((project, index) => (
          <div key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto filter brightness-75"
            />
            <div className="legend text-white text-center mt-4">
              <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">{project.title}</h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">{project.description}</p>
              <p className="text-base text-gray-400 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">{project.subtitle}</p>
              <a
                href={project.link}
                className="text-base inline-flex items-center text-white py-2 px-4"
              >
                <i className="fab fa-github mr-2"> <FaGithub size={30}/> </i>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    );
  };
  
  export default ProjectCarousel;