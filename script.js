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

document.getElementById("demo1").innerHTML = favoriteThing;