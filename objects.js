// object = A collection of related properties and or methods can 
//           represent real word objects (people,products,places)
// object = {key:value, 
//           function()}


const person1= {
    firstName: window.prompt("yours firstname"),
    lastName: "Villa",
    age: 19,
    isEmployed: false,
    sayHello: function(){console.log(`hi! this is Prasanna villa`)},
    occupation: ()=> console.log("Unemployed")
}
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.occupation();