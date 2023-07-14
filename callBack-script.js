// JavaScript - grab the button class and stick in a variable

const button = document.querySelector('button');

// add evemtlistener

button.addEventListener('click', () => {
    let name = "Jon Doe";
    console.log(name.toUpperCase());
});

const users = [
    {
        firstName: 'Susan',
        lastName: "Curry",
        age: 14,
        hobbie: "singing"
    },
    {
        firstName: 'Bob',
        lastName: "Bones",
        age: 26,
        hobbie: "bowling"
    },
    {
        firstName: 'Tim',
        lastName: "Jones",
        age: 35,
        hobbie: "painting"
    },
    {
        firstName: 'Will',
        lastName: "Charge",
        age: 22,
        hobbie: "knitting"
    }
];

const output = users.map(({ age, hobbie, firstName  }) => {
    return `<ul>
    <li>${age}</li>
    <li>${hobbie}</li>
    <li>${firstName}</li>
</ul>`
});

console.log(output);