// JavaScript - grab the button class and stick in a variable

const btn = document.querySelector('.btn');

// add evemtlistener

btn.addEventListener('click', () => {
    let name = "Jon Doe";
    console.log(name.toUpperCase);
})