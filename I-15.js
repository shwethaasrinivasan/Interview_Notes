// function firstUniqChar(s) {
//     const charCount = {};

//     // First pass: Count occurrences of each character
//     for (let char of s) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     // Second pass: Find the first unique character
//     for (let i = 0; i < s.length; i++) {
//         if (charCount[s[i]] === 1) {
//             return i;
//         }
//     }

//     return -1;
// }

// const s = "leetcode";
// console.log(firstUniqChar(s)); // Output: 0

const s1 = "leetcode"

function charCount(s){
    let res = {}
    for(const c of s){
        res[c] = (res[c] || 0) + 1
    }
    return res;
}
const count = charCount(s1)
console.log(count)


function countUniqueCharactersInArray(arr) {
    let combinedString = arr.join(""); // Combine all strings in the array
    let charCount = {};
    let uniqueCount = 0;

    for (const c of combinedString) {
        if (!charCount[c]) {
            uniqueCount++; // Increment for each unique character found
            charCount[c] = true; // Mark this character as found
        }
    }

    return uniqueCount;
}

const arr = ["leetcode", "arrray"];
console.log(countUniqueCharactersInArray(arr)); // This will count unique characters across all strings in the array



function charCount(arr) {
    let res = {};
    for (const str of arr) { // Iterate over each string in the array
        for (const c of str) { // Iterate over each character in the string
            res[c] = (res[c] || 0) + 1; // Count occurrences
        }
    }
    return res;
}

const s3 = ["leetcode", "arrray"];
const count1 = charCount(s3);
console.log(count1);


function countLetters(str) {
    let letterCount = 0;
    for (const c of str) {
        if (c.toLowerCase() != c.toUpperCase()) {
            // This checks if the character is a letter
            letterCount++;
        }
    }
    return letterCount;
}

const s = "leetcode";
console.log(countLetters(s)); // Output: 8


function compress(chars) {
    let index = 0; // Index for writing
    let i = 0; // Index for reading

    while (i < chars.length) {
        let j = i;
        // Count occurrences of the current char
        while (j < chars.length && chars[j] === chars[i]) {
            j++;
        }
        // Write the char
        chars[index++] = chars[i];
        let count = j - i;
        // Write the count if greater than 1
        if (count > 1) {
            let countStr = String(count);
            for (let k = 0; k < countStr.length; k++) {
                chars[index++] = countStr[k];
            }
        }
        // Move to the next group of char
        i = j;
    }

    return index; // Length of the compressed chars array
}

const chars = ["a", "a", "b", "b", "c", "c", "c"];
const compressedLength = compress(chars);
console.log(compressedLength); // Output: 6
console.log(chars.slice(0, compressedLength)); // Output: ["a", "2", "b", "2", "c", "3"]



function compressString(s) {
    let compressed = ""; // Initialize the result string
    let count = 1; // Initialize the count of a character

    for (let i = 0; i < s.length; i++) {
        // Check if the current character is the same as the next character
        if (s[i] === s[i + 1]) {
            count++; // Increment the count if the next character is the same
        } else {
            // If the next character is different, or we're at the end,
            // append the current character and its count if greater than 1
            compressed += `${s[i]}${count > 1 ? count : ''}`; // Using template literals for clarity
            count = 1; // Reset count for the next unique character
        }
    }

    return compressed.length < s.length ? compressed : s; // Return the original string if it's not compressed
}

const s4 = "aabbccc";
console.log(compressString(s4)); // Output: "a2b2c3"



function lengthOfLongestSubstring(s) {
    let maxLength = 0; // Store the maximum length found
    let start = 0; // Start index of the current window
    let charIndexMap = {}; // Map to store the most recent index of each character

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        
        // If the current character is found in the map and its index is within the current window
        if (currentChar in charIndexMap && charIndexMap[currentChar] >= start) {
            // Move the start of the window to the next character after the last occurrence of currentChar
            start = charIndexMap[currentChar] + 1;
        }
        
        // Update the last occurrence of currentChar to the current index
        charIndexMap[currentChar] = end;
        
        // Calculate the length of the current window and update maxLength if it's greater than the current maxLength
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

const s5 = "abcabcbb";
console.log(lengthOfLongestSubstring(s5)); // Output: 3


function strStr(haystack, needle) {
    // Directly return 0 if needle is an empty string
    if (needle === "") return 0;

    // Use indexOf method to find the first occurrence of needle in haystack
    return haystack.indexOf(needle);
}

const haystack = "hello";
const needle = "ll";
console.log(strStr(haystack, needle)); // Output: 2
