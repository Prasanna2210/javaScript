//closure = A function defined inside of another function,
//          the inner function has access to the variables and scope of the outer function.
//          Allow for private variables and state maintenance
//          used frequently in js frameworks: React, vue, Angular



// function outer() {
//     let message = "Hello";
//     function inner() {
//         console.log(message);
//     }
//     inner();
// }
// message = "Good bye";      // inner function didnt take the message which is out of scope
// outer();        // it will display message only when we call inner function inside an outer fnction

// inner(); // it will show an error that inner is not defined



// function increment() {
//     let count=0;
//     count++;
//     console.log(`count ncreeased to ${count}`);
// }

// increment();
// increment();   // again it will print 1 only as it sets count to 1 every time while calling 



// if we write that count outside of the function then count value  cahnges while every calling
// let count=0;
// function increment() {
//     count++;
//     console.log(`count increeased to ${count}`);
// }

// increment();
// increment();



//we can change coutn valaue to any limit so it is important to maintain state for that place that function inside another function
// function createCounter() {
//     let count=0;
//     function increment() {
//         count++;
//         console.log(`count increeased to ${count}`);
//     }
//     function getcount() {
//         return count;
//     }
//     return {increment,getcount};      // returning an object with the method of increment
// }
// const counter = createCounter();
// console.log(counter);
// counter.increment();
// counter.increment();

// console.log(`count value is ${counter.getcount()}`);       // it is undefined  to get the count value we need to add a method which will return count value and we need to add getcount method in return 



function createGame(){
    let score = 0;
    function increase(points) {
        score+=points;
        console.log(`+${points} pts`);
    }
    function decrease(points) {
        score-=points;
        console.log(`-${points} pts`);
    }
    function getscore() {
        return score;
    }
    return {increase,decrease,getscore};
}
const game = createGame();
game.increase(5);
game.increase(2);
game.decrease(1);
console.log(`Total score is ${game.getscore()}`);