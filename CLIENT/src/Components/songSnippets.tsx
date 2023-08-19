import React from 'react';
import { LinearGradient } from 'react-text-gradients';

const songSnippets = () => {
  return (
    <div className="w-full flex flex-col mt-8">
      <div className="text-center text-white px-4 py-8">
        <h1 className="text-7xl"><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Song Snippets </LinearGradient></h1>
      </div>
      <div className="flex flex-row gap-9 w-full justify-center py-4 flex-wrap">
        <h2 className="text-white text-4xl">Genre:</h2>
        <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Hip Hop</button>
        <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Rock</button>
        <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Metal</button>
        <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Classical</button>
        <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Ambient</button>
        <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">LoFi</button>
        <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Cinematic</button>
        <button className="ring ring-yellow-400 py-2 px-3 rounded text-white text-lg hover:bg-gray-900">Slow & Reverb</button>
      </div>
    </div>
  )
}

export default songSnippets;
