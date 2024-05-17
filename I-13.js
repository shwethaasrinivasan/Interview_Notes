// // const obj = {
// //             book: "JavaScript: The Good Parts",
// //             publishedYear: 2008,
// //             author: {
// //                 name: "Douglas Crockford",
// //                 age: 75,
// //                 address: {
// //                 city: "San Francisco",
// //                 country: "USA",
// //                 },
// //             },
// //             editions: [
// //                 {
// //                 year: 2008,
// //                 price: 25.99,
// //                 },
// //                 {
// //                 year: 2011,
// //                 price: 28.99,
// //                 notes: "Second edition",
// //     },
// //   ],
// // };

// // function updateJsonValue(Obj, targetKey, newValue) {

// // if(Array.isArray(Obj)){
// //     Obj.forEach((item)=>{
// //         if(item.notes === "Second edition"){
// //             item.year = newValue;
// //         }
// //     });
// // }

// // else if (typeof Obj === 'object' && Obj !== null){
// //     for(const key in Obj){
// //         if(key === targetKey){
// //             Obj[key] = newValue
// //         }
// //         else
// //         {
// //             updateJsonValue(Obj[key],targetKey,newValue)
// //         }
// //     }
// // }
// // return Obj
// // }

    
// // console.log(updateJsonValue(obj,'year','2024'))


// // Using JSON.stringify to convert the object to a string for logging
// //console.log(JSON.stringify(obj, null, 2));


// // let user ={
// //     name: "Akshay Saini",
// //     address: {
// //       personal: {
// //         city: "Dehradun",
// //         state: "Uttrakhand",
// //         area: "Majra",
// //       },
// //       office: {
// //         city: "Hyderabad",
// //         area: {
// //           landmark: "Hi Tech",
// //         }
// //       }
// //     }
// //   }


// //   function flattenObject(obj, parentKey = '', result = {}) {
// //     for (let [key, value] of Object.entries(obj)) {
// //         let newKey = parentKey ? `${parentKey}_${key}` : key;
// //         if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
// //             flattenObject(value, newKey, result);
// //         } else {
// //             result[newKey] = value;
// //         }
// //     }
// //     return result;
// // }

// // let flattenedUser = flattenObject(user, 'user');

// // console.log(flattenedUser);


// // arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]


// // function flattenarr(arr,n,currdepth=0){
    
// //     if(n===0) return arr;

// //     let result = [];

// //     for (let item of arr){
// //         if(Array.isArray(item) && currdepth < n){
// //             result = result.concat(flattenarr(item,n, currdepth+1))
// //         }
// //         else{
// //             result.push(item)
// //         }
        
// //     }
// //     return result;


// // }

// // console.log(flattenarr([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));


// // console.log(flattenarr([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));


// // console.log(flattenarr([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2));


// 1. Deep Clone Objects
// function deepClone(object) {
//     if (typeof object !== 'object' || object === null) {
//         return object; // Return the value if object is not an object
//     }

//     // Create an array or object to hold the values
//     const clonedObj = Array.isArray(object) ? [] : {};

//     for (const key in object) {
//         const value = object[key];
//         // Recursively (deep) copy for nested objects, including arrays
//         clonedObj[key] = deepClone(value);
//     }

//     return clonedObj;
// }

// // Example usage
// const original = { a: 1, b: { c: 2, d: [3, 4] }, e: [5, { f: 6 }] };
// const cloned = deepClone(original);
// console.log(cloned);
// Copy
// 2. Merge Objects
// function mergeObjects(obj1, obj2) {
//     const result = { ...obj1 }; // Shallow copy obj1 to result

//     Object.keys(obj2).forEach(key => {
//         if (typeof obj2[key] === 'object' && !Array.isArray(obj2[key]) && obj2[key] !== null) {
//             // If the property is a nested object (and not null or an array), merge it
//             result[key] = mergeObjects(result[key] || {}, obj2[key]);
//         } else {
//             // Otherwise, directly set the value from obj2, overwriting or adding it
//             result[key] = obj2[key];
//         }
//     });

//     return result;
// }

// // Example usage
// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { b: { d: 3 }, e: 4 };
// console.log(mergeObjects(obj1, obj2));
// Copy
// 3. Invert Key-Value Pairs in an Object
// function invertObject(object) {
//     const inverted = {};

//     Object.keys(object).forEach(key => {
//         const value = object[key];

//         if (inverted[value]) {
//             // If the value already exists, push to it or convert to an array if it's not one
//             inverted[value] = [].concat(inverted[value], key);
//         } else {
//             // Otherwise, just set the key as the value
//             inverted[value] = key;
//         }
//     });

//     return inverted;
// }

// // Example usage
// const obj = { a: 1, b: 2, c: 1 };
// console.log(invertObject(obj));
// Copy
// 4. Sum Nested Numbers
// function sumNestedNumbers(obj) {
//     let sum = 0;

//     function sumHelper(value) {
//         if (typeof value === 'number') {
//             sum += value; // Sum if it's a number
//         } else if (typeof value === 'object' && value !== null) {
//             // If it's an object or an array, iterate over it
//             for (const key in value) {
//                 sumHelper(value[key]);
//             }
//         }
//     }

//     sumHelper(obj);
//     return sum;
// }

// // Example usage
// const obj = { a: 1, b: { c: 2, d: { e: 3 } }, f: [4, [5, 6]] };
// console.log(sumNestedNumbers(obj));