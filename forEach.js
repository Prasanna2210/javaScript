// forEach() = methods useed to iterate over the elements of an array and apply a specified function (callback) to each elements        

//             array.forEach(callback)
//             element, index, array are provided


// let numbers = [1,2,3,4,5];

// // for(let x of numbers) {
// //     console.log(x);
// // }

// function display(element) {
//     console.log(element);
// }

// function double(element, index, array) {
//     array[index] = 2 * element;
    
// }

// numbers.forEach(double);
// numbers.forEach(display);


let fruits = ['apple','banana','mango','grapes','orange'];

function display(fruit) {
    console.log(fruit);
}

// function uppercase(element, index, array) {
//     array[index] = element.toUpperCase();
// }

// function lowercase(element,index,array) {
//     array[index] = element.toLowerCase();
// }

function capitalize(element, index,array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);    // after + is going to create a substring 
}


// fruits.forEach(uppercase);
// fruits.forEach(display);
// fruits.forEach(lowercase);

fruits.forEach(capitalize);
fruits.forEach(display);