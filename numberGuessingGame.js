const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max-min+1)) + min;
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running) {
    attempts++;
    guess = window.prompt(`Enter number between ${min} and ${max}`);
    guess = Number(guess);
    if(guess<answer) {
        window.alert("Your number too low");
    }
    else if(guess>answer) {
        window.alert("Your number is too high");
    }
    else {
        window.alert(`You guessed correctly in ${attempts} attempts`);
        running = false;
    } 
}