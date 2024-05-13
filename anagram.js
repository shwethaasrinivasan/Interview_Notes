//race ~ care

// function anagram(str1,str2){
//     cleaned_str1 = str1.toLowerCase().replace(/[a-zA-Z]/g, '')
//     cleaned_str2 = str2.toLowerCase().replace(/[a-zA-Z]/g, '')
//     str1 = []
//     str2 = []

//     for (const s1 in cleaned_str1){
//         str1.push(s1);
//     }
//     for (const s2 in cleaned_str2){
//         str2.push(s2)
//     }
//     if (str1 === str2){
//     console.log("Valid anagram")

//     }
//     else {
//         console.log("Invalid anagram")
//     }

//Method 1: - with frequency of strings

function isAnagram(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    const cleanedS = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanedT = t.replace(/[^a-zA-Z]/g, '').toLowerCase();

    const freqS = {};
    const freqT = {};

    for (const char of cleanedS) {
        freqS[char] = (freqS[char] || 0) + 1;
    }

    for (const char of cleanedT) {
        freqT[char] = (freqT[char] || 0) + 1;
    }

    for (const char in freqS) {
        if (freqS[char] !== freqT[char]) {
            return false;
        }
    }

    return true;
}


console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

//Method 2 using sorts

function anagram(str1, str2) {
    const cleanedStr1 = str1.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const cleanedStr2 = str2.toLowerCase().replace(/[^a-zA-Z]/g, '');

    const sortedStr1 = cleanedStr1.split('').sort().join('');
    const sortedStr2 = cleanedStr2.split('').sort().join('');

    if (sortedStr1 === sortedStr2) {
        console.log("Valid anagram");
    } else {
        console.log("Invalid anagram");
    }
}


anagram("race", "care"); 



// freqS[char] = (freqS[char] || 0) + 1;
// Copy
// This line is part of a loop iterating over each character in the cleaned string cleanedS. Here's a step-by-step breakdown of what happens during each iteration for this specific line:

// (freqS[char] || 0): This part checks if freqS[char] exists. If it does, it uses its value; if it doesn't (i.e., it is undefined since the character hasn't been encountered before), it uses 0 instead. This is a way to initialize the count for a new character.

// + 1: After deciding the value in the first step, it adds 1 to it. This effectively counts the occurrence of the character.

// freqS[char] = ...;: Finally, it assigns this new count back to freqS[char]. If the character was already in the object, its count is incremented. If it was not, it is added to the object with a count of 1.

// Here's a practical example with the string "banana":

// Iteration 1: char = 'b'
// freqS['b'] is undefined, so it becomes 0 + 1 = 1. Now, freqS = {'b': 1}.

// Iteration 2: char = 'a'
// freqS['a'] is undefined, so it becomes 0 + 1 = 1. Now, freqS = {'b': 1, 'a': 1}.

// Iteration 3: char = 'n'
// freqS['n'] is undefined, so it becomes 0 + 1 = 1. Now, freqS = {'b': 1, 'a': 1, 'n': 1}.

// Iteration 4: char = 'a' again.
// freqS['a'] is 1, so it becomes 1 + 1 = 2. Now, freqS = {'b': 1, 'a': 2, 'n': 1}.

// And so on, until all characters in cleanedS have been iterated over. This mechanism maps each character to its frequency in the string, preparing it for comparison with the frequency map of the other string.

// Understanding and using such a frequency map is a common and efficient way to solve problems related to character counting and anagrams in programming. If you're looking to deepen your understanding of JavaScript and problem-solving strategies, codedamn offers interactive courses that can help you with hands-on practice and real-world examples.