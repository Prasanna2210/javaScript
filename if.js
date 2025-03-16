// if statements = if a condition is true, execute some code 
//                  if not, do something else

// let age=25;

// if(age>=18) {
//     console.log("You are enough to enter this site");
// }
// else {
//     console.log("You must be 18+ to enter this site");
// }


// let time = 23;
// if(time>4 && time<10) {
//     console.log("Good morning");
// }
// else if(time>21){
//     console.log("Good night");
// }


// let isstudent = false;
// if(isstudent) {
//     console.log("You are a student");
// }
// else {
//     console.log("You are not a student");
// }


document.getElementById("mybutton").onclick = function() {
    let age = document.getElementById("mytext").value;
    if(age>=18) {
        document.getElementById("result").textContent = `you are eligible for vote`;

    }
    else {
        document.getElementById("result").textContent = `you are not eligible for vote`;

    }
 
}