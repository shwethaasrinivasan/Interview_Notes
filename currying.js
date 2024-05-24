//sum(10)(20)(3)(4)()
// Currying is a functional programming technique in JavaScript that involves transforming a function with multiple arguments into 
// a sequence of nesting functions that each take 
// a single argument. Essentially, it's the process of taking a function that expects several arguments and turning it into a 
// series of functions that each take only one argument.
const sum = a => b => b ? sum(a+b): a;
console.log(sum(10)(20)(3)(4)());

let sumlet = (a) => {
    return (b) => {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    };
};

console.log(sumlet(1)(2)(3)(4)());

//closure - function along with its lexical scope.//scope chain

function outerFunction(outerVariable) {
    const outer2 = 'I am outside!';

    function innerFunction(innerVariable) {
        console.log(outerVariable + '\n' + outer2 + '\n' + innerVariable);
    }

    return innerFunction;
}

const newFunction = outerFunction('Outside');
newFunction('Inside');

function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const myCounter = createCounter();
myCounter(); 
myCounter(); 
