// JavaScript - grab the button class and stick in a variable

const button = document.querySelector('button');

// add evemtlistener

button.addEventListener('click', () => {
    let name = "Jon Doe";
    console.log(name.toUpperCase());
});