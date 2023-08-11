import React from 'react'
import { motion } from "framer-motion"
import Animatedpage from '../Animatedpage'
export const CreateMusic = () => {
  return (
    <Animatedpage>
    <div className='container pt-14 px-6 pb-6 flex flex-wrap pr-0'>
        <div className='text-white w-2/5 border-r-2 px-4 '>
            <motion.button whileHover={{scale: 1.1}} className='bg-cyan-500 text-white text-lg sm:text-base md:text-sm lg:text-lg font-bold py-[1vw] px-[2vw] mx-4 my-4 rounded-md border-b-4 border-cyan-700'>
                New Music
            </motion.button>
        </div>
        <div className='text-white w-3/5 p-4 px-10 pr-0'>
            <h2 className='text-2xl'>Prompt Here: </h2>
            <div className='w-full flex  flex-row justify-center items-center py-8 flex-wrap'>
                <input className='mr-[4vw] appearance-none bg-transparent border-none w-[40vw] mb-6 text-white-700 py-[1vw] focus:outline-none text-lg' type='text' placeholder="A pop music with Eminem song's beat"></input>
                <button className='flex-shrink-0 border-transparent bg-cyan-500 hover:bg-cyan-700 border-4 border-cyan-500 hover:border-cyan-700 text-lg text-white px-[1.5vw] py-[1vw] rounded-lg' type='button'>
                    Compose
                </button>
            </div>
        </div>
    </div>
    </Animatedpage>
  )
}