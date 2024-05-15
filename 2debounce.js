// Get a reference to the search input
const searchInput = document.getElementById('search-input');

// Function to simulate a search operation
function search(query) {
    console.log("Searching for:", query); 
}

// Debounce function to limit how often a function is executed
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Wrap our search function with the debounce function
const debouncedSearch = debounce(search, 500);

// Listen for input events on the search input
searchInput.addEventListener('input', function(e) {
    debouncedSearch(e.target.value);
});
