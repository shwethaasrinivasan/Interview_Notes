//console.log(isAnagram("anagram", "nagaram")); // true
//console.log(isAnagram("rat", "car")); // false

function validAnagram(str1,str2){
    if (str1.length !== str2.length) {
        return false; // Quick check to discard non-matching lengths
    }
    
    const cleanstr1 = str1.toLowerCase();
    const cleanstr2 = str2.toLowerCase();

    const sortedstr1 = cleanstr1.split("").sort().join('')
    const sortedstr2 = cleanstr2.split("").sort().join('')

    const valid = sortedstr1 === sortedstr2 ? `${cleanstr2} is a valid Anagram`: `${cleanstr1} is not a Valid Anagram`
    return valid

}

console.log(validAnagram("anagram", "nagaram"))

// O(n log n + m log m) - Time Complexity
// O(n + m) - Space Complexity


function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false; // Quick check to discard non-matching lengths
    }

    const cleanStr1 = str1.toLowerCase();
    const cleanStr2 = str2.toLowerCase();

    let counter1 = {};
    let counter2 = {};

    // Count the frequency of each character in cleanStr1
    for (let char of cleanStr1) {
        counter1[char] = (counter1[char] || 0) + 1;
    }

    // Count the frequency of each character in cleanStr2
    for (let char of cleanStr2) {
        counter2[char] = (counter2[char] || 0) + 1;
    }

    // Compare the character frequencies in both strings
    for (let char in counter1) {
        if (!(char in counter2) || counter1[char] !== counter2[char]) {
            return `${str1} is not a valid Anagram of ${str2}`;
        }
    }

    return `${str2} is a valid Anagram of ${str1}`;
}

console.log(validAnagram("anagram", "nagaram")); // "nagaram is a valid Anagram of anagram"


//Time complexity is O(n)
//Space Complexity is O(n)


function isvalidAnagram(str1,str2){
    if (str1.length!==str2.length) return

    let cleanStr1 = str1.toLowerCase();
    let cleanStr2 = str2.toLowerCase();

    let counter1 = {}
    let counter2 = {}

    for (let char of cleanStr1){
        counter1[char] = (counter1[char]||0)+1
    }

    for (let char of cleanStr2){
        counter2[char] = (counter2[char]||0)+1
    }

    for(let char in counter1){
        if(counter1[char]!==counter2[char]){
            return `${str1} is not a valid Anagram of ${str2}`;
        }
        
    } 

    return `${str2} is a valid Anagram of ${str1}`;
}

console.log(isvalidAnagram("anagram", "nagaram")); 