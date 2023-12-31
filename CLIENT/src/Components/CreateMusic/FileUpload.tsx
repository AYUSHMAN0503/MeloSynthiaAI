// import React, { useState, ChangeEvent, FormEvent } from "react";

import { ChangeEvent, FormEvent, useState } from "react";


const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [cid, setCid] = useState<string>("");


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(`${import.meta.env.VITE_EXPRESS_URL}/nft/upload`, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        setCid(data.cid);

        console.log(data.cid);

      }
    } catch (error) {
      alert(error);
    }
  };

  const retrieveFile = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const data = event.target.files?.[0];
      setFile(data || null);
    } catch (error) {
      alert("Retrieve File Does Not Work");
    }
  };

  return (
    <div>
      <div className="img-ctr flex items-center justify-center p-2">
        {cid && <audio src={`https://${cid}.ipfs.dweb.link`} controls></audio>}
      </div>
      <div className="transaction ">

      </div>
      <div className="container mx-auto p-4  bg-blue-300 rounded-lg">
        <form className="mb-4 " onSubmit={handleSubmit}>
          <input type="file"
            accept=".mp3, .mp4"
            onChange={retrieveFile} />
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-1 px-4 mt-2 rounded" type="submit">Upload</button>
        </form>
        <p className="">
          <span className="font-bold">CID:</span>
           {cid}
        </p>

      </div>
    </div>
  );

};

export default FileUpload;
