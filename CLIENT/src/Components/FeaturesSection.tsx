import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Image on the left (Desktop) */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img src="/path/to/your/image.png" alt="Feature" className="w-full" />
          </div>

          {/* Features description (Desktop) */}
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-semibold mb-4">Features</h2>
            <p className="text-gray-600 mb-6">Your tagline or subheader here</p>

            <div className="flex flex-col space-y-6">
              {/* Feature Box 1 */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 rounded-full p-3">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Your icon SVG code here */}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Feature 1</h3>
                  <p className="text-gray-600">Description of Feature 1</p>
                </div>
              </div>

              {/* Feature Box 2 */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 rounded-full p-3">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Your icon SVG code here */}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Feature 1</h3>
                  <p className="text-gray-600">Description of Feature 1</p>
                </div>
              </div>
              
              {/* Feature Box 3 */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 rounded-full p-3">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Your icon SVG code here */}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Feature 1</h3>
                  <p className="text-gray-600">Description of Feature 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
