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
import CardList from './Cardlist';
 import { CardList2 } from './Cardlist';
const cardsData = [
  {
    title: 'Hip-Hop',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1546528377-65924be33e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',   
  },
  {
    title: 'Classic',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',   
  },
  {
    title: 'Jazz',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',   
  },
  {
    title: 'Cultural',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',   
  },
  {
    title: 'Melody',
    description: 'Description for Card 1',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1681593282801-5e6ae37eac2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',   
  },
  {
    title: 'Symphony',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',   
  },
 
];
const cardsData2 = [
  {
    title: 'Ambient',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',   
  },
  {
    title: 'LoFi',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1630713815150-2c847025c1d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',   
  },
  {
    title: 'Slowed-Reverb',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1631044176346-804c33ade61c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG8lMjBmaXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',   
  },

];
const cardsData3 = [
  {
    title: '00:10' 
  },
  {
    title: '00:20'
  },
  {
    title: '00:30'
  },
  {
    title: '00:40'
  },
 {
    title: '00:50'
   },
 {
    title: '01:00'
   },
];
const cardsData4 = [
  {
    title: 'Slow'  
  },
  {
    title: 'Normal'
  },
  {
    title: 'Fast'
  }
];


export const CreateMusic = () => {

  return (
    <Animatedpage>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-4 mb-8 mt-4 text-center bg-gradient-to-r from-gold-500 to-purple-500 text-transparent bg-clip-text'>
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
      <div className="flex justify-center  ml-64 md:ml-0"> {/* Center the tabs */}
        <TabsHeader style={{ width: '300%', marginLeft: '-105%' }} className='max-w-sm md:max-w-lg lg:max-w-2xl'>
          <Tab
            value="dashboard"
            className={`border border-gold text-purple-500 px-4 py-2 rounded-t-lg ${activeTab === 'dashboard' ? 'bg-gold-200' : 'bg-app-bg'
              }`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </Tab>
          <Tab
            value="song-snippets"
            className={`border border-gold text-purple-500 px-4 py-2 rounded-t-lg ${activeTab === 'song-snippets' ? 'bg-gold-200' : 'bg-app-bg'
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
            <div className="container mx-auto py-8">
              <h1 className="text-2xl font-semibold mb-4 text-white"><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}> Choose Your Genre:</LinearGradient></h1>
              <CardList cards={cardsData} />
            </div>
            <div className="container mx-auto py-8">
              <h1 className="text-2xl font-semibold mb-4 text-white"><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Choose Style:</LinearGradient></h1>
              <CardList cards={cardsData2} />
            </div>
            <div className="container mx-auto py-8">
              <h1 className="text-2xl font-semibold mb-4 text-white"><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Choose Length:</LinearGradient></h1>
              <CardList2 cards={cardsData3} />
            </div>
            <div className="container mx-auto py-8">
              <h1 className="text-2xl font-semibold mb-4 text-white"><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Choose Tempo:</LinearGradient></h1>
              <CardList2 cards={cardsData4} />
            </div>
            <div className='text-white w-3/5 border-0 px-4 lg:w-2/5 lg:border-r-2 pb-28'>
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

              <div className='w-full flex  flex-row justify-center items-center py-8 flex-wrap'>
                <textarea
                  className='mr-[4vw] appearance-none bg-transparent w-[40vw] mb-6 text-white-700 py-[1vw] focus:outline-none text-lg border-2 rounded-lg pl-4'
                  placeholder="A pop music with Eminem song's beat"
                />
                <button
                  className='flex-shrink-0 border-transparent bg-cyan-500 hover:bg-cyan-700 border-4 border-cyan-500 hover:border-cyan-700 text-lg text-white px-[2vw] py-[1vw] rounded-lg'
                  type='button'>
                  Compose
                </button>
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
