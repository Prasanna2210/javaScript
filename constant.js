const pi = 3.14;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of the circle: ");
// radius = Number(radius);
// circumference = 2 * pi * radius;
// console.log(`The circumference of the circle is ${circumference}`);


document.getElementById("mysubmit").onclick = function() {
    radius = document.getElementById("text").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myh3").textContent = `circumference of circle with radius ${radius} is ${circumference}` + "cm";
}

