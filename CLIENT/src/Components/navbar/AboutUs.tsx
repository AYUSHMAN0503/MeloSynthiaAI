import React, { useState } from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons from the react-icons library
import TeamMembers from '../TeamMembers';
import {motion} from "framer-motion"
import Animatedpage from '../Animatedpage';
import { LinearGradient } from 'react-text-gradients';
const AboutUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % TeamMembers.length);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + TeamMembers.length) % TeamMembers.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Animatedpage>
      <div className="text-white text-center mb-8 mt-8">
          <h2 className="text-4xl font-bold"><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Meet Our Team - WEB 3 Sailors</LinearGradient></h2>
           <p className="mt-2">A talented group of individuals who are building awesome things.</p>
        </div>
    
        <section className="align items-end py-10">
      <div className="container mx-auto">
           <div className="flex items-center justify-center">
          <button
            onClick={handlePrevClick}
            className="mr-4 text-white hover:text-gray-300 text-3xl transition-transform transform hover:-translate-x-2"
          >
            &lt;
          </button>

          {/* Display Team Member Card */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md w-96"
            whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
           
            <img
              src={TeamMembers[activeIndex].imageUrl}
              alt={TeamMembers[activeIndex].name}
              className="mx-auto h-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold flex items-center">
              {TeamMembers[activeIndex].name}
              {/* GitHub Icon */}
              {TeamMembers[activeIndex].github && (
                <a
                  href={TeamMembers[activeIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-gray-600 hover:text-gray-800"
                >
                  <FaGithub />
                </a>
              )}
              {/* Instagram Icon */}
              {TeamMembers[activeIndex].instagram && (
                <a
                  href={TeamMembers[activeIndex].instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-gray-600 hover:text-gray-800"
                >
                  <FaInstagram />
                </a>
              )}
            </h3>
            <p className="text-gray-700 mb-2">{TeamMembers[activeIndex].position}</p>
            <p className="text-gray-900 mb-4">{TeamMembers[activeIndex].bio}</p>
            <p className="text-gray-900">{TeamMembers[activeIndex].about}</p>
          </motion.div>

          <button
            onClick={handleNextClick}
            className="ml-4 text-white hover:text-gray-300 text-3xl transition-transform transform hover:translate-x-2"
          >
            &gt;
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {TeamMembers.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                index === activeIndex ? 'bg-cyan-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
    </Animatedpage>
  );
};

export default AboutUs;
