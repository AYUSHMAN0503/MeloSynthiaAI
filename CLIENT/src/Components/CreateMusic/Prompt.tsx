import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateMusic, scheduleFetchWithRetry } from '@/utility/musicAPI';


interface MusicData {
  url: string; // Define the url property in the MusicData interface
}
interface MusicToken {
  filename: string;
  halt: number;
  status: number;
}

const PromptSection: React.FC = () => {
  // const [prompts, setPrompts] = useState<string[]>(['Hello, how can I assist you today?']);
  const [currentPrompt, setCurrentPrompt] = useState<string>('an gentle warm music with harp');
  // const [promptHistory, setPromptHistory] = useState<string[]>([]);
  
 
  const [musicData, setMusicData] = useState<MusicData | null>(null);

  const [musicToken, setMusicToken] = useState<MusicToken | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // comment old integration for backup 
  // const handleAddPrompt = async () => {
  //   if (currentPrompt.trim() !== '') {
  //   const requestData = {
  //   "model": "melody",
  //   "text": currentPrompt,
  //   "audio": "https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav",
  //   "duration": 1, 
  //   "top_k": 50,
  //   "top_p": 0.7,
  //   "temperature": 0.8,
  //   "classifier_free_guidance": 5
  //     };

  //     try {
  //       // Make a POST request to your backend endpoint
  //       const response = await axios.post('/music/getGradioMusic', requestData);

  //       // Handle the response, you can set musicData here
  //       setMusicData(response.data);
  //       console.log(response.data)

  //       // Update prompts, promptHistory, and currentPrompt
  //       setPrompts([...prompts, currentPrompt]);
  //       setPromptHistory([...promptHistory, currentPrompt]);
  //       setCurrentPrompt('');
  //     } catch (error) {
  //       // Handle any errors from the request
  //       console.error('Error:', error);
  //     }
  //   }
  // };

  const handleAddPrompt = async () => {
    if (!musicToken?.filename) {
      if (!currentPrompt.trim()) return setError("Please enter a prompt");
      console.log("Generating music with prompt: ", {currentPrompt});
      setIsLoading(true);
      const response:MusicToken = await generateMusic(currentPrompt);
      console.log({response});
      if (response.status !== 200) {
        setMusicToken(null);
        console.log("Could not generate music");
      } else {
        setMusicToken(response);
        console.log("Music generation request successful");
        scheduleFetchWithRetry(response)
        .then((data) => {
          console.log('Fetched data:', data);
          setMusicData({url: data.url})
          setError(null);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
      }
    } else {
      setIsLoading(true);
      scheduleFetchWithRetry(musicToken)
        .then((data) => {
          console.log('Fetched data:', data);
          setMusicData({url: data.url})
          setError(null);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
          setError(null);
        });
    }
  }

  useEffect(()=> {
    console.log({musicToken})
  }, [musicToken]);

  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPrompt(event.target.value);
    setMusicToken(null);
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddPrompt();
    }
  };

  {/*Redirection ka code*/}
  const Navigate = useNavigate(); 
  const handleMintAsNFT = () => {
    // Div or backend devs can add any necessary logic here before the redirection
    
    Navigate('/UploadForm');
  };


return (
  <>
  <div className="bg-app-bg border rounded-lg  shadow-md w-full h-60" >
    <div className="bg-app-bg rounded-lg p-4 shadow-md w-full">
      <div className="flex flex-col space-y-3">
        <h3 className='text-white font-semibold'>Enter your prompt here:</h3>
      </div>
      <div className="flex mt-4 px-0.5 h-14 ">
        <input
          type="text"
          className="flex-grow border-zinc-700 border  rounded-l-md p-2  text-gray-700 focus:outline-none focus:ring focus:border-blue-300 "
          placeholder="A pop music with Selena Gomez song's beat..."
          value={currentPrompt}
          onChange={handlePromptChange}
          onKeyPress={handleKeyPress}

        />
        <button
          className="bg-white border-zinc-00 border text-white rounded-r-md p-2 ml-1 hover:bg-blue-600 transition duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-900:"
          onClick={handleAddPrompt}
          disabled={isLoading}
        >

          <svg style={{ color: "rgb(46, 175, 255)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>Send</title><path d="M16,464,496,256,16,48V208l320,48L16,304Z" fill="#2eafff"></path></svg>
        </button>
      </div>

    </div>
    <div className="flex items-center justify-center border-t border-gray-300 p-6 rounded-md w-90 mt-4 ">
      
      {musicData && !isLoading && <audio src={musicData.url} controls  />}
      {isLoading 
      ? <p className='text-base text-blue-600'>
          Loading...&nbsp;&nbsp;&nbsp;&nbsp;
          {musicToken 
          ? (`estimated time: ${Math.floor(musicToken.halt)} sec`) 
          : ('estimated time: N/A')}
        </p> 
      : error && <p className=" text-base text-red-500">{error}</p>}
    </div> 
    </div>
    



    
   <div>
  {/* dibianchu ke nft minting ke lie button*/}
  <button disabled={isLoading} className='border-2 rounded-lg m-5 p-3 text-white bg-sky-600 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-900'onClick={handleMintAsNFT}>
      Mint as NFT
  </button>

 </div>

  {/* <div className=' w-full'>
  <textarea name="" id="" className='w-full rounded-lg p-2 text-black bg-transparent border-2'></textarea>
 </div> */}
 </>
);
};

export default PromptSection;
