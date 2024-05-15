const removeDuplicates = (nums) => {
    if (nums.length == 0) return 0;
    
    let i = 0; 
    for (let j = 1; j < nums.length; j++) {

        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

console.log(removeDuplicates([1,1,2])); // Output: 2, nums = [1,2,_]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

//This approach ensures that the array is modified in-place with all unique elements moved to the front, 
//and it achieves this with a time complexity of O(n) and a space complexity of O(1), which is optimal for this problem.



// Initially, i is set to 0 because at the start of the algorithm, you consider the first element of the array (nums[0]) as the first unique element. 
//This is a valid assumption because, regardless of the content of the array, the first element is always unique compared to any non-existent preceding elements. 
//Here's a step-by-step explanation of how i represents the position of the latest unique element:

// Start with the assumption that the first element is unique: Since the array is sorted in non-decreasing order, any duplicate of the first element must come after it. 
//By setting i = 0, you're effectively marking the first element as unique.

// Iterate with a second pointer j: You start checking for other unique elements beginning from the second element (nums[1] or j = 1). 
//This is because you've already considered the first element as unique.

// Compare and update: As you iterate through the array with j, whenever you find an element nums[j] that is different from nums[i], 
//it means you've encountered a new unique element. This is because the array is sorted, and a different value indicates a break from any sequence of duplicates.

// Move i to the next position and update its value: When a new unique element is found, you increment i and then set nums[i] to nums[j]. 
//Incrementing i moves the position where the next unique element should be placed, and updating nums[i] ensures that this position now holds the latest unique element found.

// Conclusion: At any point in this process, i represents the position of the last unique element found in the array. 
//The value of i + 1 at the end of the iteration gives the count of unique elements because array indices are zero-based, and you've been moving i each time a unique element is found.

// The technique effectively compacts the unique elements towards the beginning of the array, with i marking the boundary between unique elements and the rest of the array.

