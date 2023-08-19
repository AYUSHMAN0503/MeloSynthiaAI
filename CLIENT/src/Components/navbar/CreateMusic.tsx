import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Animatedpage from '../Animatedpage';
import { LinearGradient } from 'react-text-gradients';
import Testimonial from '../testimonials';
import testimonials from '../testimonialsData';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export const CreateMusic = () => {

  return (
    <Animatedpage>
      <h1 className='text-5xl p-2 mb-8 mt-14 text-center bg-gradient-to-r from-gold-500 to-purple-500 text-transparent bg-clip-text'>
        Generate your melodies with MeloSynthiaAI
      </h1>

      <TabsDefault />

      <div className='container mx-auto p-8'>
        <h2 className='text-4xl font-bold text-center bg-gradient-to-r from-gold-500 to-purple-500 text-transparent bg-clip-text'>
          Users who immersed themselves in ethereal symphonies!!
        </h2>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.name}
              name={testimonial.name}
              image={testimonial.image}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </Animatedpage>
  );
};

export function TabsDefault() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Tabs value={activeTab}>
      <div className="flex justify-center"> {/* Center the tabs */}
      <TabsHeader style={{ width: '300%', maxWidth: '700px', marginLeft:'-100%'}}>
          <Tab
            value="dashboard"
            className={`border border-gold text-purple-500 px-4 py-2 rounded-t-lg ${
              activeTab === 'dashboard' ? 'bg-gold-200' : 'bg-app-bg'
            }`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </Tab>
          <Tab
            value="song-snippets"
            className={`border border-gold text-purple-500 px-4 py-2 rounded-t-lg ${
              activeTab === 'song-snippets' ? 'bg-gold-200' : 'bg-app-bg'
            }`}
            onClick={() => setActiveTab('song-snippets')}
          >
            Song Snippets
          </Tab>
        </TabsHeader>
      </div>


      <TabsBody>
        <TabPanel value="dashboard">
          <div className='container pt-14 px-6 pb-6 flex flex-wrap pr-0'>
            <div className='text-white w-2/5 border-r-2 px-4 '>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className='flex-shrink-0 border-dotted hover:bg-cyan-700 border-4 border-cyan-700 text-lg text-white px-[1.5vw] py-[1vw] rounded-lg'
              >
                + New Music
              </motion.button>
              <h3 className='p-10 flex justify-left'>
                Your Generated NFTs/Music
              </h3>
            </div>
            <div className='text-white w-3/5 p-4 px-10 pr-0'>
            <div>
              <b className='flex justify-left text-2xl mb-2 bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>Choose Your Genre:</b>
              {['Hip-Hop', 'Classic', 'Jazz', 'Cultural', 'Melody', 'Symphony'].map((genre) => (
                <button
                  key={genre}
                  className='mr-2 mb-8 px-4 py-2 p-10  bg-transparent-500 rounded-tl-lg rounded-md border-2 border-gold text-white hover:bg-blue-400'>
                  {genre}
                </button>
              ))}
            
            
              <b className='flex justify-left text-2xl mb-2 bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>Styles:</b>
              {['Ambient', 'Lofi', 'Slow-Reverb'].map((sort) => (
                <button
                  key={sort}
                  className='mr-2 mb-8 px-4 py-2 p-10  bg-transparent-500 rounded-tl-lg rounded-md border-2 border-gold text-white hover:bg-blue-400'>
                  {sort}
                </button>
              ))}
            
              <b className='flex justify-left text-2xl mb-2 bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>Choose Length:</b>
              {['0:10', '0:20', '0:30', '0:40', '0:50', '1:00'].map((length) => (
                <button
                  key={length}
                  className='mr-2 mb-8 px-4 py-2 p-10 bg-transparent-500 rounded-tl-lg rounded-md border-2 border-gold text-white hover:bg-blue-400'>
                  {length}
                </button>
              ))}
            
              <b className='flex justify-left text-2xl mb-2 bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text'>Choose Tempo:</b>
              {['Slow', 'Medium', 'Fast'].map((tempo) => (
                <button
                  key={tempo}
                  className='mr-2 mb-8 px-4 py-2 p-10 bg-transparent-500 rounded-tl-lg rounded-md border-2 border-gold text-white hover:bg-blue-400'>
                  {tempo}
                </button>
              ))}
            </div>
            
            <div className='w-full flex  flex-row justify-center items-center py-8 flex-wrap'>
              <input
                className='mr-[4vw] appearance-none bg-transparent border- w-[40vw] mb-6 text-white-700 py-[1vw] focus:outline-none text-lg'
                type='text'
                placeholder="A pop music with Eminem song's beat"
              />
              <button
                className='flex-shrink-0 border-transparent bg-cyan-500 hover:bg-cyan-700 border-4 border-cyan-500 hover:border-cyan-700 text-lg text-white px-[1.5vw] py-[1vw] rounded-lg'
                type='button'>
                Compose
              </button>
            </div>
          </div>
        </div>
        </TabPanel>
        <TabPanel value="song-snippets">
          <div className="w-full flex flex-col">
            <div className="text-center text-white px-4 py-8">
              <h1 className="text-7xl"><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Song Snippets </LinearGradient></h1>
            </div>
            <div className="flex flex-row gap-5 sm:gap-7 w-full justify-center py-4 flex-wrap">
              <h2 className="text-white text-3xl md:text-4xl">Genre:</h2>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Hip Hop</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Rock</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Metal</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Classical</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Ambient</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">LoFi</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Cinematic</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Slow & Reverb</button>
            </div>
            <div className="w-full flex flex-wrap justify-center py-6 px-2 mt-4 gap-6">
                <label htmlFor="vocalFile" className="w-100 lg:w-1/3 py-2 sm:py-3 px-4 xl:px-6 rounded bg-gradient-to-r from-gold-500 to-purple-500 hover:cursor-pointer">
                  <div className="flex flex-row gap-4 py-2">
                    <AddBoxOutlinedIcon className="scale-150" />
                    <p className="text-xl text-center text-gray-900 mt-[-0.2rem]">Drop your vocal file here</p>
                  </div>
                </label>
              <input type="file" id="vocalFile" className="hidden" />
              <button
                className='border-transparent bg-cyan-500 hover:bg-cyan-700 border-4 border-cyan-500 hover:border-cyan-700 text-xl text-white px-4 py-2 rounded-lg'
                type='button'>
                Create
              </button>
            </div>
            <div className="text-white w-full flex justify-center text-lg m-4">
              <p><span className="mr-1 font-bold">Caution:</span> MeloSynthiaAI does not Support and is not responsible for any copyright infringement of the vocals given in NFTs.</p>
            </div>
          </div>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
