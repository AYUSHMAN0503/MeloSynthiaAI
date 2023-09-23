import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Animatedpage from './Animatedpage';


const SellNFTs = () => {
  // Logic to handle listing NFTs for sale

  return (
    <Animatedpage>
    <div>
      <div className='mt-20  ml-10 min-h-screen'>
      <h1 className='text-white text-4xl  underline '>Your Collections</h1>
      <p className='text-white mt-12'>Create, curate, and manage collections of unique NFTs to share and sell.</p>
      <Link to="/NFT" ><motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }} className="bg-cyan-400  text-black font-medium py-2 px-4  my-0.9 rounded-lg shadow-md  mt-8 ">
       Create Collection
      </motion.button>
      </Link>
      </div>
    </div>
    </Animatedpage>
  );
};

export default SellNFTs;
