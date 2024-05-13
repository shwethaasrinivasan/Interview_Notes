function longestPalindrome(s) {
    const n = s.length;
    let maxLength = 1;
    let start = 0;

    // Initialize a 2D array to track whether substrings are palindromes
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    // All substrings of length 1 are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // Check for palindromes of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            maxLength = 2;
            start = i;
        }
    }

    // Check for palindromes of length >= 3
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                if (len > maxLength) {
                    maxLength = len;
                    start = i;
                }
            }
        }
    }

    return s.substring(start, start + maxLength);
}


const inputString = "cbbd";
const result = longestPalindrome(inputString);
console.log("Longest palindromic substring:", result);


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from