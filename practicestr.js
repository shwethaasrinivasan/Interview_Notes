//s = "Js String Exercises"

//console.log(s.charAt(0).toUpperCase()+s.slice(1))

// let s = "Js String Exercises";
// let words = s.split(" ");

// let result = words.map(element => element.charAt(0).toUpperCase() + element.slice(1)).join(" ");

// console.log(result);
let s = "Js String Exercises";
let words = s.split(" ");

let result = ""; 

for (let i = 0; i < words.length; i++) {
    const word = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    result += word + (i < words.length - 1 ? " " : "");
}

console.log(result);
