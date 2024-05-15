const initialItems = [
    { id: 1, name: 'Pizza', description: 'Delicious Veg pizza', category: 'veg' },
    { id: 2, name: 'Burger', description: 'Tasty burger', category: 'non-veg' },
    { id: 3, name: 'Chips', description: 'Potato Chips', category: 'veg' },
    { id: 4, name: 'Dosa', description: 'Crispy Dosa', category: 'veg' },
    { id: 5, name: 'Bread', description: 'Soft Bread', category: 'veg' },
    { id: 6, name: 'Omelette', description: 'Egg', category: 'non-veg' },
  ];
  
  const handleSearch = (searchNames) => {
    // Ensure searchNames is always an array
    const namesArray = Array.isArray(searchNames) ? searchNames : [searchNames];
    //console.log(namesArray)
    
    const lowerCaseSearchNames = namesArray.map(name => name.toLowerCase());
    //console.log(lowerCaseSearchNames)
  
    const result = initialItems.filter(item => lowerCaseSearchNames.some(searchName => item.name.toLowerCase().includes(searchName)));

    //console.log(typeof result)
    //console.log(Array.isArray(result))
  
    const names = result.map(item => item.name);
  
    //console.log(vegItemNames);
    return names;
  }
  
  //handleSearch('Pizza'); 
  //console.log(handleSearch(['Pizza', 'Dosa'])) 

  console.log(initialItems.sort((a, b) => a.name.localeCompare(b.name)));

  