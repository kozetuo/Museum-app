import React from 'react';
import ArtWork from './ArtWork';

const InventoryList = ({ artWorks }) => {
  return (
    <div>
      <h2>Art Works</h2>
      {artWorks.map((artWork, index) => (
        <ArtWork key={index} artWork={artWork} />
      ))}
    </div>
  );
};

export default InventoryList;
