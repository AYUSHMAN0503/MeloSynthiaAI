import React from 'react';
import musical from "@/assets/musical2.png"
import { RiNftFill } from 'react-icons/ri';
import { PiFileAudioFill } from 'react-icons/pi';
import { SiApplemusic } from 'react-icons/si';

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-app-bg py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            MeloSynthia AI features
          </h2>
          <p className="text-xl md:text-2xl font-normal mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Where the creativity meets creation!!</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          {/* Features description */}
          <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
            <div className="flex flex-col space-y-6">
              {/* Feature Box 1 */}
              <div className="flex items-center space-x-4 rounded-lg p-4  hover:scale-105  transition duration-500 shadow-md shadow-white/70">
                <div className="bg-white rounded-full p-3">
                  {/* Icon */}
                  <RiNftFill />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">NFT Marketplace</h3>
                  <p className="text-gray-100">The Marketplace feature felicitates the exchange of NFTs, representing unique music and lyrics created by you, via TRON's technology.</p>
                </div>
              </div>
              {/* ... Feature Box 2 ... */}
              <div className="flex items-center space-x-4  rounded-lg p-4  hover:scale-105  transition duration-500 shadow-md shadow-white/70">
                <div className="bg-white rounded-full p-3">
                  {/* Icon */}
                  <PiFileAudioFill />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Highest quality audio</h3>
                  <p className="text-gray-100">MeloSynthia's audio content is characterized by exceptional fidelity, encompassing impeccable audio resolution, minimal compression artifacts & optimal dynamic range.</p>
                </div>
              </div>
              {/* ... Feature Box 3 ... */}
              <div className="flex items-center space-x-4  rounded-lg p-4  hover:scale-105  transition duration-500 shadow-md shadow-white/70">
                <div className="bg-white rounded-full p-3">
                  {/* Icon */}
                  <SiApplemusic />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">MeloBOT </h3>
                  <p className="text-gray-100">MeloBOT gives you musical recommendations according to your taste and mood. It also solves your queries regarding TRON..</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image (Desktop) */}
          <div className="w-full md:w-1/2">
            <img src={musical} alt="Feature" className="hidden w-full h-auto md:flex" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
