//Input -> arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n => 0,1,2

function flattenArray(arr, n, currentDepth = 0) {

    if (n === 0) return arr;

    let result = [];

    for (let item of arr) {
        if (Array.isArray(item) && currentDepth < n) {

            result = result.concat(flattenArray(item, n, currentDepth + 1));
        } else {

            result.push(item);
        }
    }

    return result;
}

console.log(flattenArray([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));


console.log(flattenArray([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));


console.log(flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2));

