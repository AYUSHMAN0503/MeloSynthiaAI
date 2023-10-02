import React, { useState } from 'react';

function UploadForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (file) {
      // Handle NFT creation logic here, e.g., send data to a backend API

      // Clear form fields
      setTitle('');
      setDescription('');
      setFile(null);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">NFT creation form!!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 mb-1">Give your NFT a name</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            style={{ fontWeight: title ? 'bold' : 'normal' }}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600 mb-1">Describe its details</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            rows={4}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-600 mb-1">Choose File</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".jpg, .png, .gif"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="file"
            className={`${
              file ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'
            } text-white py-2 px-4 rounded cursor-pointer block text-center`}
          >
            {file ? 'Change File' : 'Browse...'}
          </label>
          {file && (
            <span className="text-gray-600 block mt-2">Selected File: {file.name}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none w-full"
          disabled={file ? false : true}
        >
          Upload NFT
        </button>
      </form>
    </div>
  );
}

export default UploadForm;
