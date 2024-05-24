const arr = [0,2,1,2,0,1,0,1]
// function sort(arr) {
//     return arr.sort((a, b) => a - b);
// }



function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap arr[j+1] and arr[j]
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}
// const result = bubbleSort(arr)
console.log(bubbleSort(arr))

//find a pivot
//move pivot to correct position
//all elements greater than pivot right side and smaller left side 
//repeat for both the partition

function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        // Recursively apply quickSort to the sub-arrays
        // Sub-array before the pivot
        quickSort(arr, low, pivotIndex - 1);
        // Sub-array after the pivot
        quickSort(arr, pivotIndex + 1, high);
    }
}


function partition(array, startIndex, endIndex) {
    let pivotValue = array[endIndex];
    let i = startIndex - 1; // This will track the last index of the smaller element

    for (let j = startIndex; j <= endIndex - 1; j++) {
        // If current element is smaller than the pivot
        if (array[j] < pivotValue) {
            i++; // Move to the next smaller element
            // Swap the found smaller element with the element at i
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    // Swap the pivot element with the element at i + 1, placing the pivot in its correct position
    [array[i + 1], array[endIndex]] = [array[endIndex], array[i + 1]];
    return i + 1; // Return the index of the pivot element
}

// let arr = [3, 6, 8, 10, 1, 2, 1];
quickSort(arr, 0, arr.length - 1);
console.log(arr);


// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
    
//     const middle = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle);

//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     let resultArray = [], leftIndex = 0, rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             resultArray.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             resultArray.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return resultArray
//         .concat(left.slice(leftIndex))
//         .concat(right.slice(rightIndex));
// }

// arr = mergeSort(arr);
// console.log(arr);