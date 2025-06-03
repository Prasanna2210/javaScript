// this = reference to the object where THIS is used
//         (the object depends on the immediate context)
//         person1.name = this.name

// const person1 = {
//     myname: "prasanna",
//     favfood: "Biryani",
//     details: function() {
//         console.log(`hi! I am ${this.myname} and my favourite food is ${this.favfood}`);   // if we didnt write this keyword it will show an error to rectify that we should use this keyword
//         // this is a reference to an object within 
//         // this keyword doesnot wok with arrow functions
//     }
// }

// console.log(person1.myname);
// person1.details();


console.log(this);
