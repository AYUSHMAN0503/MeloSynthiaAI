import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateMusic, scheduleFetchWithRetry } from '@/utility/musicAPI';
import { HashLoader} from 'react-spinners'; // Import the ClipLoader

interface MusicData {
  url: string;
}

interface MusicToken {
  filename: string;
  halt: number;
  status: number;
}

const PromptSection: React.FC = () => {
  const [currentPrompt, setCurrentPrompt] = useState<string>('an gentle warm music with harp');
  const [musicData, setMusicData] = useState<MusicData | null>(null);
  const [musicToken, setMusicToken] = useState<MusicToken | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const Navigate = useNavigate();

  const handleAddPrompt = async () => {
    if (!musicToken?.filename) {
      if (!currentPrompt.trim()) return setError("Please enter a prompt");
      setIsLoading(true);
      const response: MusicToken = await generateMusic(currentPrompt);
      if (response.status !== 200) {
        setMusicToken(null);
      } else {
        setMusicToken(response);
        setMusicData(null);
        scheduleFetchWithRetry({ musicToken: response, prompt: currentPrompt })
          .then((data) => {
            setMusicData({ url: data.url });
            setError(null);
          })
          .catch((error) => {
            setError(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    } else {
      setIsLoading(true);
      scheduleFetchWithRetry({ musicToken, prompt: currentPrompt })
        .then((data) => {
          setMusicData({ url: data.url });
          setError(null);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
          setError(null);
        });
    }
  };

  useEffect(() => {
    console.log({ musicToken });
  }, [musicToken]);

  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPrompt(event.target.value);
    setMusicToken(null);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddPrompt();
    }
  };

  const handleMintAsNFT = () => {
    Navigate('/UploadForm');
  };

  return (
    <>
      <div className="bg-app-bg border rounded-lg shadow-md w-full">
        <div className="bg-app-bg rounded-lg p-4 shadow-md w-full">
          <div className="flex flex-row space-y-3">
            <h3 className='text-white font-semibold'>Enter your prompt here:</h3>
          </div>
          <div className="flex mt-4 px-0.5 h-14 ">
            <input
              type="text"
              className="flex-grow border-zinc-700 border rounded-l-md p-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="A pop music with Selena Gomez song's beat..."
              value={currentPrompt}
              onChange={handlePromptChange}
              onKeyPress={handleKeyPress}
            />
            <button
              className="bg-white border-zinc-00 border text-white rounded-r-md p-2 ml-1 hover:bg-blue-600 transition duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-900"
              onClick={handleAddPrompt}
              disabled={isLoading}
            >
              <svg style={{ color: "rgb(46, 175, 255)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><title>Send</title><path d="M16,464,496,256,16,48V208l320,48L16,304Z" fill="#2eafff"></path></svg>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center border-t border-gray-300 p-6 rounded-md w-90 mt-4 ">
          {isLoading ? (
            <div className='text-base text-blue-600 flex items-center'>
              <HashLoader className='p-5' size={30} color={'#00FFFF'} loading={isLoading} />
              <span>
              <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
  {musicToken ? `Estimated time: ${Math.floor(musicToken.halt)} sec` : 'Estimated time: N/A'}
</span>

              </span>
            </div>
          ) : (
            <>
              {musicData && !isLoading && <video src={musicData.url} controls />}
              {error && <p className="text-base text-red-500">{error}</p>}
            </>
          )}
        </div>
      </div>
      <div>
        <button disabled={isLoading} className='border-2 rounded-lg m-5 p-3 text-white bg-sky-600 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-900' onClick={handleMintAsNFT}>
          Mint as NFT
        </button>
      </div>
    </>
  );
};

export default PromptSection;
