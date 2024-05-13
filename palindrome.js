//for numbers
function palindrome(num){
    let temp = num
    let reverse = 0;
    while(num > 0){
        const digit = num % 10; //to find last digit
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10)
    }
    const p = temp===reverse? `${temp} Is a Palindrom`:`${temp} not a palindrome` // `${}` syntax is used for **string interpolation** in JavaScript 
    return p
}

console.log(palindrome(121));

//for strings
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z]/g, ''); 
    console.log(cleanedStr)
    let left = 0;
    let right = cleanedStr.length - 1;
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome('race345car')); 
console.log(isPalindrome('hello')); 
