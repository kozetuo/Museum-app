import React from 'react';

const ArtWork = ({ artWork }) => {
  const { name, genre, artist, completionYear, description, location, isFeatured, image } = artWork;

  const artworkStyle = {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #333',
    borderRadius: '4px',
    backgroundColor: '#111',
    transition: 'border-color 0.3s ease',
    overflow: 'hidden',
    position: 'relative',
    maxWidth: '4000px', // Set maximum width for the artwork container
  };

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    transition: 'opacity 0.5s ease',
    position: 'absolute',
    top: '50%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '300px', // Limit maximum height for the image
  };

  return (
    <div style={artworkStyle}>
      <h3>{name}</h3>
      <p>Genre: {genre}</p>
      <p>Artist: {artist}</p>
      <p>Year of Completion: {completionYear}</p>
      <p>Description: {description}</p>
      <p>Location: {location}</p>
      <p>Featured: {isFeatured ? 'Yes' : 'No'}</p>
      {image && (
        <div>
          <img style={imgStyle} src={URL.createObjectURL(image)} alt="Artwork" />
        </div>
      )}
    </div>
  );
};

export default ArtWork;
