**Basic Operations of Food Ordering App are Search, Sort, Filter, Adding and Removing Items to Cart and display items**

# In  App.js

*Handlers/props*

1. handleSearch(changeevent) --> ```const handleSearch = (changeevent) => { ```
   - get the value of event(letters typed in search bar) --> ```const value = changeevent.target.value.toLowerCase();```
   - after typing, we need to filter - so do this --> 
   ```js 
        let filteredBySearch = initialItems.filter((item) =>
            item.name.toLowerCase().includes(value)
            );
   ```
   - if you have clicked category to select veg/others, then filter category using OR operater,
   ```js
       && (filter === "" || item.category === filter) //if empty string, no category filter is applied
   ```
   - Update the hook state variable setting it to filteredBySearch - ```setDisplayItems(filteredBySearch);```

2. handleSort(namekey) - ```const handleSort = (namekey) => {```
   - Compare and sort the display items by using sort and localeCompare methods with [...displayItems].sort((a,b) => a[namekey].localeCompare(c[namekey]) )
   - Again show the sorted items in the display by setting state - setDisplayItems
   ```js
        const sorted = [...displayItems].sort((a, b) =>
            a[namekey].localeCompare(b[namekey])
            );
            setDisplayItems(sorted);
   ```
  
3. handleFilter(category) - ```const handleFilter = (category) => {```
   - we need to again check if existing filter is equal to category by -``` const newFilter = filter === category ? "" : category; ```
   - now set the filter state variable with the newFilter - ``` setFilter(newFilter); ```
   - again return the new filter with category filter and set the display state again similar to search handler.
   ```js
        const filteredByCategory = initialItems.filter((item) =>
            newFilter === "" || item.category === newFilter
            );
            setDisplayItems(filteredByCategory);
    };
   ```

4. addToCart(addItem) - ```const addToCart = (addedItem) => {```
  - Directly start by setting the cart with the setCart state as onclick handler happens immediately calling the cb function.
  - check if items are already in cart by using some method like ```currentCart.some((item)=>item.id === addedItem.id)```
  - if we already see items in cart, return a map array with checking if item.id === addedItem.id ? {...item, quantity: item.quantity} : item 
    other return [...currentCart, {...addedItem, quantity:1 }]
    ```js
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
        ```
5. removeFromCart(ItemId)

  - directly set the setCart state by currentCart with function like, currentCart.map( (item) => item.id===itemId **?** {...item,quantity : item.quantity -1} :item )
    .filter((item) => item.quantity > 0)

  ```js
  const removeFromCart = (itemId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  ```

*Hooks*

1. useState
  - [displayItems, setDisplayItems] = useState(initialItems)
  - [cart, setCart] = useState([])
  - [filter, setFilter] = useState("")

*Events*

1. onChange - in  **SearchFilterSort.js** -onChange={onSearch}
2. onClick - in **FoodItems.js** and **Cart.js** - onClick(() => addToCart(item), removeFromCart(item.id), onSort("name"), onFilter("veg")  )

*Array Methods*

1. filter 
2. map
3. sort
4. localeCompare
5. some

 *props*

 1. items, addToCart - FoodItems

   - When user clicks button items are added to cart, and addToCart method is called with the item selected, 
     this is will be passed to addToCart handler - ``` <button onClick={() => addToCart(item)}>Add to Cart</button> ```

   - Inside the div FoodItemsContainer, after receiving from items, create map array to display the food items {items.map((item)=><div>key={item.id} <h3>{item.name} <button></div>)}

   - Showing --> item.name (item.id is mandatory)

 ```js
const FoodItems = React.memo(({ items, addToCart }) => {
  return (
    <div className="FoodItemsContainer">
      {items.map((item) => (
        <div className="FoodItem" key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
});
 ```

 2. cartItems. removeFromCart - Cart
 
  - To display the cart items inside div cart-container, again create a map array to display cart items and removed items with ternary operator.
  - ```<div>{cartItems.length > 0 ? (cartitems.map((items)=><div>key={item.id} {item.name}- Qty: {item.quantity} <button onClick=>(()=>removeFromCart(item.id)))):(<p> Cart is Empty)}</div>

  - showing - item.name, item.quantity (item.id is mandatory)

 ```js 
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
 ```

 3. onSearch, onFilter, onSort, filter - SearchFilterSort

  - Now we need to create html element input to receive the input from user, under SearchFilterSort div container wrap, input type=text, placeholder, onChange={onSearch},
    <button onClick={()=>onSort("name")}>Sortby Name</button><button onClick={()=>onFilter("veg")}> {filter === "veg" ? "Show All":"Veg Only"} </button>

```js
function SearchFilterSort({ onSearch, onFilter, onSort, filter }) {
  return (
    <div className="SearchFilterSort">
      <input type="text" placeholder="Search..." onChange={onSearch} />
      <button className="sort-button" onClick={() => onSort("name")}>
        Sort by Name
      </button>
      <button className="veg-only-button" 
        onClick={() => onFilter("veg")}>
        {filter === "veg" ? "Show All" : "Veg Only"}
      </button>
    </div>
  );
}
```

 *Optimization*

 1. lazy loading
 2. React.memo/HOC
 3. Suspense

 *CSS*

 1. .button - padding (8px), background-color, color, border:none, border-radius: 4px, cursor:pointer and also do button:hover
 2. .FoodItemsContainer - display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));gap: 20px;
 3. .FoodItem, .cart-container {
    border: 1px solid #33237a;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
  }
  4. .SearchFilterSort {
    display: flex;
    justify-content: space-around; 
    align-items: center; /* This ensures vertical alignment */
    flex-flow: row wrap; 
  }
  
  /* Optional: Specific button styling */
  .SearchFilterSort .sort-button, 
  .SearchFilterSort .veg-only-button {
    margin: 0 8px; /* Increases space between the buttons */
    padding: 8px 12px; 
    background-color: #2766b8;
    color: white; 
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    left:8px;
  }

  
*Calling or returning App*

return (
    <div className="App">
      <h1 className="title">Food Ordering App</h1>
      <SearchFilterSort
        onSearch={handleSearch}
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