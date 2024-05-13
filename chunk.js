var arr = ['a', 'b', 'c', 'd','e','f','g','h']

// Method 1 using lodash
// const lodash_chunk = _.chunk(['a', 'b', 'c', 'd'], 3);
// console.log(lodash_chunk)

//Method 2 - using push and slice


var chunk = function(arr,size) {
    let result = []
    for(i = 0; i < arr.length; i += size){ 
        result.push(arr.slice(i,i+size))
    }
    return result;
}

console.log(chunk(arr,3));

//Method 3 - only with push
function chunk(arr, size) {
    const result = [];
    let chunk = [];

    for (const item of arr) {
        chunk.push(item);

        if (chunk.length === size) {
            result.push(chunk);
            chunk = [];
        }
    }

    if (chunk.length > 0) {
        result.push(chunk);
    }

    return result;
}

const myArray = [8, 3, 4, 5, 4];
const chunkedArray = chunk(myArray, 2);
console.log(chunkedArray); 

//Method 4 - Without using slice and push.

function chunk1(arr, size) {
    const result = [];
    let chunk = [];

    for (const item of arr) {
        chunk[chunk.length] = item; // ~ to chunk.push(item)

        if (chunk.length === size) {
            result[result.length] = chunk; // ~ to result.push(chunk)
            chunk = [];
        }
    }

    if (chunk.length > 0) {
        result[result.length] = chunk; // ~ to result.push(chunk)
    }

    return result;
}

const myArray1 = [8, 3, 4, 5, 4];
const chunkedArray1 = chunk1(myArray1, 2);
console.log(chunkedArray1); 
