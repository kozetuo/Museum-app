import React, { useState } from 'react';
import InventoryList from './components/InventoryList';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [artWorks, setArtWorks] = useState([]);

  // Function to add a new art work to the inventory
  const addArtWork = (newArtWork) => {
    setArtWorks([...artWorks, newArtWork]);
  };

  return (
    <div>
      <h1>Museum Inventory Management</h1>
      <Form addArtWork={addArtWork} />
      <InventoryList artWorks={artWorks} />
    </div>
  );
};

export default App;
