// Here are some simple examples of map, bind, call, apply, and a debounce polyfill in JavaScript:

// Array.prototype.map()
// map() is a method on the Array prototype that creates a new array populated with the results of calling a provided function on every element in the calling array. Here's an example:

// const arr = [1, 2, 3];

// const mappedArr = arr.map(num => num * 2);

// console.log(mappedArr); // Outputs [2, 4, 6]
// Copy
// In this example, map() is used to create a new array that doubles the value of each element in the original array.

// Function.prototype.bind()
// bind() is a method on the Function prototype that creates a new function with a specific this value and arguments passed to the original function. Here's an example:

// const obj = {
//   x: 10,
//   getX() {
//     return this.x;
//   },
// };

// const getX = obj.getX.bind(obj);

// console.log(getX()); // Outputs 10
// Copy
// In this example, bind() is used to create a new function getX with obj as its this value. When getX is called, it returns the value of obj.x.

// Function.prototype.call() and Function.prototype.apply()
// call() and apply() are methods on the Function prototype that allow you to call a function with a specific this value and arguments passed to the function. The only difference between call() and apply() is the way arguments are passed: call() accepts arguments separated by commas, while apply() accepts an array of arguments. Here's an example:

// function add(a, b) {
//   return a + b;
// }

// const sum = add.call(null, 2, 3);

// console.log(sum); // Outputs 5

// const numbers = [2, 3];
// const sum2 = add.apply(null, numbers);

// console.log(sum2); // Outputs 5
// Copy
// In this example, call() and apply() are both used to call the add() function with null as its this value and 2 and 3 as its arguments. The result is the sum of the two numbers, which is 5.

// Debounce Polyfill
// A debounce function delays the execution of a function until after some time has passed since the last time it was called. Here's a simple debounce polyfill that can be used in JavaScript:

// function debounce(func, delay) {
//   let timeoutId;
//   return function() {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(context, args), delay);
//   };
// }
// Copy
// In this polyfill, debounce() is a function that takes a function func and a delay delay, and returns a new function that debounces func by waiting delay milliseconds before executing it. The returned function clears the timeout if it is called again before the delay has elapsed, ensuring that func is only executed once after the delay has passed.