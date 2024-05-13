function countSubstrings(str) {
    let count = 0;
    const length = str.length;

    // Iterate through each character position in the string, expanding potential palindromes.
    for (let center = 0; center < length * 2 - 1; ++center) {
        // Find the starting positions of potential palindromes.
        let left = center >> 1;
        let right = (center + 1) >> 1;

        // Expand around the center while the characters match and we're within the bounds of the string.
        while (left >= 0 && right < length && str[left] == str[right]) {
            // Increment the palindrome count.
            ++count;
            // Move outwards to check the next characters.
            --left;
            ++right;
        }
    }
    return count
}

console.log(countSubstrings("abc"))

//https://algo.monster/liteproblems/647

// Example String: "abcba"
// Consider the string "abcba", which is a palindrome of odd length (5 characters). We'll see how the function calculates left and right for two different centers: one that falls directly on a character (odd-length palindrome center) and one that falls between characters (even-length palindrome center).

// Odd-Length Palindrome Center: "c" (index 2)
// Center index: 2 * 2 = 4 (since we're iterating through centers, not characters, and considering both characters and spaces between them)
// Left Calculation: center >> 1 = 4 >> 1 = 2
// Right Calculation: (center + 1) >> 1 = 5 >> 1 = 2
// For center index 4 (which corresponds to the character at index 2 in the zero-based array, i.e., "c"), the left and right both start at 2. This is because we're considering the center of an odd-length palindrome, which is directly on a character. Since this is an odd-length palindrome, the initial expansion does not move (left and right are the same), and subsequent expansions will check characters on either side of "c".

// Even-Length Palindrome Center: Between "b" and "c" (indices 1 and 2)
// Center index: 3 (this is a conceptual center for an even-length palindrome and falls between the characters at indices 1 and 2)
// Left Calculation: center >> 1 = 3 >> 1 = 1
// Right Calculation: (center + 1) >> 1 = 4 >> 1 = 2
// For an even-length center, such as between "b" (index 1) and "c" (index 2), left starts at index 1 and right at index 2. This effectively checks for palindromes that have a center between two characters, hence considering even-length palindromes.

// Visualization
// Here's a visual representation for the string "abcba":

// Odd-length center ("c"):

// Initial left and right: both at "c"
// Expansion checks: "b" vs "b", then "a" vs "a"
// Even-length center (between "b" and "c"):

// Initial left at "b" (index 1) and right at "c" (index 2)
// No direct character at center, checks "b" vs "c" (not a palindrome in this case, but the method still applies)
// Conclusion
// The bitwise right shift (>>) effectively adjusts the left and right pointers based on whether the center of the potential palindrome is directly on a character (odd-length palindrome) or between characters (even-length palindrome). This single, elegant mechanism allows the function to seamlessly check for both odd and even length palindromes by iterating through every possible "center" position in the string.