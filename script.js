// const cars = ["Toyota", "Nissan", "Fiat", "BMW", "Dodge", "Ford"];

// let text = '';

// for(let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

let text = '';

for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

// Redeclaring a variable using let

document.getElementById("demo").innerHTML = text;

let  x = 10;
// Here x is 10

{  
  let x = 2;
  // Here x is 2
}

// Here x is 10
document.getElementById("demo1").innerHTML = x;

// declaring a variable

var favoriteThing;

// assigning a value to variable

favoriteThing = "Mandalorian!!";

document.getElementById("demo2").innerHTML = favoriteThing;



var a = 20;
{
  let exe = 30;
  console.log(exe); // Expected output: 30
}
console.log(a) // Expected output: 20
// console.log(exe); // Uncaught ReferenceError: exe is not defined

// declaring variables using the keyword const

const pi = 3.14;
document.getElementById("demo3").innerHTML = pi;

// Block scope

{
    let x = 2;
}
// x can NOT be used here



// variables declared with the var keyword can NOT have block scope
{
    var y = 27;
}
// x CAN be used here

// Local Scope 

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}
  
  // code here can NOT use carName

  // carName is undefined outside myFuncion()
  myFunction();

function myFunction() {
  let carName = "Volvo";
  document.getElementById("demo4").innerHTML = typeof carName + " " + carName;
}

document.getElementById("demo5").innerHTML = typeof carName;

// Arrow Function

let myFuncion = (a, b) => a * b;
document.getElementById("demo6").innerHTML = myFuncion(4, 5);


let hello = "";

// regular function
hello = function() {
    return "Hello World!!";
}

document.getElementById("demo7").innerHTML = hello();

let bye = '';
// arrow function
bye = () => "Good bye";

document.getElementById("demo8").innerHTML = bye();

// Arrow funtion with a parameter

let good = "";

good = (val) => "Good " + val;

document.getElementById("demo9").innerHTML = good("Universal!!");

// ES6 - Classes

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Toyota", 2023);
const myCar3 = new Car("Nissan", 2017);
document.getElementById("demo10").innerHTML = myCar1.name + " " + myCar1.year;
document.getElementById("demo11").innerHTML = myCar2.name + " " + myCar2.year;
document.getElementById("demo12").innerHTML = myCar3.name + " " + myCar3.year;