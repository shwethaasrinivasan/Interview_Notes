// s = "Shwethaa from Chennai"

// let splt = s.split(" ")
// const result = []
// for(i=0; i<splt.length; i++) {
//     splt1 = splt[i] + splt[i+1]
// result.push[splt1]
// }
// console.log(result)

// let ss = s.split(" ").join("-")
// console.log(ss)
// let a = ["shwethaa","s"]
// console.log(a.toString())

// let r = []
// let c = 0

// for(i=0; i<=s.split(" "); i++){
//     s[i] += "-"
//     r.push(s[i])
//     c++
// }
// console.log(r)

// let s = "Shwethaa from Chennai"; 
// let words = s.split(" ");
// let result = "";

// for(let i = 0; i < words.length; i++) {
//     result += words[i];
//     if (i < words.length - 1) {
//         result += "-";
//     }
// }

// console.log(result); 

let s = "Shwethaa from Chennai";
let words = s.split(" ");
let result = [];

for(let i = 0; i < words.length; i++) {
    if (i < words.length - 1) {
        result.push(words[i] + '-');
    } else {
        result.push(words[i]);
    }
}

console.log(result.join('')); 
