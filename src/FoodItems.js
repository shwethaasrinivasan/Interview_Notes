import React from 'react';

const FoodItems = React.memo(({ items, addToCart }) => {
  return (
    <div className="FoodItemsContainer">
      {items.map(item => (
        <div className="FoodItem" key={item.id}> 
          <h3>{item.name}</h3>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
});

export default FoodItems;
