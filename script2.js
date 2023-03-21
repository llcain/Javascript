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


// example calls a function to return the product of a and b
function myNumber(a, b) {
    return a * b;
}


document.getElementById("demo").innerHTML = myNumber(1, 9);

myCar();
function myCar() {
    var carBell = "Volvo";
    document.getElementById("demo1").innerHTML = typeof carBell + " " + carBell;
}



document.getElementById("demo2").innerHTML = typeof carBell;

// convert fehrenheit to celsius

function toCelcius(fahrenheit) {
     return (fahrenheit - 32) * (5/9);
}

document.getElementById("demo3").innerHTML = toCelcius(77);


// Spread Operator
const numbers = [1, 7, 10, 7];
let maxValue = Math.max(...numbers);
numbers.push(63);

document.getElementById("demo4").innerHTML = maxValue;
document.getElementById("demo4").innerHTML = numbers;

// The For/Of Loop

const words = ['was', 'chick', 'boots', 'goats', 'birds'];
let text = "";

for (let x of words) {
    text += x + "<br>";
}

document.getElementById("demo5").innerHTML = text;

// Looping through string

let language = "JavaScript";

let text1 = "";

for ( let x of language) {
    text1 += x + "<br>"
}

document.getElementById("demo6").innerHTML = text1;

// JavaScript Classes

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("ford", 2014);
const myCar2 = new Car("nissan", 2000);

document.getElementById("demo7").innerHTML = myCar1.name + " " + myCar2.name;