import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from '@material-tailwind/react';

interface PopupProps {
  onClose: () => void; // Function to close the popup
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        setAccount(accounts[0]);
        const balance = await window.ethereum.request({ method: "eth_getBalance", params: [accounts[0], "latest"] });
        setBalance(balance);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Install MetaMask please!!");
      window.location.href = "https://metamask.io/";
    }
  };

  return (
    <motion.div
      initial={{ translateX: '5%' }}
      animate={{ translateX: '0%' }}
      exit={{ translateX: '100%' }}
      className="fixed top-0 right-0 bottom-0 w-1/4  z-50 p-4 flex flex-col h-[500%] bg-gray-800 rounded-xl "
    >
     
     <div className="mt-8 flex flex-col">
       {account ? (
         <div className=' '>

           <h3 className="text-pink-600">Account Address:</h3> {account}
           <h3 className="text-pink-600">Account Balance: </h3>{balance}
         </div>
       ) : (
         <Link to="#">
           <button
             className="px-8 py-2 bg-blue-500 text-white rounded mb-2 ml-10 z-10"
             onClick={connectWallet}
             
           >
             Connect MetaMask
           </button>
         </Link>
       )}
       <div className='p-4 flex items-center justify-center'>
        <button
          onClick={onClose}
            className="px-5 py-2 bg-gray-500 text-white rounded"
        >
          Close
        </button>
        </div>
      </div>
     
    </motion.div>
  );
}

export default Popup;
