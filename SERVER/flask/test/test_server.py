queries = [
  "Take this jazz music file and remix it with a modern jazz style, adding some piano improvisations.",
  "Transform this pop song into an electro-pop fusion track, incorporating synthesizers and electronic beats.",
  "Convert this orchestral piece into a classical orchestra arrangement with strings, woodwinds, and brass instruments.",
  "Remix this hip-hop track, infusing it with fresh beats, samples, and a dynamic rap verse.",
  "Take this energetic rock song and create an ambient chillout version, emphasizing atmospheric textures and calming rhythms."
]

api_url = "http://127.0.0.1:5000/music/getGradioMusic"
requestBody = {
    "model": "melody",
    "text": "",
    "audio": "https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav",
    "duration": 1, 
    "top_k": 50,
    "top_p": 0.7,
    "temperature": 0.8,
    "classifier_free_guidance": 5
}

