// spread operator = ...
//                   allows an iterable such as an array or string to be expanded into separate elements(unpacks the elements)

let numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);

let newnumbers = [...numbers];    // no change between those because it creates a copy of original
console.log(newnumbers);

let max = Math.max(numbers);
console.log(max);

max = Math.max(...numbers);
console.log(max);

let min = Math.min(...numbers);
console.log(min);


// using strings

let name = "Prasanna villa";

let letters = [...name];

console.log(name);
console.log(letters)

letters = [...name].join("-");
console.log(letters);


// to combine to arrays

let fruits = ['apple','banana','grapes'];
let vegetables = ['potato','carrort','onion'];

let groceries = [...fruits,...vegetables];   // it combines to arrays into a single array
console.log(groceries);


groceries = [...fruits,...vegetables,'eggs','milk'];   // it combines to arrays into a single array
console.log(groceries);