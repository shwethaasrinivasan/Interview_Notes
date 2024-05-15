import React from 'react';

const Cart = React.memo(({ cartItems, removeFromCart }) => {
  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className='cart-item' key={item.id}>
            {item.name} - Qty: {item.quantity}
            <button className='cart-button' onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
});

export default Cart;
