// getter = special method that makes a property Readable 
// Setter = special method that makes a property writeable

// We use getters and setters for validate and modify a 
// value when reading/writing a property

// class Rectangle{
//     constructor(width,height) {
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth) {
//         if(newWidth>0) {
//             this._width= newWidth;
//         }
//         else {
//             console.error("width must be positive number");
//         }
//     }
//     set height(newHeight) {
//         if(newHeight>0) {
//             this._Height= newHeight;
//         }
//         else {
//             console.error("Height must be positive number");
//         }
//     }
//     get width() {
//         return `${this._width.toFixed(1)}cm`;
//     }
//     get height() {
//         return `${this._Height.toFixed(1)}cm`;
//     }
//     get area() {
//         return this._width * this._Height;
//     }
// }

// const rectangle = new Rectangle(8,4);
// // rectangle.width = 4;
// // rectangle.height = 4;
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);





class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    // Setter for firstname
    set firstname(newFirstname) {
        if (typeof newFirstname ==="string" && newFirstname.trim().length > 0) {
            this._firstname = newFirstname.trim();
        } else {
            console.error("Firstname must be a non-empty string.");
        }
    }

    // Getter for firstname
    get firstname() {
        return this._firstname;
    }

    // Setter for lastname
    set lastname(newLastname) {
        if (typeof newLastname === "string" && newLastname.trim().length > 0) {
            this._lastname = newLastname.trim();
        } else {
            console.error("Lastname must be a non-empty string.");
        }
    }

    // Getter for lastname
    get lastname() {
        return this._lastname;
    }

    // Setter for age
    set age(newAge) {
        if (newAge > 0 && Number.isInteger(newAge)) {
            this._age = newAge;
        } else {
            console.error("Age must be a positive integer.");
        }
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Getter for full name
    get fullname() {
        return `${this._firstname} ${this._lastname}`;
    }
}

// Example usage
const person = new Person("John", "Doe", 25);

console.log(person.firstname); // Output: John
console.log(person.lastname);  // Output: Doe
console.log(person.age);       // Output: 25
console.log(person.fullname);  // Output: John Doe

person.firstname = "Jane";
person.lastname = "Smith";
person.age = 30;

console.log(person.firstname); // Output: Jane
console.log(person.lastname);  // Output: Smith
console.log(person.age);       // Output: 30
console.log(person.fullname);  // Output: Jane Smith