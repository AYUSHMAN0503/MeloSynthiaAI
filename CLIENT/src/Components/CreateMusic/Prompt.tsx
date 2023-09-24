import React, { useState } from 'react';
import axios from 'axios'


const PromptSection: React.FC = () => {
  const [prompts, setPrompts] = useState<string[]>(['Hello, how can I assist you today?']);
  const [currentPrompt, setCurrentPrompt] = useState<string>('');
  const [promptHistory, setPromptHistory] = useState<string[]>([]);

  const [musicData, setMusicData] = useState(null);
  const handleAddPrompt = async () => {
    if (currentPrompt.trim() !== '') {
    const requestData = {
    "model": "melody",
    "text": currentPrompt,
    "audio": "https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav",
    "duration": 1, 
    "top_k": 50,
    "top_p": 0.7,
    "temperature": 0.8,
    "classifier_free_guidance": 5
      };

      try {
        // Make a POST request to your backend endpoint
        const response = await axios.post('http://localhost:5000/music/getGradioMusic', requestData);

        // Handle the response, you can set musicData here
        setMusicData(response.data);
        console.log(response.data)

        // Update prompts, promptHistory, and currentPrompt
        setPrompts([...prompts, currentPrompt]);
        setPromptHistory([...promptHistory, currentPrompt]);
        setCurrentPrompt('');
      } catch (error) {
        // Handle any errors from the request
        console.error('Error:', error);
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddPrompt();
    }
  };



return (
  <div className="bg-app-bg border rounded-lg  shadow-md w-full" >
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

          <svg style={{ color: "rgb(46, 175, 255)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>ionicons-v5-q</title><path d="M16,464,496,256,16,48V208l320,48L16,304Z" fill="#2eafff"></path></svg>
        </button>
      </div>

    </div>
    <div className="flex items-center justify-center border border-gray-300 p-6 rounded-md w-90 ">
      {musicData && <audio src={musicData.url}  controls />}
    </div>

  </div>
);
};

export default PromptSection;
