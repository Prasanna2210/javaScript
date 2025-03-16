// let loggedin =false;
// let password;
// let username;

// while(!loggedin) {
//     username = window.prompt("Enter your username: ");
//     password = window.prompt("Enter your password: ");
//     if(username === "Prasanna" && password=="password") {
//         loggedin = true;
//         console.log("You are logged in");
//     }
//     else {
//         console.log("Invalid credentials please try again");
//     }
// }


// for loop

// for(let i=0;i<10;i++) {
//     console.log(i);
// }
// console.log("Hello");



for(let i=0;i<10;i++) {
    if(i==5) {
        continue;
    }
    console.log(i);
    if(i==8) {
        break;
    }
}
console.log("Hello");