// variable = A container that stores a value 
//             behaves as if it were the value it contains

//             assignment  =  let x;
//             declaration  x = 20;


let x=44;
console.log(x);
console.log(`My rollno is ${x}`);

let y = "Prasanna";
console.log(typeof y);

let z = true;
console.log(typeof z);

let name = "Prasanna";
let age = 20;
let voteEligible = true;

document.getElementById(1).textContent = name;
document.getElementById(2).textContent = `She is ${age}Is She eligible for vote? ${voteEligible}`;
// document.getElementById(2).textContent = "Is She eligible for vote? $(voteEligible)";    if we write same id two times then it will be overwritten

document.getElementById(2).innerHTML = `She is ${age}<br>Is She eligible for vote? ${voteEligible}`;    // syntax for to get text in new line