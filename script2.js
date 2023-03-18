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