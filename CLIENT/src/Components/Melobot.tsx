import React, { useState } from 'react';
import axios from 'axios';
import Animatedpage from './Animatedpage';
import { Button } from "@material-tailwind/react";
const Melobot = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  // const [responseData, setResponseData] = useState<any>(null); 

  const sendMessage = async () => {
    const requestData = {
      message: input,
    };
  
    if (requestData) {
      try {
        // Send a POST request to the server with the message
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_URL}/melobot`, requestData);
        // setResponseData(response.data);
        // Handle the response as needed (e.g., updating state)
        console.log('Server Response:', response.data);
         setInput('');

      // Add the message to the state
      // setMessages([...messages, { role: 'user', content: input }]);
      // setMessages([...messages, { role: 'melobot', content: response.data.message }]);
      setMessages(oldMessages =>{{
        return [...oldMessages, { role: 'user', content: input },{ role: 'melobot', content: response.data.message }]

      }})
      } catch (error) {
        // Handle any errors here
        console.error('Error sending message:', error);
      }
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };


  return (
    <Animatedpage>
    <div className="flex flex-col h-screen justify-center items-center bg-app-bg px-4">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text mt-2">MeloBOT</h1>
      <h3 className="text-xl font-semibold text-gray-600 mb-4">Your one stop solution on queries regarding MeloSynthia and personalized musical recommendations</h3>
      <div className="flex flex-col bg-white p-10 rounded-lg shadow-md w-full sm:w-1/2">
        <div className="overflow-y-auto h-64 mb-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <p className={`p-2 rounded-lg ${message.role === 'user' ? 'bg-gray-300 text-black' : 'bg-blue-500 text-white'}`}>{message.content}</p>
            </div>
          ))}
{/* <div className="flex justify-end mr-4">
{responseData && <div className="p-2 rounded-lg bg-blue-500 text-white ">{responseData.message}</div>}
</div> */}
        </div>
        
        <p className="mb-2 text-gray-500">Ex: Type 'what can you do'</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow border-2 border-pink-500 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
         
          <Button color='blue' size='sm' className='m-4 font-thin hover:bg-blue-700' onClick={sendMessage}> Send</Button>
        </div>
      </div>
    </div>
    </Animatedpage>
  );
};

export default Melobot;
