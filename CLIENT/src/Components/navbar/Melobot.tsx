// Melobot.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Melobot = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    setMessages([...messages, { role: 'User', content: input }]);
    const response = await axios.post('/api/melobot', { message: input });
    setMessages([...messages, { role: 'User', content: input }, { role: 'Melobot', content: response.data }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-app-bg px-4">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text mt-2">MeloBOT</h1>
      <h3 className="text-xl font-semibold text-gray-600 mb-4">Your one stop solution on queries regarding MeloSynthia and personalized musical recommendations</h3>
      <div className="flex flex-col bg-white p-10 rounded-lg shadow-md w-full sm:w-1/2">
        <div className="overflow-y-auto h-64 mb-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'User' ? 'justify-end' : 'justify-start'}`}>
              <p className={`p-2 rounded-lg ${message.role === 'User' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>{message.content}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow border-2 border-pink-500 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
          <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-stretch sm:self-auto">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Melobot;
