function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}


const nums1 = [1, 2, 3, 1];
console.log(containsDuplicate(nums1)); // Output: true

const nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums2)); // Output: false

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums3)); // Output: true


// function containsDuplicate(nums) {
//     nums.sort((a, b) => a - b); // Sort the array in ascending order
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] === nums[i + 1]) {
//             return true; // Found a duplicate
//         }
//     }
//     return false; // No duplicates found
// }

// // Example usage:
// const nums1 = [1, 2, 3, 1];
// console.log(containsDuplicate(nums1)); // Output: true

// const nums2 = [1, 2, 3, 4];
// console.log(containsDuplicate(nums2)); // Output: false

// const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// console.log(containsDuplicate(nums3)); // Output: true
