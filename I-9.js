// function a(r)  {
//   return Math.PI * r * r
// }

// function c(r) {
//   return 2 * Math.PI * r
// }

// function calc(r,f) {
//   let res = []
//   for(let i=0; i<r.length; i++){
//     res.push(f(r[i]))
//   }
//   return res;
// }
// const r = [1,2,3,4]
// console.log(calc(r,a))


// Array.prototype.calc = function(f) {
//   let res = [] 
//   for(let i=0; i<this.length; i++){
//     res.push(f(this[i]))
//   }
//   return res;
// }
// const r1 = [1, 2, 3, 4];
// console.log(r1.calc(a))

const r1 = [1, 2, 3, 4];

const map_r = r1.map((r)=>Math.PI * r * r)
console.log(map_r)

const map_c = r1.map((r)=>2* Math.PI * r)
console.log(map_c)

//num to bin
const arr = [5,1,3,2,4,6];

const num_bin = arr.map((x)=> x.toString(2))
console.log(num_bin)

//num great than 4

const grtthan4 = arr.filter((x)=> x>4)
console.log(grtthan4)

//sum using reduce

function findSum(arr) {
  let result = 0;
  for(let i = 0; i < arr.length; i++) { 
    // console.log(`Adding ${arr[i]} to result (${result})`); // Diagnostic log
    result += arr[i];
  }
  return result;
}

console.log(findSum([5, 1, 3, 2, 4, 6])); // Expected output: 21


//with reduce
const findSumReduce = arr.reduce(function(acc,curr){
  acc = acc + curr;
  return acc;
},0)
console.log(findSumReduce)

//max value

const findMax = arr.reduce(function(max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
},0);

console.log(findMax);

//combine first and lastname

const users = [
	{ firstName: "Shwethaa", lastName: "S", age: 23 },
	{ firstName: "Shwe", lastName: "S", age: 29 },
	{ firstName: "Srik", lastName: "K", age: 29 },
	{ firstName: "Srikanth", lastName: "K", age: 50 },
];

const fullname = users.map((name)=> name.firstName+" "+name.lastName)
console.log(fullname)

//get age and and how many mapped
//29:2, 23:1, 50:1

const getAge = users.reduce(function(acc,curr){
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
  }else{
    acc[curr.age] = 1
  }
  return acc
},{})
console.log(getAge)

//get name of all whose age is less than 30

//function chaining - using map and filter

const youngusers = users.filter((user) => user.age < 30).map((user)=> user.firstName)

console.log(youngusers)

//using reducer

const youngreduce = users.reduce(function(acc,curr){
  if(curr.age < 30){
    acc.push(curr.firstName)
  }
  return acc
},[])

console.log(youngreduce)