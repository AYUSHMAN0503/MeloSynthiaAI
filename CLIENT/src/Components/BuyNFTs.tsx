import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';


const BuyNFTs = () => {
  const [sortOption, setSortOption] = useState('6h');

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <Select value={sortOption} onChange={handleSortChange}>
        <option value="6h">6h</option>
        <option value="12h">12h</option>
        <option value="24h">24h</option>
        <option value="5d">5d</option>
      </Select>
      {/* List of NFTs */}
    </div>
  );
};

export default BuyNFTs;
