var names = ["whale", "squid", "turtle", "coral", "starfish"];

// Get the app element
var app = document.querySelector('#app');

// Create markup

app.innerHTML = '<ul>' + names.map(function (name) {
    return '<li>' + name + '</li>';
}).join('') + '</ul>';


// var names = ['Hermione', 'Bob', 'Gandalf'];

// // Get the app element
// var app = document.querySelector('#app');

// // Create markup
// app.innerHTML = '<ul>' + names.map(function (name) {
// 	return '<li>' + name + '</li>';
// }).join('') + '</ul>';
