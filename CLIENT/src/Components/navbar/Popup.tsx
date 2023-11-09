import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import './Test3.css';
//  import TronWeb from 'tronweb';
import MetaFox from "@/assets/MetaMask_Fox.svg.png"
// import TrxLogo from "@/assets/tron-trx-logo.png"
import TronLogo from "@/assets/tronlink.svg"
import CloseIcon from "@/assets/icone-fermer-et-x-rouge.png"
interface PopupProps {
  onClose: () => void; // Function to close the popup
}

declare global {
  interface Window {
    tronWeb: any;
  }
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState<boolean>(true); // New state variable
  const popupRef = useRef<HTMLDivElement>(null);
  const [account2, setAccount2] = useState<string | null>(null);
  
  const checkMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });
          setBalance(balance);
          setPopupVisible(true); // Show popup content after connecting
        } else {
          setPopupVisible(true); // Show popup content with "Connect MetaMask" button
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Install MetaMask please!!');
    }
  };
  
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAccount(accounts[0]);
        const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [accounts[0], 'latest'] });
        setBalance(balance);
        setPopupVisible(true); // Show popup content after connecting
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Install MetaMask please!!');
      window.location.href = 'https://metamask.io/';
    }
  };
  

  const getTronWeb =  ()=>{
    const obj = setInterval(async()=>{
        const tronLink = window.tronLink;
      const response = tronLink.request({method: 'tron_requestAccounts'})
     
      // console.log(response)
      if (response && window.tronWeb.defaultAddress.base58) {
     clearInterval(obj)
     
        const tronweb = window.tronWeb
        const userAddress = tronweb.defaultAddress.base58;
         if (userAddress.length > 0){
          setAccount2(userAddress);
          console.log(setAccount2);
        
       
        const tx = await tronweb.transactionBuilder.sendTrx('TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP', 10, 'TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ')
        const signedTx = await tronweb.trx.sign(tx)
        const broastTx = await tronweb.trx.sendRawTransaction(signedTx)
        console.log(broastTx)
        setPopupVisible(true)
    
  
  }
 }else{
  console.log("Install Tronlink Extension and if it is installed log into your wallet before connecting with the web app")
 }
}
,10)}

// const checkTronWeb = async () => {
//   const tronLink = window.tronLink;

//   if (!tronLink || !tronLink.ready) {
//     console.log("Account not connected yet");
//     return;
//   }

//   try {
//     const response = await tronLink.request({ method: 'tron_requestAccounts' });

//     if (response.code === 200) {
//       console.log(response.message);

//       const getTronweb = async () => {
//         const intervalId = setInterval(async () => {
//           if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
//             clearInterval(intervalId);
//             console.log("Yes, catch it:", window.tronWeb.defaultAddress.base58);

//             const tronweb = window.tronWeb;
//             const userAddress = tronweb.defaultAddress.base58;

//             try {
//               if (userAddress.length > 0) {
//                 setAccount2(userAddress);
//                 const tx = await tronweb.transactionBuilder.sendTrx(
//                   'TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP',
                  
//                   10,
//                   'TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ'
//                   TTSFjEG3Lu9WkHdp4JrWYhbGP6K1REqnGQ
//                 );
//                 const signedTx = await tronweb.trx.sign(tx);
//                 const broastTx = await tronweb.trx.sendRawTransaction(signedTx);
//                 console.log(broastTx);
//                 setPopupVisible(true);
//               } else {
//                 setPopupVisible(true);
//               }
//             } catch (error) {
//               console.log(error);
//             }
//           } else {
//             console.log('Unexpected Error occured');
//           }
//         }, 10);
//       };

//       getTronweb();
//     } else {
//       console.log('User rejected the request');
//     }
//   } catch (error) {
//     console.error('Error while requesting accounts:', error);
//   }
// };

useEffect(() => {
  checkMetaMask();
  // const HttpProvider = TronWeb.providers.HttpProvider;
  // const fullNode = new HttpProvider('https://api.trongrid.io');
  // const solidityNode = new HttpProvider('https://api.trongrid.io');
  // const eventServer = 'https://api.trongrid.io/';

  // const tronWeb = new TronWeb(
  //   fullNode,
  //   solidityNode,
  //   eventServer,
  // );
}, []);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [onClose]);

return (
  <AnimatePresence>
    {popupVisible && ( // Conditionally render the popup content
      <motion.div
        ref={popupRef}
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: 'easeOut',
            duration: 0.15,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.75,
          transition: {
            ease: 'easeIn',
            duration: 0.15,
          },
        }}
        className="fixed top-2 right-2 bottom-2 w-2/3 md:w-1/4  z-9999 p-4 flex flex-col items-center justify-center h-60 bg-gray-800 rounded-xl"
      >

        <img width={25}
          src={CloseIcon}
          alt="Close"
          className="absolute top-2 right-3 cursor-pointer hover:scale-105"
          onClick={onClose}

        />
        {/* <div className="p-4 flex items-center justify-center">
              <motion.button
                onClick={onClose}
                className="mt-0 px-5 py-1 bg-pink-500 text-white rounded"
              >
                Close
              </motion.button>
            </div> */}
        <div className="mt-1 flex flex-col scale-75">
          {account && balance ? (
            <div>
               <img src={MetaFox} width={30} style={{ marginRight: '10px' }} />
              <h3 className="text-pink-600 mt-2 ">Account Address:</h3> {account}
              <h3 className="text-pink-600 mt-2 ">Account Balance: </h3>
                {balance}
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: "2px" }} className='scale-150' >
              <img src={MetaFox} width={30} style={{ marginRight: '10px' }} />
              <button
                className=" bg-transparent text-white rounded font-semibold"
                onClick={connectWallet}
              >
                Connect MetaMask
              </button>
            </div>

          )}
        </div>

        <div className="mt-1 flex flex-col scale-75">
           {account2 ? (
            <div>
              <img src={TronLogo} width={30} style={{ marginRight: '15px', }} />
            
              <h2 className="text-blue-600 mt-2">Account Address: </h2> {account2}
              {/* <h3 className="text-pink-600 mt-2">Account Balance: </h3>
              {balance} */}
           </div>
          ) : ( 
            <div style={{ display: 'flex', alignItems: 'center', paddingTop: "4px" }} className='scale-150' >
              <img src={TronLogo} width={30} style={{ marginRight: '15px', }} />
              <button
                className="px-1 bg-transparent text-white rounded font-semibold"
                onClick={getTronWeb}
              >
                Connect TronLink
              </button>
            </div>
)}
        
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
};

export default Popup;