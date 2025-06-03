// .reduce() = reduce the elements of an array 
//             to a single value

// const numbers = [1,2,3,4,5];
// function sum(accumulator,element) {    //here we can replace accumulator and element with any other variables 
//     // how it works is
//     // initially accumulator is 0 and element is 1 then after returning something it will return to accumulator 
//     // so now accumulator value changes element value also changed with next element
//     // like that it will repeat for all elements
//     return accumulator + element;
// }
// const numSum = numbers.reduce(sum);
// console.log(numSum.toFixed(2));


const grades = [55,34,97,87,65,77];
// console.log(Math.max(grades));    // not possible because we can find max between 2 numbers eg: Math.max(2,3) in arrays it is not possible
function getMax(accumulator,element) {
    return Math.max(accumulator,element)
}
function getMin(accumulator,element) {
    return Math.min(accumulator,element)
}
const MaxGrade = grades.reduce(getMax);
console.log(MaxGrade);
const MinGrade = grades.reduce(getMin);
console.log(MinGrade);