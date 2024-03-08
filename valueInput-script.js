let input = document.querySelector('input');
let button = document.querySelector('button');

// show result

button.addEventListener('click', () => {

    let div = document.querySelector('#app');

    div.innerText = input.value;
})