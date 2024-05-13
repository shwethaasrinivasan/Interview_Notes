```js
Check if a Value is a String:
To determine whether a given value is a string, you can create a function that checks the data type.
Example:
JavaScript

function isString(input) {
    return typeof input === "string";
}

console.log(isString("w3resource")); // true
console.log(isString([1, 2, 4, 0])); // false
AI-generated code. Review and use carefully. More info on FAQ.
1
Check if a String is Blank:
To verify if a string is empty (blank), you can create a function that checks its length.
Example:
JavaScript

function isBlank(str) {
    return str.trim().length === 0;
}

console.log(isBlank("")); // true
console.log(isBlank("abc")); // false
AI-generated code. Review and use carefully. More info on FAQ.
1
Split a String into an Array of Words:
To split a string into an array of words, use the split() method.
Example:
JavaScript

function stringToArray(str) {
    return str.split(" ");
}

console.log(stringToArray("Robin Singh")); // ["Robin", "Singh"]
AI-generated code. Review and use carefully. More info on FAQ.
1
Extract a Specified Number of Characters from a String:
To extract a portion of a string, use the substring() or slice() method.
Example:
JavaScript

function truncateString(str, length) {
    return str.substring(0, length);
}

console.log(truncateString("Robin Singh", 4)); // "Robi"
AI-generated code. Review and use carefully. More info on FAQ.
1
Convert a String into Abbreviated Form:
To abbreviate a name (e.g., “Robin Singh” to “Robin S.”), create a function.
Example:
JavaScript

function abbrevName(str) {
    const parts = str.split(" ");
    return parts[0] + " " + parts[1][0] + ".";
}

console.log(abbrevName("Robin Singh")); // "Robin S."
AI-generated code. Review and use carefully. More info on FAQ.
1
Hide Email Addresses:
To prevent unauthorized access, mask email addresses.
Example:
JavaScript

function protectEmail(email) {
    const parts = email.split("@");
    return parts[0].slice(0, 3) + "...@" + parts[1];
}

console.log(protectEmail(" [email protected] ")); // " [email protected] "
AI-generated code. Review and use carefully. More info on FAQ.
1
Parameterize a String:
Convert a string to a URL-friendly format (e.g., “Robin Singh from USA” to “robin-singh-from-usa”).
Example:
JavaScript

function stringParameterize(str) {
    return str.toLowerCase().replace(/\s+/g, "-");
}

console.log(stringParameterize("Robin Singh from USA.")); // "robin-singh-from-usa"
AI-generated code. Review and use carefully. More info on FAQ.
1
Capitalize the First Letter of a String:
Capitalize the first letter of a sentence.
Example:
JavaScript

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("js string exercises")); // "Js string exercises"
AI-generated code. Review and use carefully. More info on FAQ.
1
Capitalize the First Letter of Each Word:
Capitalize the first letter of each word in a sentence.
Example:
JavaScript

function capitalizeWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

console.log(capitalizeWords("js string exercises")); // "Js String Exercises"
AI-generated code. Review and use carefully. More info on FAQ.
1
Swap Case (Upper to Lower and Vice Versa):
Convert uppercase letters to lowercase and vice versa.
Example:
JavaScript

function swapCase(str) {
    return str.replace(/[a-zA-Z]/g, (match) =>
        match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase()
    );
}

console.log(swapCase("AaBbc")); // "aAbBC"