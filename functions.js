// functions = A section of reusable code 
//              Declare code once and use it whenever you want
//              call the function to execute that code

// function happyBirthday(username,age) {
//     console.log("Happy Birthday to you");
//     console.log("Happy Birthday to you");
//     console.log("Happy Birthday to you");
//     console.log(`Happy Birthday to dear ${username}`);
//     console.log(`Happy Birthday to you. you are ${age} yeras old`);
// }
// happyBirthday("Prasanna",20);

// let audio;

// function playsong() {
//     if(!audio) {
//         audio = new Audio("songs/happy-birthday-254480.mp3");
//         audio.loop =true;
//         audio.play();
//     }    
// }

// function stopsong() {
//     if (audio) {
//         audio.pause();
//         audio.currentTime = 0; // Reset to start
//         audio = null; // Reset audio to allow re-playing later
//     }
// }


// document.getElementById("mybutton").onclick = function() {
//     playsong();
// }

// document.getElementById("stopbtn").onclick = function() {
//     stopsong();
// }

let result;
function add(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}
function mul(a,b) {
    return a*b;
}
function div(a,b) {
    return a/b;
}
console.log(add(2,3));
console.log(sub(2,3));
console.log(mul(2,3));
console.log(div(2,3));