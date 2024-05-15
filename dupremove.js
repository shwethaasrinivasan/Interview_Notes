const dup = (nums) => {
    return new Set(nums).size !== nums.length
}

console.log(dup([6,1,2,3,4,5,8,7]))


// const dup = (nums) => {
//     const res = [...new Set(nums)];
//     return res;
// }

// console.log(dup([1,1,3,4])); // Output: [1, 3, 4]

const duplicate =(nums) => {
    for (i=0; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            if(nums[i]===nums[j]){
                return true;
            }
        }
    }return false;
}
console.log(duplicate([6,1,2,3,4,5,8,7,10,2]))