// super = keyword is used in classes to call the constructor 
//         or access the properties and methods of a parent(super class)
//         this = this Object
//         super = the parent

class Animal {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}
class Rabbit extends Animal {
    constructor(name,age,runspeed) {
        super(name,age);
        this.runspeed = runspeed;
    }
    run() {
        console.log(`this ${this.name} can run`);
        super.move(this.runspeed);
    }
}
class Fish extends Animal {
    constructor(name,age,swimspeed) {
        super(name,age);
        this.swimspeed = swimspeed;
    }
    swim() {
        console.log(`this ${this.name} can swim`);
        super.move(this.swimspeed);
    }
}
class Hawk extends Animal {
    constructor(name,age,flyspeed) {
        super(name,age);
        this.flyspeed = flyspeed;
    }
    fly() {
        console.log(`this ${this.name} can fly`);
        super.move(this.flyspeed);
    }
}

const rabbit = new Rabbit("Rabbit",6,20);
const fish = new Fish("Fish",2,1);
const hawk = new Hawk("Hawk",10,40);


console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);
rabbit.run();