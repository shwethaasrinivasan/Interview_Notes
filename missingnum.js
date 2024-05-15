//input = [0,1]
//output = 2 , n=2

const missingNum = (arr, num) => {
    let total = num * (num + 1) / 2;
    let sumOfArr = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sumOfArr += arr[i];
    }
    
    return total - sumOfArr;
}

console.log(missingNum([9,6,4,2,3,5,7,0,1], 9)); 
