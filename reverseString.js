
// Method 1 - using split and join
function reverseStringByWords(str) {
    const words = str.split(" ");
    const reversedWords = words.reverse();
    return reversedWords.join(" ");
}

const inputString = "Hello World";
const reversedString = reverseStringByWords(inputString);
//console.log("Reverse words:", reversedString);

//Method 2 - using map function

function reverseWords(str) {
    const words = str.split(" ");
    const reversedWords = words.map((word) => word.split("").reverse().join(""));
    return reversedWords.join(" ");
}

const inputString1 = "Geeks for Geeks";
const reversedString1 = reverseWords(inputString1);
//console.log("Reverse words:", reversedString1);

//Method 3 - vanilla func

function reverse(text) {
    if (text.length <= 1) {
        return text;
    }
    return reverse(text.slice(1)) + text[0];
}

const originalString = "Hello, world!";
const reversedString2 = reverse(originalString);
//console.log("Reversed string:", reversedString2);

//Method 4

function reverseWords(str) {
    const words = str.split(" "); 
    const reversedWords = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }
    return reversedWords.join(" ");
}

const originalString1 = "Hello, world! Have a nice day";
const reversedString3 = reverseWords(originalString1);
//console.log("Reversed words:", reversedString3);

function reverse_words(str) {
    const words = str.split()
    const reversewords = []
    for (i=words.length-1; i >=0; i--) {
        reversewords.push(words[i])
    }
    return reverseWords.join()
}

const originalString2 = "Hello, world! Have a nice day";
const reversedString4 = reverseWords(originalString2);
console.log("Reversed words:", reversedString4);