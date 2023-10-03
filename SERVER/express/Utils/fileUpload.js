const cloudinary = require('cloudinary');
const config = require('../config');
const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');


cloudinary.v2.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret_key,
  secure: true,
});


/*
*    input - file - Buffer, file to be uploaded
*    output - string, url of uploaded file
*/
const fileUpload = async (file, resource_type = "auto") => {
  file = path.resolve(__dirname, file);
  try {
    const response = await cloudinary.v2.uploader.upload(file, { resource_type });
    return response.secure_url;
  } catch (error) {
    console.error('An error occurred in uploading the file: \n', error);
    return null;
  }
}


/*
*    input - file - Buffer, file to be uploaded
*    output - string, url of file in temp directory
*/
const createTempUrl = (file, name, resource_type = "auto") => {
  const tempDir = path.join(__dirname, '../temp');
  if (!fs.existsSync(tempDir)) {
    try {
      fs.mkdirSync(tempDir);
    } catch (error) {
      console.error('Error creating .temp directory:', error);
    }
  }

  const musicFilePath = path.join(tempDir, name);
  fs.writeFileSync(musicFilePath, file);

  return musicFilePath;
}

/*
*    input - filePath - string, path of file to be deleted
*/
const deleteTempFile = (filePath) => {
  fs.unlinkSync(filePath);
}

/*
 *    input - string, path of input file
 *    output - string, path of output file
 *    callback - function, node-style callback fn (error, result)        
*/
function videoToAudioConverter(input, output, callback) {
  input = path.resolve(__dirname, input);
  output = path.join(__dirname, output);
  console.log('input: ', input);
  console.log('output: ', output);
  ffmpeg(input)
    .output(output)
    .on('end', function () {
      console.log('conversion ended');
      callback(null);
    }).on('error', function (e) {
      console.log('error: ', e.code, e.msg);
      callback(e);
    }).run();
}


module.exports = {
  fileUpload,
  createTempUrl,
  deleteTempFile,
  videoToAudioConverter,
};