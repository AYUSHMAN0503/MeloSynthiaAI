import React, { useState } from 'react';
import TeamMembers from '../TeamMembers';

const AboutUs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleNextClick = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % TeamMembers.length);
    };
  
    const handlePrevClick = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + TeamMembers.length) % TeamMembers.length);
    };
  
    return (
        <section className="bg-gray-800 py-12"> {/* Change the background color here */}

        <div className="container mx-auto">
          <div className="text-white text-center mb-8">
            <h2 className="text-4xl font-bold">Meet Our Team</h2>
            <p className="mt-2">A talented group of individuals who are building awesome things.</p>
          </div>
  
          <div className="flex items-center justify-center">
            <button
              onClick={handlePrevClick}
              className="mr-4 text-white hover:text-gray-300 text-3xl transition-transform transform hover:-translate-x-2"
            >
              &lt;
            </button>
  
            {/* Display Team Member Card */}
            <div
              className="bg-white p-6 rounded-lg shadow-md w-96 transition-transform transform hover:scale-105 hover:-translate-x-2"
            >
              <img
                src={TeamMembers[activeIndex].imageUrl}
                alt={TeamMembers[activeIndex].name}
                className="mx-auto w-42 h-42 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{TeamMembers[activeIndex].name}</h3>
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

          {/* Navigation Dots */}
        <div className="flex justify-center mt-4">
          {TeamMembers.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
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