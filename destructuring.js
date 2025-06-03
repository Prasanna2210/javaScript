// destructuring = extract values from arrays and objects
//                  then assign them to variables in a convenient manner
//                  [] = to perform array destructuring 
//                  {} = to perform object destructuring



// ..........example 1..............
// swap the value of 2 variables

// let a=1;
// let b=2;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);


//..........example 2..............
// swap elements in an array

// const colors = ["red","green","Yellow","Orange","blue"];
// [colors[0],colors[3]] = [colors[3],colors[0]];
// console.log(colors);


//..........example 3................
// assign array elements to variables

// const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors;
// console.log(firstcolor);
// console.log(secondcolor);
// console.log(thirdcolor);
// console.log(extracolors);

//..........example 4.................
// extract values from objects

// const person1 = {
//     firstname : "Prasanna",
//     lastname : "villa",
//     age : 19,
//     job:"Student",
// }

// const person2 = {
//     firstname : "Sanjana",
//     lastname : "Tankala",
//     age : 19,

// }
// const {firstname,lastname,age,job="unemployed"} = person2;
// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(job);
// // as there is no job variable in person2 it will print 
// // undefined by using desstructuring we can set default values like at variable place make job=Unemployed


//...........example 5...................
//Destructuring in function parameters
 

function displayPerson({firstname,lastname,age,job="unemployed"}) {
    console.log(`name: ${firstname}`);
    console.log(`lastname: ${lastname}`);
    console.log(`age: ${age}`);
    console.log(job);
}
const person1 = {
    firstname : "Prasanna",
    lastname : "villa",
    age : 19,
    job:"Student",
}

const person2 = {
    firstname : "Sanjana",
    lastname : "Tankala",
    age : 19,
}

displayPerson(person1);