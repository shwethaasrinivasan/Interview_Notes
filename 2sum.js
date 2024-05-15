// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//O(n) - time complexity where n is the number of elements in the array, because it only requires a single pass through the array.
const twSum = (nums, target) => {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}

console.log(twSum([2,7,11,15], 9)); 

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSum([2,7,11,15], 9)); // Output: [0, 1]
//This brute-force method is straightforward and does not use any additional data structures, but it's less efficient for large arrays due to its O(n^2) time complexity.