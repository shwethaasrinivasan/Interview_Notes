import React, { useState } from "react";

const items = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Berry",
  "Grape",
];

const AutoCompleteSearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);

    const filteredSuggestions = userInput
      ? items.filter((item) =>
          item.toLowerCase().startsWith(userInput.toLowerCase())
        )
      : [];

    setSuggestions(filteredSuggestions);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {suggestions.length > 0 && (
        <ul style={{ listStyleType: "none", margin: 5, padding: 0}}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => setQuery(suggestion)}
              style={{ cursor: "pointer" }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteSearchBar;
