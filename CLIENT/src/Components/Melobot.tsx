import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Animatedpage from './Animatedpage';
import { Button } from "@material-tailwind/react";
import { useScroll } from 'framer-motion';
import { CgSpinnerAlt } from 'react-icons/cg';


const Melobot = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setLoading] = useState(false);
  const delay = async (ms: number) => new Promise((res) => setTimeout(res, ms));
  const inputRef = React.useRef<HTMLInputElement>(null);
  const chatBoxRef = React.useRef<HTMLDivElement>(null);
  const scroll = useScroll();
  console.log(scroll);

  const sendMessage = async () => {
    if (!input) return;

    setLoading(true);
    const requestData = {
      message: input,
    };

    setMessages(oldMessages =>
      [...oldMessages,
      { role: 'user', content: input }])

    if (requestData) {
      try {
        // Send a POST request to the server with the message
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_URL}/melobot`, requestData);
        console.log('Server Response:', response.data);
        setInput('');
        await delay(Math.random() * 1000 + 500);
        setMessages(oldMessages =>
          [...oldMessages,
          { role: 'melobot', content: response.data.message }])
      } catch (error) {
        // Handle any errors here
        console.error('Error sending message:', error);
      } finally {
        setLoading(false);
        inputRef.current?.focus();
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [isLoading]);


  return (
    <Animatedpage>
      <div className="flex flex-col h-screen justify-center items-center bg-app-bg px-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text mt-2">MeloBOT</h1>
        <h3 className="text-xl font-semibold text-gray-600 mb-4">Your one stop solution on queries regarding MeloSynthia and personalized musical recommendations</h3>
        <div className={`bg-white p-8 rounded-lg shadow-md w-full sm:w-1/2 `}>
          <div className=" overflow-y-auto min-h-[300px] max-h-[300px] mb-4 p-2 w-full transition-all duration-300 ease-in-out "
            ref={chatBoxRef}>

            <div className="flex flex-col space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end ' : 'justify-start '}`}>
                  <p className={`p-2 rounded-lg max-w-[60%] ${message.role === 'user' ? 'bg-gray-300 text-black' : 'bg-blue-500 text-white'}`}>{message.content}</p>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="p-2 rounded-lg bg-blue-500 text-white text-2xl">
                    <div className="animate-spin duration-200">
                      <CgSpinnerAlt />
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          <p className="mb-2 text-gray-500">Ex: Type 'what can you do'</p>
          <div className="flex flex-col sm:flex-row space-y-0 sm:space-y-0 gap-4">
            <input
              type="text"
              value={input}
              ref={inputRef}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-grow flex-shrink w-full border-2 border-pink-500 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            />

            <Button
              color='blue'
              size='sm'
              className={` flex-shrink-0 font-thin hover:bg-blue-700 disabled:bg-gray-600 whitespace-nowrap ${isLoading ? 'cursor-not-allowed' : ''}`}
              disabled={isLoading || !input.length}
              onClick={sendMessage}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </Animatedpage >
  );
};

export default Melobot;
