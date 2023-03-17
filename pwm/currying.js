// currying is a technique that allows us to take a function that takes 
// n arguments and convert it into function with single arguments

function add(a) {
    return function(b) {
        return a + b;
    }
}

// const add1 = add(1);
// console.log(add1(5));

// currying a function
const add2 = a => b => b + a;

console.log(add(1)(3))