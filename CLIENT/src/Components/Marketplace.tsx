import React from 'react';
import { Tabs, TabList, Tab, TabPanel,TabPanels } from '@chakra-ui/react';
import BuyNFTs from './BuyNFTs';
import SellNFTs from './SellNFTs';

const Marketplace= () => {
  return (
    <div className='pt-8'>
      <h1 className="text-2xl font-semibold mb-4 text-white">Marketplace</h1>
      <Tabs>
         <TabList>
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
