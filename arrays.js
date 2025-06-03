// arrays = a variable like structure that can hold more than 1 value

let fruits = ["apple","banana","orange"];

console.log(fruits);

fruits[2] = "watermelon";  // chamge the element which is already present at that index

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits.push("papaya");
console.log(fruits);

fruits.pop();   // here we can pop only the last element even if we write fruit name or index it cant delete that it can pop only the last element
console.log(fruits);

fruits.unshift("mango");   // unshift operator add element to first position
console.log(fruits);

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("mango");  // if element is not present in that array it will return -1
console.log(index);

// if we want to display element through loop

for(let i=0;i<fruits.length;i++) {
    console.log(fruits[i]);
}

for(let i of fruits) {
    console.log(i);
}

fruits.sort();
console.log(fruits);