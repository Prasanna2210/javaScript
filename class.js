// class = (ES6 feature) provides a more structured and cleaner way to Work
//         with objects compared to traditional constructor function
//         ex: static keyword, encapsulation, inheritance


// using functions 

// function Product(name, price) {
//     this.name = name;
//     this.price = price;

//     this.displayProduct = function() {
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}`);
//     };

//     this.calculateTotal = function(salesTax) {
//         return this.price + (this.price * salesTax);
//     }
// }
// const salesTax = 0.05;
// const product1 = new Product("Kurtha",600);
// const product2 = new Product("Leggin",300);
// const product3 = new Product("Duppata",150);

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();
// let totalPrice = product1.calculateTotal(salesTax);
// console.log(`Total Price(with tax): $${totalPrice.toFixed(2)}`);
// totalPrice = product2.calculateTotal(salesTax);
// console.log(`Total Price(with tax): $${totalPrice.toFixed(2)}`);
// totalPrice = product3.calculateTotal(salesTax);
// console.log(`Total Price(with tax): $${totalPrice.toFixed(2)}`);


class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}
const product1 = new Product("Kurtha",600);
const product2 = new Product("Leggin",300);
const product3 = new Product("Duppata",150);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
let totalPrice = product1.calculateTotal(salesTax);
console.log(`Total Price(with tax): $${totalPrice.toFixed(2)}`);
totalPrice = product2.calculateTotal(salesTax);
console.log(`Total Price(with tax): $${totalPrice.toFixed(2)}`);
totalPrice = product3.calculateTotal(salesTax);
console.log(`Total Price(with tax): $${totalPrice.toFixed(2)}`);
