function outer() {
    var a = 10;
    function inner(){
        console.log(a)
    }
    return inner;
}
outer()(); //first `()` will return inner function and then using second `()` to call inner function

//currying
// let sum = a => b => b ? sum(a + b) : a;

// console.log(sum(10)(20)(3)(4)());


let sum = (a) => {
    return (b) => {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    };
};

console.log(sum(1)(2)(3)(4)());


//outest()("Hello There")(); // 10 20 "Hello There"

let outest = () => {
    let a = 10;
    let outer = (str) => {
        let b = 20;
         let inner = () => {
            console.log(a,b,str)
        } 
        return inner
    }
 return outer;
}
let a =100;
outest()("Hello there")();
