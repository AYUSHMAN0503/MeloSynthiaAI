import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-app-bg py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-5xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            MeloSynthia AI features
          </h2>
          <p className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">MeloSynthia AI where creativity meets creation..</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          {/* Features description (Centered) */}
          <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
            <div className="flex flex-col space-y-6">
              {/* Feature Box 1 */}
              <div className="flex items-center space-x-4 border border-white rounded-lg p-4">
                <div className="bg-blue-500 rounded-full p-3">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* icon SVG code here */}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Marketplace</h3>
                  <p className="text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam officiis, nihil nam molestiae optio doloribus ex ducimus culpa, ipsam modi magni?</p>
                </div>
              </div>
              {/* ... Feature Box 2 ... */}
              <div className="flex items-center space-x-4 border border-white rounded-lg p-4">
                <div className="bg-blue-500 rounded-full p-3">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* icon SVG code here */}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Highest quality audio</h3>
                  <p className="text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut nisi, in asperiores reprehenderit tempore enim iste assumenda commodi earum!</p>
                </div>
              </div>
              {/* ... Feature Box 3 ... */}
              <div className="flex items-center space-x-4 border border-white rounded-lg p-4">
                <div className="bg-blue-500 rounded-full p-3">
                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/*icon SVG code here */}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Song Snippets</h3>
                  <p className="text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, explicabo maiores unde quisquam cumque sit mollitia deleniti beatae possimus nihil?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image on the left (Desktop) */}
          <div className="w-full md:w-1/2">
            <img src='images/tunes.jpg' alt="Feature" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
