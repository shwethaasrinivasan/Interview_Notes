import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px' }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
