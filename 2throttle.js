// Get a reference to the search input
const searchInput = document.getElementById('search-input');

// Function to simulate a search operation
function search(query) {
    console.log("Searching for:", query); 
}

// Throttle function to limit how often a function is executed
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Wrap our search function with the throttle function
const throttledSearch = throttle(search, 1000);

// Listen for input events on the search input
searchInput.addEventListener('input', function(e) {
    throttledSearch(e.target.value);
});
