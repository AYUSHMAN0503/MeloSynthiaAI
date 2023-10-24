// import React, { useState, ChangeEvent, FormEvent } from "react";

import { ChangeEvent, FormEvent, useState } from "react";

// const FileUpload: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [cid, setCid] = useState<string>("");
//   const [transaction, setTransaction] = useState<string>("");

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     try {
//       if (file) {
//         const formData = new FormData();
//         formData.append("file", file);

//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         const response = await fetch('http://localhost:6000/upload', {
//           method: 'POST',
//           body: formData,
//         })
//           .then(response => response.json())
//           .then(data => {
//             setCid(data.cid);
//             setTransaction(data.transactionHash);
//             console.log(data.cid);
//             console.log(data.transactionHash);
//           })
//           .catch(error => {
//             console.error(error);
//           });
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };

//   const retrieveFile = (event: ChangeEvent<HTMLInputElement>) => {
//     try {
//       const data = event.target.files?.[0];
//       setFile(data || null);
//     } catch (error) {
//       alert("Retrieve File Does Not Work");
//     }
//   };

//   return (
//     <>
//       <div className="max-w-md mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
//         {cid && (
//           <a href={`https://${cid}.ipfs.dweb.link`}>
//             <img src={`https://${cid}.ipfs.dweb.link`} height={"250px"} alt="Uploaded" />
//           </a>
//         )}
//       </div>
//       <div className="transaction">
//         {transaction && (
//           <a href={`https://mumbai.polygonscan.com/tx/${transaction}`}>
//             Transaction Details
//           </a>
//         )}
//       </div>
//       <div className="form">
//         <form onSubmit={handleSubmit}>
//           <input type="file" className="choose" onChange={retrieveFile} />
//           <button type="submit" className="btn">
//             NFT Minter
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default FileUpload;
const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [cid, setCid] = useState<string>("");
    const [transaction, setTransaction] = useState<string>("");
  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          
          const response = await fetch('http://localhost:8080/upload', {
            method: 'POST',
            body: formData,
          });
  
          const data = await response.json();
  console.log(data)
          setCid(data.cid);
          setTransaction(data.transactionHash);
          console.log(data.cid);
          console.log(data.transactionHash);
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
      <div className="img-ctr">
    {cid && <a href={`https://${cid}.ipfs.dweb.link`}><img src={`https://${cid}.ipfs.dweb.link`} height={"250px"} /></a>}
    </div>
    <div className="transaction ">
     {transaction && <a href={`https://mumbai.polygonscan.com/tx/${transaction}`}>Transaction Detials</a>}
</div>
      <div className="container mx-auto p-4  bg-pink-500 rounded-lg">
        <form className="mb-4 " onSubmit={handleSubmit}>
          <input type="file"
           accept=".jpg, .jpeg, .mp3, .mp4"
           
           onChange={retrieveFile} />
          <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-1 px-4 mt-2 rounded" type="submit">Upload</button>
        </form>
        <p >
        <span className="font-bold">CID:</span> {cid}</p>
        <p > 
          <span  className="font-bold">Transaction Hash:</span> {transaction}</p>
      </div>
      </div>
    );
    
  };
  
  export default FileUpload;
  