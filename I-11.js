// function a(){
//     let b = 10;
//     c();
//     function c(){
//         console.log(b) //Closure of a
//     }
// }
// a();

// function a() {
//     function c() {
//         // logic here
//     }
//     c(); // c is lexically inside a
// } // a is lexically inside global execution


// console.log(b) 
// let a = 10; 
// var b = 100;

// var n=2;
// function sq(num){
//     ans = num*num
//     return ans
// }

// var sq1 = sq(n)
// var sq2 = sq(4)

// let b = 100;

// {
//     var a = 10;
//     let b = 20; //b value inside shadowing b value outside
//     const c = 30
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// console.log(b)

// let a = 10; 
// {   
//     var a = 10; //no fine 

// }
//Block scope follows Lexical scope.
// var a = 10;

// {

// let a = 10;
// }


// a(); // "Hello A"
// b(); // TypeError
// function a() {
//   console.log("Hello A");
// }
// var b = function() {
//   console.log("Hello B");
// }

// var b = function(param1) {
//     console.log(param1); // prints " f() {} "
//   }
//   b(function(){});


//   var b = function(param1) {
//     console.log(param1);
//   }
//   function xyz(){
//   }
//   b(xyz); // same thing as prev code


//   // we can return a function from a function:
//  var b = function(param1) {
//     return function() {
//     }  
//   }
//   console.log(b()); //we log the entire fun within b. 


//   function x(){
//     console.log("x")
    
//  }
 
//  x( function y(){
//      console.log("y")
//  }) //call back function. Never block the call stack


//  console.log("Start")

//  function cb(){
//     console.log("Callback")
//  }
 
//  setTimeout(cb,0)

//  Promise.resolve('Promise!').then((res)=>console.log(res))

//  console.log("End")

// Palindrome

function palindrome(num){
    let temp = num;
    let reverse = 0;
    while(num > 0){
        const digit = num % 10 //to find last digit
        reverse = reverse * 10 + digit;
        num = Math.floor(num/10)
    } const p = temp === reverse ? `${temp} is a Palindrome` : `${temp} is not  a palindrome`
    return p
}

console.log(palindrome(121))


function palindrome1(num){
    let temp = num
    let reverse = 0;
    while(n > 0){
        const digit = num % 10; 
        reverse = reverse * 10 + digit;
        num = Math.floor(num/10)
    } const p = temp === reverse ?  `${temp} is a Palindrome` : `${temp} is not  a palindrome`
    return p
} 

function palindromeStr(str){
    const cleanStr = str.toLowerCase();
    let left = 0
    let right = cleanStr.length - 1
    while (left < right){
        if(cleanStr[left] != cleanStr[right] ){
            return false
        }
        left++
        right--
    }
    return true
}

console.log(palindromeStr('nan')); 
console.log(palindromeStr('hello')); 

function findPalindromeStr(str) {
    let cleanStr = str.toLowerCase();
    let reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseStr;
  }
  
  console.log(findPalindromeStr('nan')); 
  
//O(n) time complexity and space complexity