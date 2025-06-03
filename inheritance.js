// inheritance = allows a new class to inherit properties and methods 
//               from a existing class (parent->child)
//               helps with code reusability

class Animal {
    alive = true;

    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}
class Rabbit extends Animal {
    name = "Rabbit";
    run() {
        console.log(`this ${this.name} is running`);
    }
}
class Fish extends Animal {
    name = "Fish";
    swim() {
        console.log(`this ${this.name} is swimming`);
    }
}
class Hawk extends Animal {
    name = "Hawk";
    fly() {
        console.log(`this ${this.name} is flying`);
    }
}
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.eat();
rabbit.sleep();
rabbit.run();
console.log(rabbit.alive);

fish.eat();
fish.sleep();
fish.swim();
console.log(fish.alive);

hawk.eat();
hawk.sleep();
hawk.fly()
console.log(hawk.alive);
