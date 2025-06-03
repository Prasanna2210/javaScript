// function declaration = define a reussable block of code that performs a specific task 

// function hello() {
//     console.log("hello");
// }
// hello();

// // function expression = a way to define a functions as values or variables

// const hello1 = function() {
//     console.log("Hello");
// }
// hello1();

// setTimeout(hello , 3000);   // after 3sec it will call hello function

// setTimeout(function() {
//     console.log("Hello");
// },  1000);    // here depemd on the time whivh ffunction should called first  that is above one or this one
// // here we pass entire function as an argument or treated as a value



// here we use function declararion
// const numbers = [1,2,3,4,5,6];
// function squares(element) {
//     return Math.pow(element,2);
// }
// const numSquare = numbers.map(squares);
// console.log(numSquare);



const numbers = [1,2,3,4,5,6];

const numSquare = numbers.map(function(element) {
    return Math.pow(element,2);
});
const numcubes = numbers.map(function(element) {
    return Math.pow(element,3);
});
const evenNums = numbers.filter(function(element) {
    return element%2 === 0;
});
const oddNums = numbers.filter(function(element) {
    return element%2 !== 0;
});
const total = numbers.reduce(function(accumulator,element) {
    return accumulator + element;
});
console.log(numSquare);
console.log(numcubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);


// 1. callbacks in asynchronous operations
// 2. Higher-order functions
// 3. closures
// 4. Event listeners