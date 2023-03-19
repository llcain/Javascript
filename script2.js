// constant arrays

const cars = ["Saab", "Volvo", "BMW"];

document.getElementById("demo").innerHTML = cars;

// changing an element

cars[2] = "Camry";

document.getElementById("demo").innerHTML = cars;

// add an element

cars.push("Nissan");

document.getElementById('demo').innerHTML = cars;

// constant objects

const car = {type: "Fiat", model: "500", color: "white"};

// change a property

car.color = "red";

// add a property

car.owner = "John";

console.log(car);

// Javascript Assinment Operators

let y = 10;
y %= 4;

document.getElementById("demo").innerHTML = y;
 
let x;
 x = 5;
x = "hope";

document.getElementById("demo").innerHTML = x;

x = 5;
x = 4;

console.log(x);

// JavaScript Functions



function myNumber(a, b) {
    return a * b;
}


document.getElementById("demo").innerHTML = myNumber(4, 6);