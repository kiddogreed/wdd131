let firstName = 'Antonia';
let lastName = 'Francesca';

// Write a function declaration (definition) named fullName with parameters first and last. It should return a single string (a full name) with a space between the values.


function fullName(fn, ln) {
    return fn + ' ' + ln;
}

const fullName2 = function (fn, ln) {
    return fn + ' ' + ln;
}

// arrow function
const fullName3 = (fn, ln) => {
    return fn + ' ' + ln;
}

//Write an expression that calls the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName
document.getElementById('fullName').textContent = fullName(firstName, lastName);

//Write an expression that calls the fullName function expression and writes the result to an existing HTML element's text node with the ID of fullName2
document.getElementById('fullName2').textContent = fullName2(firstName, lastName);  

document.querySelector('#fullName3').textContent = fullName3(firstName, lastName);