import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import './Test3.css';

interface PopupProps {
  onClose: () => void; // Function to close the popup
}


const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState<boolean>(false); // New state variable
  const popupRef = useRef<HTMLDivElement>(null);

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
      window.location.href = 'https://metamask.io/';
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

  useEffect(() => {
    checkMetaMask();
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
          className="fixed top-2 right-2 bottom-2 w-1/5 z-9999 p-4 flex flex-col items-center justify-center h-[200%] bg-gray-800 rounded-xl "
        >
          <div className="mt-1 flex flex-col">
            {account && balance ? (
              <div>
                <h3 className="text-pink-600">Account Address:</h3> {account}
                <h3 className="text-pink-600">Account Balance: </h3>
                {balance}
              </div>
            ) : (
              <div>
                <button
                  className="px-7 py-4 bg-cyan-500 text-white rounded"
                  onClick={connectWallet}
                >
                  Connect MetaMask
                </button>
              </div>
            )}
            <div className="p-4 flex items-center justify-center">
              <motion.button
                onClick={onClose}
                className="mt-0 px-5 py-1 bg-gray-500 text-white rounded"
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;