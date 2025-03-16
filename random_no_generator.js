// let randomnumber = Math.floor(Math.random() * 100);   // it means a random number between 1 and 100 math.floor represents that number should be integer
// console.log(randomnumber);

// let min = 50;
// let max = 100;
// let random = Math.floor(Math.random() * (max-min))+min;
// console.log(random);


//another way using html

const min = 4;
const max = 10;
let random1;
let random2;
let random3;
document.getElementById("mybutton").onclick = function() {
    random1 = Math.floor(Math.random() * (max-min))+min;
    random2 = Math.floor(Math.random() * (max-min))+min;
    random3 = Math.floor(Math.random() * (max-min))+min; 

    document.getElementById("mylabel1").textContent = random1;
    document.getElementById("mylabel2").textContent = random2;
    document.getElementById("mylabel3").textContent = random3;

}
