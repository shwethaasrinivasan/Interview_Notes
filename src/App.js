import React, { Suspense, useState } from 'react';
import FoodItems from "./FoodItems";
import SearchFilterSort from "./SearchFilterSort";
// import Cart from "./Cart";
import "./App.css";

// Lazy load Cart component
const Cart = React.lazy(() => import('./Cart'));

const initialItems = [
  { id: 1, name: "Pizza", description: "Delicious Veg pizza", category: "veg" },
  { id: 2, name: "Burger", description: "Tasty burger", category: "non-veg" },
  { id: 3, name: "Chips", description: "Potato Chips", category: "veg" },
  { id: 4, name: "Dosa", description: "Crispy Dosa", category: "veg" },
  { id: 5, name: "Bread", description: "Soft Bread", category: "veg" },
  { id: 6, name: "Omelette", description: "Egg", category: "non-veg" },
];

function App() {
  const [displayItems, setDisplayItems] = useState(initialItems);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredBySearch = initialItems.filter(
      (item) =>
        item.name.toLowerCase().includes(value) &&
        (filter === "" || item.category === filter) //the category filter only if `filter` is not an empty string
    );
    setDisplayItems(filteredBySearch);
  };
  
  const handleSort = (namekey) => {
    const sorted = [...displayItems].sort((a, b) =>
      a[namekey].localeCompare(b[namekey])
    );
    setDisplayItems(sorted);
  };

  // The purpose of a and b in the .sort((a, b) => ...) method is to provide you two elements of the array so you can decide how they should be ordered relative to each other:

  // If the function returns a negative number, a comes before b.
  // If it returns a positive number, a comes after b.
  // If it returns zero, their order remains unchanged.

  const handleFilter = (category) => {
    const newFilter = filter === category ? "" : category; // It checks if the current filter (filter) is the same as the category being passed into the function (category). If they are the same, it means the user wants to remove the filter (hence, it sets newFilter to an empty string '', effectively clearing the filter). If they are different, it updates newFilter to the new category, indicating the user wants to filter by this new category.
    setFilter(newFilter);
    const filteredByCategory = initialItems.filter(
      (item) => newFilter === "" || item.category === newFilter
    );
    setDisplayItems(filteredByCategory);
  };

  const addToCart = (addedItem) => {
    setCart((currentCart) => {
      const isItemInCart = currentCart.some((item) => item.id === addedItem.id);

      if (isItemInCart) {
        return currentCart.map((item) =>
          item.id === addedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currentCart, { ...addedItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="App">
      <h1 className="title">Food Ordering App</h1>
      <SearchFilterSort
        onSearch={handleChange}
        onFilter={handleFilter}
        onSort={handleSort}
        filter={filter}
      />
      <FoodItems items={displayItems} addToCart={addToCart} />
      <Suspense fallback={<div>Loading Cart...</div>}>
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
      </Suspense>
    </div>
  );
}

export default App;
