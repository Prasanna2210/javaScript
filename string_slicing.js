// string slicing = creating a substring
//                  from a portion of another string
//                  string.slice(start,end)


// const fullname = "Satya naga prasanna";

// let firstname = fullname.slice(0,5);
// console.log(firstname);

// let lastname = fullname.slice(11);
// console.log(lastname);

// let firstchar = fullname.slice(0,1);
// console.log(firstchar);

// let lastchar = fullname.slice(-1);
// console.log(lastchar);


// let firstname = fullname.slice(0,fullname.indexOf(" "));
// console.log(firstname);

// let lastname = fullname.slice(fullname.indexOf(" ")+1);
// console.log(lastname);



const email = "snprasanna.villa@gmail.com"
let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

console.log(username);
console.log(extension);