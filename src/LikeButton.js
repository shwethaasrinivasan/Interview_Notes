import React, { useState } from 'react';

function LikeButton() {
  // State to manage the display of the message
  const [messageDisplayed, setMessageDisplayed] = useState(false);

  // Function to handle the click event
  const handleClick = () => {
    setMessageDisplayed(true); // Update state to display the message
  };

  return (
    <div>
      <button onClick={handleClick}>Like</button>
      {/* Conditionally render the message if messageDisplayed is true */}
      {messageDisplayed && <p>You liked this!</p>}
    </div>
  );
}

export default LikeButton;
