import React from 'react';

function SearchFilterSort({ onSearch, onFilter, onSort, filter }) {
  return (
    <div className="SearchFilterSort">
      <input type="text" placeholder="Search..." onChange={onSearch} />
      <button className='sort-button' onClick={() => onSort("name")}>Sort by Name</button>
      <button className='veg-only-button' onClick={() => onFilter("veg")}>{filter === 'veg' ? 'Show All' : 'Veg Only'}</button>
    </div>
  );
}

export default SearchFilterSort;
