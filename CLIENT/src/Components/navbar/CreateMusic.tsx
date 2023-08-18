import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Animatedpage from '../Animatedpage';
import { LinearGradient } from 'react-text-gradients';
import Testimonial from '../testimonials';
import testimonials from '../testimonialsData';
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
      <h1 className='text-5xl p-2 mb-8 mt-4 text-center bg-gradient-to-r from-gold-500 to-purple-500 text-transparent bg-clip-text'>
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
          <div className='text-white px-4 py-2 rounded-t-lg bg-app-bg container mx-auto p-8'>
            <p>
            Khada Hun Aaj Bhi Wahi, Ki Dil Fir Bekaraar Hai
            Khada Hun Aaj Bhi Wahin, Ki Tera Intezaar Hai.</p>
            <p>Chhoo Lo Jo Mujhe Tum Kabhi, Kho Na Jaun Main Raat Din
            Nazaron Mein Tum Ho Basee, Kehdo Jo Tum Ek Baar
            Mere Ho Bas Tum Mere, Nazaron Mein Tum Ho Basee</p>
            <p>
            Khada Hun Aaj Bhi Wahin
            Lagi Teri Hi Aas Hai
            Kaisi Hai Yeh Bebasi
            Yeh Kaisi Dil Ki Pyaas Hai
            Reh Jaunga Yunhi
            Bas Yunhi Bas Yunhi 
            </p>
          </div>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
