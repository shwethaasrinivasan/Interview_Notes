// function displayValue() {

//     const result = 42; 

//     return result;
// }

// const result = displayValue(); 

// console.log("The value to display is:", result);


// const resultElement = document.getElementById("result");

// resultElement.innerHTML = result;

// function log(msg) {
//     const logElem = document.querySelector(".log");
  
//     const time = new Date();
//     const timeStr = time.toLocaleTimeString();
//     logElem.innerHTML += `${timeStr}: ${msg}<br/>`;
//   }
  
//   log("Logging mouse events inside this container…");

//   function logEvent(event) {
//     const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
//     log(msg);
//   }

//   const boxElem = document.querySelector(".box");

// boxElem.addEventListener("mousedown", logEvent);
// boxElem.addEventListener("mouseup", logEvent);
// boxElem.addEventListener("click", logEvent);
// boxElem.addEventListener("mouseenter", logEvent);
// boxElem.addEventListener("mouseleave", logEvent);

const items = ["Apple", "Banana", "Orange","Mango","Pomegranate"]

const myList = document.getElementById("myList");


items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item; 
    myList.appendChild(li); 
});

//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "hello world";

document.body.appendChild(fragment);