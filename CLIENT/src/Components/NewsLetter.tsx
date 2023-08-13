import React from 'react'
import { LinearGradient } from 'react-text-gradients'

export const NewsLetter = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center text-center py-8 px-4'>
        <h2 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold'><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Get Notified When we Update</LinearGradient></h2>
        <p className='text-white xl:text-xl font-sans mt-4 '>Never miss an update by being a part of our NewsLetter</p>
        <div className='flex w-full justify-center items-center flex-wrap py-4 gap-4 mt-6'>
            <input className='px-4 py-3 outline-2 border-0 rounded-md bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-sm sm:text-sm md:text-md lg:text-lg sm:leading-6 w-xl' type='email' placeholder='Enter your email'></input>
            <button className='text-white bg-cyan-400 py-2 px-2 text-md xl:py-3 xl:px-5 rounded-md font-bold' type='submit'>Notify Me</button>
        </div>
        <div className='flex items-center w-full justify-center'>
            
            <label htmlFor="checkbox" className='text-white text-sm mt-1 r ml-2'><input className='w-4 h-4 rounded focus:ring-blue-500 mr-2' id='checkbox' type='checkbox'></input>I agree to receive other communications from MelosynthiaAI.*</label>
        </div>
    </div>
  )
}
