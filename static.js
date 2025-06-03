// static = keyword that defines properties or methods that
//         belongs to a class itself rather than the objects 
//         created from that class (class owns anything static, not the objects)


// class MathUtil {
//     static PI = 3.14;

//     //static method
//     static getDiameter(radius) {
//         return radius*2;
//     }
//     static getCircumference(radius) {
//         return 2 * this.PI * radius;
//     }
// }
// // we dont need to create an object to access static members of the class we can access them directly by using class name
// console.log(MathUtil.PI); 
// console.log(MathUtil.getDiameter(2));
// console.log(MathUtil.getCircumference(2));


class user{
    static userCount =0;

    constructor(username) {
        this.username = username;
        user.userCount++;
    }
    sayHello() {
        console.log(`Hello my username is ${this.username}`);
    }
    static getUserCount() {
        console.log(`There are ${user.userCount} users online`)
    }
}
const user1 = new user("Prasanna");
console.log(user1.username);
console.log(user.userCount);
const user2 = new user("Sanjana");
console.log(user2.username);
console.log(user.userCount);
user1.sayHello();
user2.sayHello();
user.getUserCount();