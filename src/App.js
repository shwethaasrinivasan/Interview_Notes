import React, { useState } from 'react';
import Cart from './Cart';
import FoodList from './FoodList';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (foodItem) => {
    setCartItems(currentItems => {
      const exists = currentItems.find(item => item.id === foodItem.id);
      if (exists) {
        return currentItems.map(item => 
          item.id === foodItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currentItems, { ...foodItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (foodItemId) => {
    setCartItems(currentItems => {
      const exists = currentItems.find(item => item.id === foodItemId);
      if (exists.quantity === 1) {
        return currentItems.filter(item => item.id !== foodItemId);
      } else {
        return currentItems.map(item => 
          item.id === foodItemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  return (
    <div>
      <h1>Food Cart App</h1>
      <FoodList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
