import React, {useState} from 'react';
import { Tabs, TabList, Tab, TabPanel,TabPanels } from '@chakra-ui/react';
import BuyNFTs from './BuyNFTs';
import SellNFTs from './SellNFTs';
import Animatedpage from './Animatedpage';

const Marketplace= () => {
  return (
    <div className='pt-6'>
      <h1 className="text-6xl font-bold mt-1 text-center bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">Marketplace</h1>
         <Animatedpage>
            <h4 className="mb-5 mt-1 font-semibold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text text-center sm:text-1xl md:text-2xl lg:text-3xl">
                An interactive Marketplace to sell and purchase NFTs..
            </h4>
         </Animatedpage>
      
      <Tabs>
         <TabList className="text-white justify-center text-3xl">
            <Tab>Buy</Tab>
            <Tab>Sell</Tab>
         </TabList>

        <TabPanels>
             <TabPanel>
                <BuyNFTs/>
             </TabPanel>
          <TabPanel>
              <SellNFTs/>
           </TabPanel>
       </TabPanels>
     </Tabs>
    </div>
  );
};

export default Marketplace;
