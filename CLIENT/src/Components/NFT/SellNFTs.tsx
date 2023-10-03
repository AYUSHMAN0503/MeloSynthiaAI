import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Animatedpage from '../Animatedpage';
import { LinearGradient } from 'react-text-gradients';


const SellNFTs = () => {
  // Logic to handle listing NFTs for sale

  return (
    <Animatedpage>
    <div>
      <div className='mt-20  ml-10 min-h-screen'>
      <h1 className="text-5xl font-semibold relative"> 
        <LinearGradient gradient={['to left', '#17acff ,#ff68f0']} className="gradient-title">
          Sell your NFTs!!   
        </LinearGradient> 
        <div className="relative bg-cyan-400 bottom-0 left-0 mt-2 w-1/4 h-0.5"></div>
      </h1>
      <p className='text-slate-400 mt-12'>Create, curate, and manage your unique NFTs to sell & earn.</p>
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
