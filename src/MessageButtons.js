import React, { useState } from 'react';

function MessageButtons() {
  // State to manage the displayed message
  const [message, setMessage] = useState('');

  // Array of messages
  const messages = [
    'Message for Button 1',
    'Message for Button 2',
    'Message for Button 3',
    'Message for Button 4',
    'Message for Button 5'
  ];

  // Function to handle button click
  // Receives an index to identify which message to display
  const handleClick = (index) => {
    setMessage(messages[index]); // Update the message based on the button clicked
  };

  return (
    <div>
      {/* Generate buttons based on the messages array */}
      {messages.map((_, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          Button {index + 1}
        </button>
      ))}
      {/* Display the message */}
      <p>{message}</p>
    </div>
  );
}

export default MessageButtons;
