// const grandparent = document.querySelector(".grandparent");
// grandparent.addEventListener("click", printHi);

// setTimeout(() => {
//     grandparent.removeEventListener("click", printHi);
// }, 3000);

// const parent = document.querySelector(".parent");
// parent.addEventListener("click", (e) => {
//     // e.stopPropagation();
//     console.log("Parent 1");
// }, { capture: true });

// const child = document.querySelector(".child");
// child.addEventListener("click", (e) => {
//     console.log("Child 1");})
// // }, { once: true });

// function printHi() {
//     console.log("Hi!");
// }

const divs = document.querySelectorAll("div")

// divs.forEach(div =>{
//     div.addEventListener("click", ()=> {
//         console.log("Hola")
//     })
// })

addGlobalEventListener("click", "div", e =>{
    console.log("Hola!")
    })

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e)
    })
}

const newDiv = document.createElement("div")
newDiv.style.width = "150px"
newDiv.style.height = "150px"
newDiv.style.backgroundColor = "purple"
newDiv.style.padding = "65px"
// newDiv.addEventListener("click", () =>{}) -> To avoid this, we need event delegation
document.body.appendChild(newDiv)