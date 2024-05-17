import React, { useState } from 'react';

const foods = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Burger' },
  { id: 3, name: 'Sushi' },
  { id: 4, name: 'Dosa' },
  { id: 5, name: 'Cake' },
];

const FoodList = ({ addToCart }) => {
  const [filterText, setFilterText] = useState('');
  const [sort, setSort] = useState(false);

  let displayedFoods = foods;

  if (filterText) {
    displayedFoods = displayedFoods.filter(food =>
      food.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  if (sort) {
    displayedFoods = [...displayedFoods].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div>
      <h2>Available Foods</h2>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <button onClick={() => setSort(!sort)}>
        Sort
      </button>
      <ul style={{ listStyleType: "none", margin: 5, padding: 0}}>
        {displayedFoods.map((food) => (
          <li key={food.id}>
            {food.name} <button onClick={() => addToCart(food)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
