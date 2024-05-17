// 1. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.

// Example:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// 2. First Unique Character in a String
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Example:
// Input: s = "leetcode"
// Output: 0

// 3. Valid Palindrome
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Example:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true

// 4. String Compression
// Given an array of characters chars, compress it using the following algorithm: Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length. The function should return the compressed string stored in the input character array.
// Example:
// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

// 5. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

// Example:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// 6. Implement strStr()
// Implement strStr(). Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. For the purpose of this problem, we will return 0 when needle is an empty string.

// Example:
// Input: haystack = "hello", needle = "ll"
// Output: 2
// 7. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// const s = ["h", "e", "l", "l", "o"]; // console.log(s.reverse()); 

// function revStr(str){
// let left = 0;
// let right = str.length-1;

// while(left < right){
//     let temp = str[left]
//     s[left] = s[right]
//     str[right] = temp
    
//     left++
//     right--
// }
// }
// revStr(s)
// console.log(s)



// function revWords(words){
// const rev = words.reverse().join('')
// }

// const words = ["hello", "where", "are", "you"];

// function revStrWords(words) {
//     let left = 0;
//     let right = words.length - 1;

//     while (left < right) {
//         let temp = words[left];
//         words[left] = words[right];
//         words[right] = temp;

//         left++;
//         right--; 
//     }
// }

// revStrWords(words);

// console.log(words); // Output: ["you", "are", "where", "hello"]


// function revWords(words) {
//     const rev = words.reverse().join(' '); // Added space for joining words
//     return rev;
// }

// const words1 = ["hello", "where", "are", "you"];
// console.log(revWords(words1)); // Output: "you are where hello"

// function revCharWords(words){
//     const revcharwords = words.map(word => word.split('').reverse().join(''))
//     revcharwords.reverse();
//     return revcharwords.join(' ')
// }

// const words2 = ["hello", "where", "are", "you"];
// console.log(revCharWords(words2));


function reverseCharsAndJoinWords(words) {
    // Manually reverse characters in each word
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let charArray = word.split('');
        let left = 0;
        let right = word.length - 1;
        while (left < right) {
            // Swap characters
            let temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp;

            left++;
            right--;
        }
        words[i] = charArray.join('');
    }

    // Reverse the order of the words
    let left = 0;
    let right = words.length - 1;
    while (left < right) {
        // Swap words
        let temp = words[left];
        words[left] = words[right];
        words[right] = temp;

        left++;
        right--;
    }

    // Join the words into a single string
    return words.join(' ');
}

const words = ["hello", "where", "are", "you"];
const result = reverseCharsAndJoinWords(words);
console.log(result); // Output: "uoy era erehw olleh"


