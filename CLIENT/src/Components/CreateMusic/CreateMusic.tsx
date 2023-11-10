import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import Animatedpage from '../Animatedpage';
import { LinearGradient } from 'react-text-gradients';
import Testimonial from './testimonials';
import testimonials from './testimonialsData';
import axios from "axios"
import Typewriter from 'typewriter-effect';

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import CardList from './Cardlist';
import { CardList2 } from './Cardlist';
// import CustomFileInput from './FileInput';
import PromptSection from './Prompt';
import { HashLoader } from 'react-spinners';
import { useEffect } from 'react';
const cardsData = [
  {
    title: 'Hip-Hop',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1546528377-65924be33e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    genre: 'type: Hip-Hop ',
  },
  {
    title: 'Classic',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    genre: 'type: Classic '
  },
  {
    title: 'Jazz',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    genre: 'type: Jazz'
  },
  {
    title: 'Cultural',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    genre: 'type:Cultural'
  },
  {
    title: 'Melody',
    description: 'Description for Card 1',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1681593282801-5e6ae37eac2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    genre: 'type: Melody'
  },
  {
    title: 'Symphony',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    genre: 'type: Symphony'
  },

];
const cardsData2 = [
  {
    title: 'Ambient',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    style: "type: ambient"
  },
  {
    title: 'LoFi',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1630713815150-2c847025c1d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    style: "type: lofi"
  },
  {
    title: 'Slowed-Reverb',
    description: 'Description for Card 1',
    imageUrl: 'https://images.unsplash.com/photo-1631044176346-804c33ade61c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG8lMjBmaXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    style: "type: slowed-reverb"
  },

];
const cardsData3 = [
  {
    title: 'Substantial',
    length: "music"
  },
];

const cardsData4 = [
  {
    title: 'Gentle',
    tempo: 'music in slow motion'
  },
  {
    title: 'Standard',
    tempo: 'music in right pace'
  },
  {
    title: 'Fast',
    tempo: 'fast-pace music'
  }
];

const loadingText = [
   "Innovating thoughts...",
   "Weaving into musical words...",
   "Finishing touches..."
];




export const CreateMusic = () => {



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
  const [lyricsPrompt, setLyricsPrompt] = useState<string>('Look at the stars, look how they shine for you and everything you do');
  const [lyricsData, setLyricsData] = useState({});
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setLoading] = useState(false);

  const handleAddLyricsPrompt = () => {
    setLoading(true);
    setLyricsData({});
    
    if (lyricsPrompt.trim() !== '') {
      const requestData = {
        text: lyricsPrompt,
        key: `${import.meta.env.VITE_LYRICS_HFTOKEN}`,
      };
  
      setTimeout(async () => {
        try {
          const response = await axios.post(`${import.meta.env.VITE_EXPRESS_URL}/lyrics`, requestData);
          setLyricsData(response?.data?.lyrics ?? "Lyrics not found, try again...");
          setLoading(false);
        } catch (error) {
          setLyricsData("Lyrics Not Found");
          setLoading(false);
          console.error('Error:', error);
        }
      }, 6000); // 10 seconds delay
    }
  };
  const [loadingIndex, setLoadingIndex] = useState(0);
  const [showLoadingText, setShowLoadingText] = useState(true);
  const [timerFinished, setTimerFinished] = useState(false);
  useEffect(() => {
    let intervalId: string | number | NodeJS.Timer | undefined;
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (isLoading) {
      let index = 0;
      let totalDuration = 10000; // Total duration in milliseconds (10 seconds)
      let textDuration = 2300; // Duration for each text in milliseconds (1 second)

      setShowLoadingText(true);
      setLoadingIndex(0);

      intervalId = setInterval(() => {
        setLoadingIndex(index);
        index++;

        if (index >= loadingText.length) {
          clearInterval(intervalId);
        }
      }, textDuration);

      timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        setShowLoadingText(false);
      }, totalDuration);
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isLoading]);


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    // prevent the default behavior of the form
    e.preventDefault();

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
            value="Lyrical AI"
            className={`border border-gold text-purple-500 px-4 py-2 rounded-t-lg ${activeTab === 'Lyrical AI' ? 'bg-gold-200' : 'bg-app-bg'
              }`}
            onClick={() => setActiveTab('Lyrical AI')}>Lyrical AI</Tab>
        </TabsHeader>
      </div>

      <TabsBody>
        <TabPanel value="dashboard">
          <div className='container pt-14 lg:px-6 pb-6 flex flex-wrap pr-0' onClick={handleSubmit} >
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
            <div className='md:w-3/4 w-[90%] sm:pl-9 flex flex-row items-center py-8 md:pl-16 ml-6 md:ml-16 flex-wrap justify-start'>
              <PromptSection />
            </div>
          </div>



          {/* <h3 className='p-10 pt-20 pb-20 flex justify-center text-white text-xl'>
            Your Generated NFTs/Music
          </h3> */}
        </TabPanel>
        <TabPanel value="Lyrical AI">
          <div className="w-full flex flex-col">
            <div className="text-center text-white px-4 py-8">
              <h1 className="text-3xl font-semibold sm:text-5xl lg:text-7xl"><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Lyrical AI </LinearGradient></h1>
            </div>
          </div>
          <div className="text-center text-white px-4 py-8">
            <h1 className="text-4xl "><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Empower to generate or craft lyrics</LinearGradient></h1>
          </div>


          <div className="flex-row sm:gap-7 w-full justify-center py-4 flex-wrap grid grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 gap-4  md:grid-cols-6 lg:grid-cols-6">

            {/* <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Hip Hop</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Rock</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Metal</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Classical</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Ambient</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">LoFi</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Cinematic</button>
              <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Slow & Reverb</button> */}
          </div>
          <div className="max-w-screen-sm mx-auto flex flex-wrap justify-center py-6 px-2 mt-4 gap-6">
            <div className="bg-app-bg border rounded-lg p-4 shadow-md w-full mt-8">
              <div className="flex flex-col space-y-3">
                <h3 className='text-white font-semibold'>Enter your Lyrics prompt here:</h3>
              </div>
              <div className="flex mt-4 px-0.5 h-16 ">
                <input
                  type="text"
                  className="flex-grow border-zinc-700 border  rounded-l-md p-2  text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Describe your prompt. For ex: write when you ready come and get it"
                  value={lyricsPrompt}
                  onChange={(e) => setLyricsPrompt(e.target.value)}
                />
                <button
                  className="bg-white border-zinc-00 border text-white rounded-r-md p-2 ml-1 hover:bg-blue-600 transition duration-200"
                  onClick={handleAddLyricsPrompt}
                  disabled={isLoading}
                >
                  <svg style={{ color: "rgb(46, 175, 255)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>Send</title><path d="M16,464,496,256,16,48V208l320,48L16,304Z" fill="#2eafff"></path></svg>
                </button>

              </div>
              <div className="flex items-center border border-gray-300 p-6 rounded-md w-90 mt-2 text-white font-semibold">
                {isLoading && showLoadingText ? (
                  <div className='text-base  flex items-center'>
                    <HashLoader className='p-5' size={30} color={'#00FFFF'} loading={isLoading} />
                    {showLoadingText && <p className='text-blue-600 text-lg'>{loadingText[loadingIndex]}</p>}
                  </div>
                ) : (
                  Object.keys(lyricsData).length > 0 && typeof lyricsData === 'string' ? (
                    <div className="text-pink-500">
                      <Typewriter
                        options={{
                          delay: 40,
                        }}
                        onInit={(typewriter) => {
                          const lines = lyricsData.split('\n');
                          lines.forEach((line, index) => {
                            typewriter.typeString(line);
                            if (index < lines.length - 1) {
                              typewriter.pauseFor(500);
                              typewriter.typeString('<br />');
                            }
                          });
                          typewriter.start();
                        }}
                      />
                    </div>
                  ) : null // If lyricsData doesn't exist or is not a string, this part won't be rendered
                )}
              </div>

              {Object.keys(lyricsData).length > 0 && typeof lyricsData === 'string' && <div className='mt-2'>
                {/* <Button  className="bg-white border-zinc-00 border text-blue-600 rounded-md px-2 py-1 ml-1 hover:bg-blue-600 hover:text-white transition duration-200" onClick={() => {
                  setLyricsPrompt(lyricsData);
                  setTimeout(() => handleAddLyricsPrompt(), 100);
                }}>
                  generate on this prompt
                </Button> */}
                <Button variant="outlined" disabled={isLoading} className=" font-normal flex items-center gap-3 text-white hover:bg-cyan-400 hover:text-black" onClick={() => {
                  setLyricsPrompt(lyricsData);
                  setTimeout(() => handleAddLyricsPrompt(), 100);
                }}>
                  Generate on this prompt

                </Button>
              </div>}


            </div>
            {/* <button className="w-32 h-12 content-center flex-wrap self-center flex justify-center bg-transparent bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-blue-500 rounded">Create
              </button>
            </div>
            <div className="text-white w-full flex justify-center text-lg m-4"> */}

            {/* <div className="text-white w-full flex justify-center text-lg m-4">
              <p><span className="mr-1 font-bold">Caution:</span> MeloSynthiaAI does not Support and is not responsible for any copyright infringement of the vocals given in NFTs.</p>
            </div> */}
          </div>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
