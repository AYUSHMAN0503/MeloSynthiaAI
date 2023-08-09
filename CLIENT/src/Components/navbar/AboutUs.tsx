import React, { useState } from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons from the react-icons library
import TeamMembers from '../TeamMembers';

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
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto">
        <div className="text-white text-center mb-8">
          <h2 className="text-4xl font-bold">Meet Our Team - WEB 3 Sailors</h2>
          <p className="mt-2">A talented group of individuals who are behind this concept of MeloSynthia AI.</p>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handlePrevClick}
            className="mr-4 text-white hover:text-gray-300 text-3xl transition-transform transform hover:-translate-x-2"
          >
            &lt;
          </button>

          {/*Team - Member Card */}
          <div
            className="bg-white p-6 rounded-lg shadow-md w-96 transition-transform transform hover:scale-105 hover:-translate-x-2"
          >
            <img
              src={TeamMembers[activeIndex].imageUrl}
              alt={TeamMembers[activeIndex].name}
              className="mx-auto w-42 h-42 rounded-full mb-4"
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
            <p className="text-gray-600 mb-4">{TeamMembers[activeIndex].position}</p>
            <p className="text-gray-800">{TeamMembers[activeIndex].bio}</p>
          </div>

          <button
            onClick={handleNextClick}
            className="ml-4 text-white hover:text-gray-300 text-3xl transition-transform transform hover:translate-x-2"
          >
            &gt;
          </button>
        </div>

        {/*Dots*/}
        <div className="flex justify-center mt-4">
          {TeamMembers.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                index === activeIndex ? 'bg-gray-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default AboutUs;