const fruits = [{name:"Apple",color:"red",taste:"Sweet",calories:100},
                {name:"Orange",color:"Orange",taste:"Sweet and sour",calories:110},
                {name:"Grapes",color:"Green",taste:"Sweet",calories:98},
                {name:"Mango",color:"Yellow",taste:"Sweet",calories:150},
                {name:"Sapota",color:"Brown",taste:"Sweet",calories:120}];
            
// console.log(fruits[4].name);

// // we can add objects to array by using push method
// fruits.push({name: "Watermelon",color:"green",taste:"Sweet"});

// console.log(fruits);

// // to remove objects from array

// fruits.pop();
// console.log(fruits);

// fruits.splice(1,2);
// console.log(fruits);


// -------------forEach()-----------
fruits.forEach(fruits => console.log(fruits));
fruits.forEach(fruits => console.log(fruits.name));

//--------------map()---------------
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

//-----------filter()---------------
const sweetfruits = fruits.filter(fruit => fruit.taste === "Sweet");
console.log(sweetfruits);
const redfruits = fruits.filter(fruit => fruit.color === "red");
console.log(redfruits);

//-----------reduce()----------------   reduce method generally returns a single value here it returns objects
const maxcalorie = fruits.reduce((max,fruit)=>fruit.calories>max.calories?fruit:max);
console.log(maxcalorie);
const mincalorie = fruits.reduce((max,fruit)=>fruit.calories<max.calories?fruit:max);
console.log(mincalorie);