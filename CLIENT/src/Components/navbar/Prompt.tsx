import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sending from "@/assets/sending.svg"
const PromptSection: React.FC = () => {
  const [prompts, setPrompts] = useState<string[]>(['Hello, how can I assist you today?']);
  const [currentPrompt, setCurrentPrompt] = useState<string>('');
  // const [promptHistory, setPromptHistory] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAddPrompt = () => {
    if (currentPrompt.trim() !== '') {
      setPrompts([...prompts, currentPrompt]);
      // setPromptHistory([...promptHistory, currentPrompt]);
      setCurrentPrompt('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddPrompt();
    }
  };

  const toggleHistory = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-app-bg border rounded-lg p-4 shadow-md w-full">
      <div className="flex flex-col space-y-3">
    <h3 className='text-white font-semibold'>Enter your prompt here:</h3>
      </div>
      <div className="flex mt-4 px-0.5  ">
        <input
          type="text"
          className="flex-grow border-zinc-700 border  rounded-l-md p-2  text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="A pop music with Selena Gomez song's beat..."
          value={currentPrompt}
          onChange={(e) => setCurrentPrompt(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-white border-zinc-00 border text-white rounded-r-md p-2 ml-1 hover:bg-blue-600 transition duration-200"
          onClick={handleAddPrompt}
        >
        <svg style={{color:"rgb(46, 175, 255)"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>ionicons-v5-q</title><path d="M16,464,496,256,16,48V208l320,48L16,304Z" fill="#2eafff"></path></svg>
        </button>
      </div>
      {/* <div className="mt-4">
        <button
          className="text-blue-500 hover:underline cursor-pointer"
          onClick={toggleHistory}
        >
          {isModalOpen ? 'Close History' : 'Show History'}
        </button>
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
            </motion.div>
          )}
        </AnimatePresence>
      </div> */}
    </div>
  );
};

export default PromptSection;
