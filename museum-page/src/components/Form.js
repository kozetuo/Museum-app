import React, { useState } from 'react';


const Form = ({ addArtWork }) => {
  const [artWork, setArtWork] = useState({
    name: '',
    genre: '',
    artist: '',
    completionYear: '',
    description: '',
    location: '',
    isFeatured: false,
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArtWork({ ...artWork, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setArtWork({ ...artWork, image: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addArtWork(artWork);
    setArtWork({
      name: '',
      genre: '',
      artist: '',
      completionYear: '',
      description: '',
      location: '',
      isFeatured: false,
      image: null,
    });
  };

  return (
    <div className="form-container">
      <h2>Add Artwork</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of Artwork:</label>
        <input type="text" id="name" name="name" value={artWork.name} onChange={handleInputChange} />

        <label htmlFor="genre">Genre:</label>
        <input type="text" id="genre" name="genre" value={artWork.genre} onChange={handleInputChange} />

        <label htmlFor="artist">Artist:</label>
        <input type="text" id="artist" name="artist" value={artWork.artist} onChange={handleInputChange} />

        <label htmlFor="completionYear">Year of Completion:</label>
        <input type="text" id="completionYear" name="completionYear" value={artWork.completionYear} onChange={handleInputChange} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={artWork.description} onChange={handleInputChange} />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={artWork.location} onChange={handleInputChange} />

        <label htmlFor="isFeatured">Featured:</label>
        <input type="checkbox" id="isFeatured" name="isFeatured" checked={artWork.isFeatured} onChange={handleInputChange} />

        <label htmlFor="image">Upload Artwork:</label>
        <div className="upload-container">
          <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
          <label htmlFor="image" className="upload-button">Choose Image</label>
        </div>
        {artWork.image && <span className="file-name">{artWork.image.name}</span>}

        <button type="submit">Add Artwork</button>
      </form>
    </div>
  );
};

export default Form;
