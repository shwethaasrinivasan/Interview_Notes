// function twopowerfour(num,power){
//     if(power === 0) return 1
//     if(power === 1) return num
//     return num * twopowerfour(num,power-1)
// }

// const num = 2
// const power = 4

// console.log(twopowerfour(num,power))

// function factorial(num){
//     if (num <= 1) return 1
//     return num * factorial(num-1)
// }

// const factnum = 4
// console.log(factorial(factnum))

// function fibonacci(num){
//     if (num === 0 ) return 0
//     if (num === 1) return 1
//     return (fibonacci(num-2) + fibonacci(num-1)) 
// }

// const fibnum = 8
// for (i=0; i< fibnum; i++){
//     console.log(fibonacci(i))
// }

// function climbstairs(n){
//  if(n===0) return 1
//  if(n<0) return 0
//  return climbstairs(n-1) + climbstairs(n-2)
// }

// const n = 5
// console.log(climbstairs(n))

// function climbstairscache(n, memo = new Map()) {
//     if (n === 0) return 1;
//     if (n < 0) return 0;
//     if (memo.has(n)) return memo.get(n);
  
//     memo.set(n, climbstairscache(n - 1, memo) + climbstairscache(n - 2, memo));
//     return memo.get(n);
//   }
  
//   const n_cache = 5;
//   console.log(climbstairscache(n_cache)); // Using Map for caching
  
// function saydigit(num){
//     const digits = ["one","two","three","four","five","six","seven","eight","nine","ten"]
//     if(num <= 0 ) return;
//     let lastDigit = num % 10;
//     saydigit (num/10)
//     return digits[lastDigit]
// }

// console.log(saydigit(1234))

function saydigit(num, result = []) {
    const digits = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    if (num <= 0) return result.join(" ");
    let lastDigit = num % 10;
    result.unshift(digits[lastDigit - 1]); // Prepend the digit name to the result array
    return saydigit(Math.floor(num / 10), result); // Use Math.floor to avoid decimals
}

console.log(saydigit(1234));


//stack - recursion also uses stack
function reverseString(str) {
    if (str === "") return ""; // Base case: if the string is empty
    return reverseString(str.substring(1)) + str.charAt(0);
}
console.log(reverseString('Shwethaa S'));

function reverseNum(num, rev = 0) {
    if (num === 0) return rev;
    rev = (rev * 10) + (num % 10);
    return reverseNum(Math.floor(num / 10), rev);
}

console.log(reverseNum(123354));

function isPalindromeStr(str,i,j){
    if(i>=j) return true
    if(str[i]!==str[j]) return false
    return isPalindromeStr(str,i+1,j-1)
}
const str  = 'abcba'
console.log(isPalindromeStr(str,0,str.length-1))

function isPalindromeInt(num) {
    let str = num.toString();
    // Base case: If the string is of length 0 or 1, it's a palindrome.
    if (str.length <= 1) return true;
    // Check if the first and last characters are the same and recurse without them.
    if (str[0] === str[str.length - 1]) {
        return isPalindromeInt(str.substring(1, str.length - 1));
    }
    // If the first and last characters are not the same, it's not a palindrome.
    return false;
}

console.log(isPalindromeInt(12321)); // true
console.log(isPalindromeInt(123456)); // false


//Recursion - Inclusion and Exclusion
// always make 2 calls, one for inclusion and other for exclusion

function subset(nums, i, temp,result){
    if( i>= nums.length){
        result.push(temp)
        return;
    }
}