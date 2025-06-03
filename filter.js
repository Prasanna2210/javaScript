// .filter() = creates a new array by filtering out elements


// let numbers = [1,2,3,4,5,6];

// function isEven(element) {
//     return element%2 === 0;
// }

// function isOdd(element) {
//     return element%2 !== 0;
// }

// let evenNumbers = numbers.filter(isEven);
// let oddNumbers = numbers.filter(isOdd);

// console.log(evenNumbers);
// console.log(oddNumbers);



// const ages = [35,23,12,43,42,13,14,65];
// function isAdult(element) {
//     return element>=18;
// }
// function isChild(element) {
//     return element<18;
// }
// const adults = ages.filter(isAdult);
// console.log(adults);
// const children = ages.filter(isChild);
// console.log(children);
// adults.sort();
// console.log(adults);


const words = ["Apple","banana","Mango","chocolate","icecream","cake","pomegranate"];
function isShort(element) {
    return element.length <= 6;
}
function isLong(element) {
    return element.length > 6;
}
let shortWords = words.filter(isShort);
let longWords = words.filter(isLong);
console.log(shortWords);
console.log(longWords);