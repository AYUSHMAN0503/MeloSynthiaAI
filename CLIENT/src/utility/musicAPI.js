import axios from 'axios';
import.meta.env.VITE_EXPRESS_URL

const generateMusic = async (prompt) => {
  try {
    const requestData = {
      "model": "melody",
      "text": prompt,
      "audio": "https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav",
      "duration": 20,
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
    const response = await axios.post(`${import.meta.env.VITE_EXPRESS_URL}/music/get`, { filename });
    if (response.data.status === 500) {
      console.log('Failed to fetch data');
      throw new Error('Failed to fetch data');
    }
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function scheduleFetchWithRetry(musicToken, maxRetries = 15) {
  console.log("started scheduled music fetch: ", musicToken);
  // const initialDelay = Math.floor(musicToken.halt * 1000);
  const initialDelay = 10000;
  const subsequentDelay = 10000;

  console.log("initial delay: ", initialDelay, "ms");

  // first initial request to check if music is already generated
  const data = await fetchData(musicToken.filename);
  console.log({ initialFetchData: data });
  if (data.status === 200 && (data?.success || data?.url)) {
    console.log("music already generated, returning data: ");
    return data;
  } console.log("music not already there, scheduling fetch");

  return new Promise(async (resolve, reject) => {
    const fetchDataAndRetry = async (retryCount) => { // Removed musicToken parameter here
      try {
        const data = await fetchData(musicToken.filename);
        console.log("fetchDataAndRetry: ", data, retryCount);

        if (data.status === 200 && !data.success && retryCount < maxRetries) {
          console.log("retry scheduled after: ", subsequentDelay, "ms")
          setTimeout(() => {
            fetchDataAndRetry(retryCount + 1);
          }, subsequentDelay);
        }
        else if (data.status === 200 && data.success) resolve(data);
        else if (retryCount >= maxRetries) reject("Server is taking too much time, please try again later.");
        else reject("Something went wrong, please try again later.");
      } catch (error) {
        // if (retryCount < maxRetries) {
        //   setTimeout(() => {
        //     fetchDataAndRetry(retryCount + 1);
        //   }, subsequentDelay);
        // } else {
        //   reject(error);
        // }
        reject("Something went wrong, please try again later.");
      }
    };

    setTimeout(() => {
      fetchDataAndRetry(0);
    }, initialDelay);
  });
}





export { generateMusic, scheduleFetchWithRetry };