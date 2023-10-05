import React, { useState } from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion"
import { useSwipeable } from 'react-swipeable';
import TeamMembers from './TeamMembers';
import Animatedpage from '../Animatedpage';

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

  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
  });

  return (
    <Animatedpage>
      <div className="text-white text-center mb-8 mt-8">
        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          Meet Our Team - WEB 3 Sailors
        </h2>
        <p className="mt-2">A talented group of individuals striving to build awesome things.</p>
      </div>

      <section className="align items-end py-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            {/* Display Previous Arrow on Desktop */}
            <button
              onClick={handlePrevClick}
              className="hidden md:block mr-4 text-white hover:text-gray-300 text-3xl transition-transform transform hover:-translate-x-2"
            >
              &lt;
            </button>

            {/* Display Team Member Card */}
            <div className="w-full max-w-md p-4 relative overflow-hidden">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md h-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                {...handlers} // Apply swipe handlers to the card
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
            </div>

            {/* Display Next Arrow on Desktop */}
            <button
              onClick={handleNextClick}
              className="hidden md:block ml-4 text-white hover:text-gray-300 text-3xl transition-transform transform hover:translate-x-2"
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
