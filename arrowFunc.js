// arrow functions = concise to write function expressions
//                   good for simple functions that you use only once
//                      parameters  => some code


// function Hello() {
//     console.log("Hello");
// }
// Hello();


// const hello = () => console.log("Hello");
// hello();


// const hello = (name,age) => {console.log("Hello "+`${name}`)
//                             console.log(`you are ${age} years old`)};
//                             // when we want to include multiple statements then you should include those statements within curly braces
// hello("prasanna",19);


// setTimeout(Hello , 3000)

// we had seen settimeout using function expression in lst video now we will see settimeout using arrow function

// setTimeout( () => console.log("Hello"),5000);

const numbers = [1,2,3,4,5,6];
const squares = numbers.map((element) => Math.pow(element,2));
console.log(squares);
const cubes = numbers.map((element) => Math.pow(element,3));
console.log(cubes);
const even = numbers.filter((element) => element%2===0);
console.log(even);
const odd = numbers.filter((element) => element%2!==0);
console.log(odd);
const total = numbers.reduce((accumulator,element)=> accumulator+element);
console.log(total);