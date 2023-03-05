const cars = ["Toyota", "Nissan", "Fiat", "BMW", "Dodge", "Ford"];

let text = '';

for(let i = 0; i < cars.length; i++) {
    text += cars[4] + "<br>";
}

document.getElementById("demo").innerHTML = text;