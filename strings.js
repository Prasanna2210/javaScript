// string methods = allow you to manipulate and work with text(strings)

// let username = "    Brdocode";

// console.log(username.charAt(0));
// console.log(username.indexOf("d"));
// console.log(username.lastIndexOf("d"));
// console.log(username.length);
// console.log(username.trim());
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.repeat(3));
// console.log(username.startsWith(" "));
// console.log(username.endsWith(" "));
// console.log(username.includes(" "));

let phoneNo = "123-456-7890";

// phoneNo = phoneNo.replaceAll("-","");
// console.log(phoneNo);

// phoneNo = phoneNo.padStart(15,"0");    //make string of length 15 by placing 0's
// console.log(phoneNo);

phoneNo = phoneNo.padEnd(15,"0");    //make string of length 15 by placing 0's
console.log(phoneNo);