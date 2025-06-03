// rest paramemter = (...rest) allow a function work with a variable
//                     number of ara=guments by bundling them into an Array

//                     spread = expands an array into separate elements 
//                     rest = bundles separate elements into an array


// function openFridge1(...foods) {
//     console.log(foods);
// }

// function openFridge2(...foods) {
//     console.log(...foods);
// }

// function getfood(...foods) {
//     return foods;
// }

// let food1 = "pizza";
// let food2 = "Burger";
// let food3 = "Coolcake";
// let food4 = "springrolls";
// let food5 = "Milkshake";

// openFridge1(food1,food2,food3,food4,food5);
// openFridge2(food1,food2,food3,food4,food5);

// const foods = getfood(food1,food2,food3,food4,food5)
// console.log(foods);


// function sum(...numbers) {
//     let result = 0;
//     for(let i of numbers) {
//         result += i;
//     }
//     return result;
// }

// function getAverage(...numbers) {
//     let result = 0;
//     for(let i of numbers) {
//         result += i;
//     }
//     return result/numbers.length;
// }

// let total = sum(2,1,3,4,5);

// console.log(total);


// to combine strings

function combinestring(...strings) {
    return strings.join(" ");
}

const string = combinestring("villa","Satya","Naga","Prasanna");
console.log(string);