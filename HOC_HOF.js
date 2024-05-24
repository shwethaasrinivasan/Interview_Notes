// High-Order Components (HOC) and High-Order Functions (HOF) are advanced concepts in React and JavaScript, respectively, that allow for more abstract and reusable code. Below are simple examples of each to demonstrate their usage.

// High-Order Component (HOC) in React
// A High-Order Component (HOC) is a function that takes a component and returns a new component. It's used in React to share common functionality between components without repeating code.

import React from 'react';

// This is a simple component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// This is a high-order component that adds additional functionality to the original component
function withGreeting(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <WrappedComponent {...props} />
        <div>Welcome to the site!</div>
      </div>
    );
  };
}

// EnhancedComponent is now a component with added functionality
const WelcomeWithGreeting = withGreeting(Welcome);

function App() {
  return <WelcomeWithGreeting name="Shwethaa" />;
}

export default App;

// In this example, withGreeting is a HOC that adds a welcome message to any component passed to it. WelcomeWithGreeting is the enhanced component that displays both the original greeting and an additional welcome message.

// High-Order Function (HOF) in JavaScript
// A High-Order Function is a function that takes another function as an argument, or returns a function, or both. It's a core concept in functional programming.

// This is a high-order function since it returns a function
function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // true

// In this example, greaterThan is a HOF that takes a number n and returns a new function. This returned function takes another number m and checks if m is greater than n. greaterThan10 becomes a function that checks if a number is greater than 10.

// These examples illustrate the power of HOCs in React for enhancing component functionality and HOFs in JavaScript for creating dynamic and reusable functions.

