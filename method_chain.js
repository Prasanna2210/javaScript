// method chaining = calling one method after another in one continuous line of code

// no method chaining

let username = window.prompt("Enter your usename: ");

// username = username.trim();
// let letter  = username.charAt(0);
// letter = letter.toUpperCase();

// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();

// username = letter + extrachars;
// console.log(username);


// ......methos chaining......
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);

