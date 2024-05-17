// var array = [1, [2, [3, [4]], 5]];


// const flatten = (array,n,currdepth=0) => {
// if (n === 0 ) return array

// let res = []

// for (let item of array){
//     if(Array.isArray(item) && currdepth<n) {
//         res = res.concat(flatten(item,n,currdepth+1))
//     } 
//     else {
//         res.push(item)
//     }
// }

// return res

// }

// console.log(flatten([1, [2, [3, [4]], 5]],0))

// const flatten = (arr,n,curr=0) => {
// if (n === arr.length) return arr;
// let res = [];
// for (let item of arr){
//     if(Array.isArray(item) && curr < n){
//         res = res.concat(flatten(item,n,curr+1))
//     }else{
//         res.push(item)
//     }
// }return res;
// }

// console.log(flatten([1, [2, [3, [4]], 5]],0))


function flatten(arr, n, curr = 0) {
    // If n is 0, return the array as-is without flattening.
    if (n === 0) return arr;
    
    let res = [];
    for (let item of arr) {
      // Check if the item is an array and we haven't reached the desired depth.
      if (Array.isArray(item) && curr < n) {
        // Flatten the item and increase the current depth by 1.
        res = res.concat(flatten(item, n, curr + 1));
      } else {
        // If it's not an array or we've reached the desired depth, add the item to the result.
        res.push(item);
      }
    }
    return res;
  }
  
console.log(flatten([1, [2, [3, [4]], 5]], 0)); // [1, [2, [3, [4]], 5]]
console.log(flatten([1, [2, [3, [4]], 5]], 1)); // [1, 2, [3, [4]], 5]
console.log(flatten([1, [2, [3, [4]], 5]], 2)); // [1, 2, 3, [4], 5]
console.log(flatten([1, [2, [3, [4]], 5]], 3)); // [1, 2, 3, 4, 5]

console.log(flatten([1, [2, [3, [4]], 5]], 0)); // [1, [2, [3, [4]], 5]]
console.log(flatten([1, [2, [3, [4]], 5]], 1)); // [1, 2, [3, [4]], 5]
console.log(flatten([1, [2, [3, [4]], 5]], 2)); // [1, 2, 3, [4], 5]
console.log(flatten([1, [2, [3, [4]], 5]], 3)); // [1, 2, 3, 4, 5]


  