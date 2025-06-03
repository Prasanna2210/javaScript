// callback = a function that is passed as an argument to another function used to handle asynchronous function
//            1.Reading  a file
//            2.Network requests
//            3.Interating with databases

//            "Hey, when you're done call this next."

// hello();
// goodbye();


// hello(wait);             // here goodbye is passing as a parameter constant not a function

// function hello(callback) {
//     console.log("Hello");
//     callback();
// }

// function goodbye() {
//     console.log("Bye");
// }

// function wait() {
//     console.log("Wait");
// }

// function leave() {
//     console.log("wait");
// }



// function hello() {                // even of we call first hello function it will displaying only goodbye because of set timeout
//     setTimeout(function() {
//         console.log("Hello");       
//     },3000);
// }

sum(displaypage,2,3)

function sum(callback,x,y) {
    let result = x + y;
    callback(result);
}

function displayconsole(result) {
    console.log(result);
}

function displaypage(result) {
    document.getElementById("myh1").textContent = result;
} 