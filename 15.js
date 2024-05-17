let currentIndex = 0;
let matches = [];

function search(text, query, options = {}) {
    const { matchCase = false, regexp = false, byWord = false } = options;
    matches = []; // Reset matches
    currentIndex = 0; // Reset current index

    let searchText = text;
    if (!matchCase) {
        searchText = searchText.toLowerCase();
        query = query.toLowerCase();
    }

    if (regexp) {
        const flags = matchCase ? "g" : "gi";
        const pattern = new RegExp(query, flags);
        matches = [...searchText.matchAll(pattern)].map(match => match.index);
    } else if (byWord) {
        const words = searchText.split(/\s+/);
        words.forEach((word, index) => {
            if (word === query) {
                const regex = new RegExp(`\\b${query}\\b`, matchCase ? "" : "i");
                const match = searchText.match(regex);
                if (match) {
                    matches.push(match.index);
                }
            }
        });
    } else {
        let startIndex = 0;
        let index = searchText.indexOf(query, startIndex);
        while (index !== -1) {
            matches.push(index);
            startIndex = index + query.length;
            index = searchText.indexOf(query, startIndex);
        }
    }
}

function findNext() {
    if (matches.length === 0) {
        console.log("No matches found.");
        return;
    }
    if (currentIndex >= matches.length) {
        currentIndex = 0; // Loop back to the first match
    }
    const matchStartIndex = matches[currentIndex];
    console.log(`Next match at index: ${matchStartIndex}`);
    currentIndex++;
}

function findPrevious() {
    if (matches.length === 0) {
        console.log("No matches found.");
        return;
    }
    if (currentIndex <= 0) {
        currentIndex = matches.length; // Loop to the last match
    }
    currentIndex--;
    const matchStartIndex = matches[currentIndex];
    console.log(`Previous match at index: ${matchStartIndex}`);
}

const text = "Learning to code is fun. Coding is awesome. Code more, learn more.";

search(text, "code", { matchCase: false, regexp: false, byWord: true });
findNext(); // Finds the next occurrence
findNext(); // Finds the next occurrence, loops back if at the end
findPrevious(); // Finds the previous occurrence
