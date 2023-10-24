const gradioGenerateMusicParams = [
  { name: "model", description: "model name" },
  { name: "text", description: "query to generate music" },
  { name: "audio", description: "audio file to generate music" },
  { name: "duration", description: "duration of the generated music" },
  { name: "top_k", description: "top k" },
  { name: "top_p", description: "top p" },
  { name: "temperature", description: "temperature" },
  { name: "classifier_free_guidance", description: "classifier free guidance" }
];

const musicParams = [
  { name: "filename", description: "filename" },
]

const getByPromptParams = [
  { name: "prompt", description: "prompt" },
]


module.exports = {
  gradioGenerateMusicParams,
  musicParams,
  getByPromptParams
}