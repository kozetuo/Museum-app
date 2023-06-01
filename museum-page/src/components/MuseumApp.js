import React, { useState } from 'react';
import InventoryList from './InventoryList';

const MuseumApp = () => {
  const [artWorks, setArtWorks] = useState([]);

  // Function to add a new art work to the inventory
  const addArtWork = (newArtWork) => {
    newArtWork.image = URL.createObjectURL(newArtWork.image);
    setArtWorks([...artWorks, newArtWork]);
  };

  return (
    <div>
      <h1>Museum Inventory Management</h1>
      <InventoryList artWorks={artWorks} />
    </div>
  );
};

export default MuseumApp;
