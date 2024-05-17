import React, { useState } from 'react';

function ImageButtons() {
  // State to manage the displayed image
  const [imageUrl, setImageUrl] = useState('');

  // Array of image URLs or paths
  const images = [
    'url/to/your/image1.jpg',
    'url/to/your/image2.png',
    'url/to/your/image3.jpg',
    'url/to/your/image4.png',
    'url/to/your/image5.jpg'
  ];

  // Function to handle button click
  // Receives an index to identify which image to display
  const handleClick = (index) => {
    setImageUrl(images[index]); // Update the imageUrl based on the button clicked
  };

  return (
    <div>
      {/* Generate buttons based on the images array */}
      {images.map((_, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          Button {index + 1}
        </button>
      ))}
      {/* Display the image if imageUrl is not empty */}
      {imageUrl && <img src={imageUrl} alt="Selected" />}
    </div>
  );
}

export default ImageButtons;
