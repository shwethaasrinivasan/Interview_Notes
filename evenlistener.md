 ```js

 //https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting


 In JavaScript, event listeners allow you to respond to specific events triggered by user interactions or other system actions. By attaching event listeners to DOM elements, you can execute custom logic or trigger functions when events occur1. Here’s how you can use event listeners:

Adding an Event Listener:
The addEventListener() method attaches an event handler to a specified element.
Syntax:
JavaScript

element.addEventListener("event", function);
AI-generated code. Review and use carefully. More info on FAQ.
Example:
JavaScript

const myButton = document.getElementById("myBtn");
myButton.addEventListener("click", displayDate);
AI-generated code. Review and use carefully. More info on FAQ.
This code adds a click event listener to the button with the ID “myBtn,” calling the displayDate function when clicked.
Named Functions:
You can also refer to an external named function:
JavaScript

myButton.addEventListener("click", myFunction);

function myFunction() {
    // Custom logic here
}
AI-generated code. Review and use carefully. More info on FAQ.
Multiple Event Handlers:
You can add multiple event handlers to the same element without overwriting existing ones:
JavaScript

myButton.addEventListener("click", myFunction);
myButton.addEventListener("click", mySecondFunction);
AI-generated code. Review and use carefully. More info on FAQ.
Window Object:
You can add event listeners to any DOM object, including the window object:
JavaScript

window.addEventListener("resize", function() {
    // Handle window resize
});
AI-generated code. Review and use carefully. More info on FAQ.
Remember that event listeners enhance interactivity and separate JavaScript from HTML markup, improving readability and maintainability of your code1. 🌟 1: W3Schools - JavaScript DOM EventListener

```

1. It's coming under EventTarget interface