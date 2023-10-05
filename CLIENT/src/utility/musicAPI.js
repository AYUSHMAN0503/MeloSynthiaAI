import axios from 'axios';

const generateMusic = async (prompt) => {
  try {
    const requestData = {
      "model": "melody",
      "text": prompt,
      "audio": "https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav",
      "duration": 1,
      "top_k": 50,
      "top_p": 0.7,
      "temperature": 0.8,
      "classifier_free_guidance": 5
    };

    const response = await axios.post(`${import.meta.env.VITE_EXPRESS_URL}/music/generate`, requestData);
    console.log({ response: response.data });

    return response.data.responseData;

  } catch (error) {
    console.error(error);
  }
}

async function fetchData(filename) {
  console.log('fetching...', filename);
  try {
    const response = await axios.post('http://localhost:5000/music/get', { filename });
    if (response.data.status === 500) {
      throw new Error('Failed to fetch data');
    }
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function scheduleFetchWithRetry(musicToken, maxRetries = 5) {
  console.log("started scheduled music fetch: ", musicToken);
  const initialDelay = Math.floor(musicToken.halt * 1000);
  const subsequentDelay = 10000;

  console.log("initial delay: ", initialDelay, "ms");

  // first initial request to check if music is already generated
  const data = await fetchData(musicToken.filename);
  if (data.status === 200 && data.success) {
    console.log("music already generated, returning data: ", data);
    return data;
  }

  return new Promise(async (resolve, reject) => {
    const fetchDataAndRetry = async (retryCount) => { // Removed musicToken parameter here
      try {
        const data = await fetchData(musicToken.filename);
        console.log("fetchDataAndRetry: ", data.status, retryCount)

        if (data.status === 200 && !data.success && retryCount < maxRetries) {
          console.log("retry scheduled after: ", subsequentDelay, "ms")
          setTimeout(() => {
            fetchDataAndRetry(retryCount + 1);
          }, subsequentDelay);
        }
        else if (data.status === 200 && data.success) resolve(data);
        else reject("Failded to fetch music");

      } catch (error) {
        if (retryCount < maxRetries) {
          setTimeout(() => {
            fetchDataAndRetry(retryCount + 1);
          }, subsequentDelay);
        } else {
          reject(error);
        }
      }
    };

    setTimeout(() => {
      fetchDataAndRetry(0);
    }, initialDelay);
  });
}





export { generateMusic, scheduleFetchWithRetry };