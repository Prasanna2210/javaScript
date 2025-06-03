// nested Objects = objects inside other objects 
//                  Allows you to represent more complx data structures 
//                  child oject is enclosed by a parent object

//                  Person{Address{} , contactinfo{}}
//                  shoppingcart{keyboard{},mouse{},monitor{}}


// const person1 = {
//     firstname : "Prasanna",
//     lastname : "villa",
//     age : 19,
//     isStudent : true,
//     hobbies : ["singing","Playing","Listening songs"],
//     address: {
//         street: "Bank center",
//         city: "Konaseema",
//         state : "AP"
//     }
// }
// console.log(person1.firstname);
// console.log(person1.hobbies[2]);
// console.log(person1.address.state);

// for(const property in person1.address) {
//     console.log(person1.address[property]);
// }



class person {
    constructor(name,age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address {
    constructor(street,city,State) {
        this.street = street;
        this.city = city;
        this.state = State;
    }
}
const person1 = new person("prasanna",19, "bank colony",
                                            "Kakinada", 
                                            "AP" );

console.log(person1.name);
console.log(person1.address);
console.log(person1.address.street);