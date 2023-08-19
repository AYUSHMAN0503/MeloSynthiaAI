import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from '@chakra-ui/react';
import BuyNFTs from './buyNFTs';
import SellNFTs from './SellNFTs';
import { Link } from 'react-router-dom';


const MarketplacePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-white">Marketplace</h1>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Buy</Tab>
          <Tab>Sell</Tab>
        </TabList>
        <TabPanel>
          <BuyNFTs />
        </TabPanel>
        <TabPanel>
          <SellNFTs />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MarketplacePage;
