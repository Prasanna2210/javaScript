// ternary operator = a shortcut to if() and else() statements helps to assign a variable based on a condition 
//                      condition ? codeIfTrue : codeIfFalse

// let age=20;
// let message = (age>=18) ? "You are an adult" : "You are a minor";
// console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount>=100 ? 10 :0;     // here 10 indicates 10% not a nmber
console.log(`your total is $${purchaseAmount- purchaseAmount*(discount/100)}`);