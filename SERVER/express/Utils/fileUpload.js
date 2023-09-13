const cloudinary = require('cloudinary');
const config = require('../config');
const fs = require('fs');
const path = require('path');
const videoToAudio = require('video-to-audio');

cloudinary.v2.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret_key,
  secure: true,
});


const fileUpload = async (file, resource_type = "auto") => {
  try {
    const response = await cloudinary.v2.uploader.upload(file, { resource_type });
    return response.secure_url;
  } catch (error) {
    console.error('An error occurred in uploading the file: \n', error);
    return null;
  }
}

const createTempUrl = (file, resource_type = "auto") => {
  const tempDir = path.join(__dirname, '../temp');
  if (!fs.existsSync(tempDir)) {
    try {
      fs.mkdirSync(tempDir);
    } catch (error) {
      console.error('Error creating .temp directory:', error);
    }
  }

  const musicFilePath = path.join(tempDir, 'music.mp3');
  fs.writeFileSync(musicFilePath, file);

  return musicFilePath;
}

const deleteTempFile = (filePath) => {
  fs.unlinkSync(filePath);
}

const videoToAudioConverter = async (videoUrl) => {
  const tempUrl = createTempUrl(videoUrl, "video");
  const audioUrl = await fileUpload(tempUrl, "video");
  deleteTempFile(tempUrl);
  return audioUrl;
}

module.exports = {
  fileUpload,
  createTempUrl,
  deleteTempFile
};