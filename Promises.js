// Promises
// Promises are a way to handle asynchronous operations in JavaScript. A Promise represents a value that may not be available yet, but will be resolved at some point in the future. Here's an example:

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, world!');
  }, 1000);
});

myPromise.then(result => {
  console.log(result);
});

// In this example, myPromise is a Promise that resolves to the string "Hello, world!" after 1 second. The then() method is called on the Promise to handle the result when it's available.

// Async Programming with setTimeout()
// In JavaScript, setTimeout() is often used to simulate asynchronous operations. Here's an example of how it can be used in an async programming context:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched!');
    }, 1000);
  });
}

async function main() {
  console.log('Fetching data...');
  const result = await fetchData();
  console.log(result);
}

main();

// In this example, fetchData() is a function that returns a Promise that resolves to the string "Data fetched!" after 1 second. The main() function is declared as an async function, which allows the use of the await keyword to wait for the Promise to resolve before continuing. When main() is called, it logs "Fetching data..." to the console, then waits for fetchData() to resolve before logging the result.

// By using Promises and async programming, JavaScript developers can write more readable and maintainable code that handles asynchronous operations with ease.