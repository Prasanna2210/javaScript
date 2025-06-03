//setTimeOut() = function in javascript that allows you to schedule the execution of a program after an amount of time (milliseconds) 
//               Times are approximate (varies based on the workload of the javascript runtime environment)
//               setTimeout(callback,delay);
//               clearTimeout(timeoutId) = can cancel a timeout before it triggers


// function hello() {
//     alert("Hello");
// }
// hello();
// setTimeout(hello,4000);


// using anonymous function
// setTimeout(function() {
//     alert("Hello");
// },2000);


//using arrow function
// setTimeout(()=>alert("Hello"),3000);

// to clear that timeout
// const timeoutId = setTimeout(()=>alert("Hello"),3000);
// clearTimeout(timeoutId);


// this is for html button
let timeid;
function settimer() {
    timeid = setTimeout(()=>alert("Hello"),3000);
    console.log("Started");
}
function cleartimer() {
    clearTimeout(timeid);
    console.log("Ended");
}