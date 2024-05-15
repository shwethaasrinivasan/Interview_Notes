//input digits = [1,2,3]
// Output: [1,2,4]


const plusOne = (arr) => {
    const result = arr.slice()
    let last = result.length-1
    result[last] = result[last] + 1
    return result
}
    

console.log(plusOne([1,3,2,5]))


// const plusOne = (digits) => {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits;
//         } else {
//             digits[i] = 0;
//         }
//     }
//     digits.unshift(1); // Handles the case where all digits are 9
//     return digits;
// }

// console.log(plusOne([1,2,3])); // Output: [1,2,4]

