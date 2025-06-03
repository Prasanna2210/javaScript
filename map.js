// .map() = accepts a callback and applies that function 
//         to each element of an array that returns
//         a new array


// const numbers = [1,2,3,4,5];

// function square(element) {
//     return Math.pow(element,2);
// }


// const squares = numbers.map(square);
// document.getElementById("myh1").textContent = squares;
// console.log(squares);


// const students = ['prasanna','sanjana','sathvika','santhi','manasa'];

// function uppercase(element) {
//     return element.toUpperCase();
// }

// function lowercase(element) {
//     return element.toLowerCase();
// }

// const studentsupper = students.map(uppercase);
// const studentslower = students.map(lowercase);
// console.log(studentslower);



const dates = ['2023-1-2','2025-22-10','2024-2-1'];
const formatteddates = dates.map(formatdates);
console.log(formatteddates);
function formatdates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}