import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import Animatedpage from '../Animatedpage';
import { LinearGradient } from 'react-text-gradients';
import Testimonial from '../testimonials';
import testimonials from '../testimonialsData';
// import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
// import axios from "axios";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CardList from './Cardlist';
import { CardList2 } from './Cardlist';
import CustomFileInput from './FileInput';
import PromptSection from './Prompt';
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
    title: 'Minuscule'
  },
  {
    title: 'Moderate'
  },
  {
    title: 'Substantial'
  },
];
const cardsData4 = [
  {
    title: 'Gentle'
  },
  {
    title: 'Standard'
  },
  {
    title: 'Fast'
  }
];

export const CreateMusic = () => {
  // const [musicData, setMusicData] = useState(null);

 

  return (
    <Animatedpage>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-8 mb-8 mt-8 text-center bg-gradient-to-r from-gold-500 to-purple-500 text-transparent bg-clip-text'>
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
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    // prevent the default behavior of the form
    e.preventDefault();
   
      
    
      // const handleClick = async () => {
      //   try {
      //     const response = await fetch('/getGradioMusic', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json'
      //       },
      //       body: JSON.stringify({
      //         text: inputValue,
      //         // Include other parameters here
      //       })
      //     });
    
      //     if (!response.ok) {
      //       throw new Error('Network response was not ok');
      //     }
    
      //     const data = await response.json();
    
      //     // Do something with the data
      //   } catch (error) {
      //     console.error('Error:', error);
      //   }
      // };
    // get the values from the form inputs
    // const genre = e.target.genre.value;
    // const style = e.target.style.value;
    // const length = e.target.length.value;
    // const tempo = e.target.tempo.value;
    // const query = e.target.query.value;
  
    // // send a POST request to the backend endpoint with the values
    // axios.post('/query', { genre, style, length, tempo, query })
    //   .then(response => {
    //     // handle the response from the backend
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     // handle any error from the request
    //     console.error(error);
    //   });
  };
  return (
    <Tabs value={activeTab}>
      <div className="flex justify-center  ml-64 md:ml-0"> {/* Center the tabs */}
        <TabsHeader style={{ width: '300%', marginLeft: '-105%' }} className='max-w-sm md:max-w-lg lg:max-w-2xl'>
          <Tab
            value="dashboard"
            className={`border border-gold text-purple-500 px-4 py-2 rounded-t-lg ${activeTab === 'dashboard' ? 'bg-gold-200' : 'bg-app-bg'
              }`}
            onClick={() => setActiveTab('dashboard')}>Dashboard</Tab>
          <Tab
            value="song-snippets"
            className={`border border-gold text-purple-500 px-4 py-2 rounded-t-lg ${activeTab === 'song-snippets' ? 'bg-gold-200' : 'bg-app-bg'
              }`}
            onClick={() => setActiveTab('song-snippets')}>Song Snippets</Tab>
        </TabsHeader>
      </div>

      <TabsBody>
        <TabPanel value="dashboard">
          <div className= 'container pt-14 lg:px-6 pb-6 flex flex-wrap pr-0'onClick={handleSubmit} >
            <div className="container mx-auto py-8">
              <h1 className="text-2xl font-semibold mb-4 text-white"><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}> Choose Your Genre:</LinearGradient></h1>
              <CardList cards={cardsData}    />
                         
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
            <div className='md:w-3/4 w-[90%] sm:pl-9 flex flex-row items-center py-8 md:pl-16 ml-6 md:ml-16 flex-wrap justify-start'>
              <PromptSection />
            </div>
          </div>

          {/*<div>
            <div className='text-white border-0 px-4 md:w-2/5 w-[70%]  pb-16 flex items-center flex-wrap md:float-left pt-12 md:border-r-2 border-sky-500 justify-evenly'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className='h-12 flex flex-shrink-0 border hover:bg-cyan-700  border-cyan-700 text-lg text-white px-[1.5vw] py-[1vw] rounded-lg items-center'
              >
                Compose
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className='h-12 flex flex-shrink-0 border hover:bg-cyan-700  border-cyan-700 text-lg text-white px-[1.5vw] py-[1vw] rounded-lg items-center'
              >
                New Music
              </motion.button>
            </div>
            </div>*/}

          <h3 className='p-10 pt-20 pb-20 flex justify-center text-white text-xl'>
            Your Generated NFTs/Music
          </h3>
        </TabPanel>
        <TabPanel value="song-snippets">
          <div className="w-full flex flex-col">
            <div className="text-center text-white px-4 py-8">
              <h1 className="text-3xl font-semibold sm:text-5xl lg:text-7xl"><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Song Snippets </LinearGradient></h1>
            </div>
            <h2 className="text-white text-3xl md:text-4xl">Genre:</h2>
            <div className="flex-row sm:gap-7 w-full justify-center py-4 flex-wrap grid grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 gap-4  md:grid-cols-6 lg:grid-cols-6">

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
              <CustomFileInput />
              <button className="w-32 h-12 content-center flex-wrap self-center flex justify-center bg-transparent bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-blue-500 rounded">Create
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
