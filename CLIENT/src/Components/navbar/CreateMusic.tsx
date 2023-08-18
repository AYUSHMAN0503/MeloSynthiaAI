import React from 'react'
import { motion } from "framer-motion"
import Animatedpage from '../Animatedpage'

const genres = ['Hip-Hop','Classic','Jazz','Culural','Melody','Symphony']
const styles = ['Ambient','Lofi','Slow-Reverb']


export const CreateMusic = () => {
   
    
  return (
    <Animatedpage>
    <div className='container pt-14 px-6 pb-6 flex flex-wrap pr-0'>
        <div className='text-white w-2/5 border-r-2 px-4 '>
            <motion.button whileHover={{scale: 1.1}} className='flex-shrink-0 border-dotted bg-none hover:bg-cyan-700 border-4 border-cyan-700 hover:border-cyan-700 text-lg text-white px-[1.5vw] py-[1vw] rounded-lg'>
               + New Music
            </motion.button>
            <h1 className='p-10 flex justify-left' >
                Your Generated NFTs/Music
            </h1>
        </div>
        <div className='text-white w-3/5 p-4 px-10 pr-0'>
        <h3 className='text-2xl p-2 mb-8 mu-1'> Generate your melodies with MeloSynthiaAI</h3>
            <div> 


                <b className='flex justify-right p-2' >Genre:</b>
                {genres.map((genre)=>(<button 
                className="mr-2 mb-8 px-4 py-2 p-10  bg-transparent-500 rounded-tl-lg rounded-md border border-white-500 text-white rounded-md hover:bg-blue-700 "    

                 >{genre}</button>))}

                <b className='flex justify-left'>Styles:</b>
                {styles.map((sort) => (
        <button
          key={sort}
          className="mr-2 mb-8 px-4 py-2 p-10  bg-transparent-500 rounded-tl-lg rounded-md border border-white-500 text-white rounded-md hover:bg-blue-700"
        >
          {sort}
        </button>
      ))}
            </div>
                        
            <div className='w-full flex  flex-row justify-center items-center py-8 flex-wrap'>
                <input className='mr-[4vw] appearance-none bg-transparent border- w-[40vw] mb-6 text-white-700 py-[1vw] focus:outline-none text-lg' type='text' placeholder="A pop music with Eminem song's beat"></input>
                <button className='flex-shrink-0 border-transparent bg-cyan-500 hover:bg-cyan-700 border-4 border-cyan-500 hover:border-cyan-700 text-lg text-white px-[1.5vw] py-[1vw] rounded-lg' type='button' >
                    Compose
                </button>
            </div>
        </div>
    </div>
    </Animatedpage>
  )
}