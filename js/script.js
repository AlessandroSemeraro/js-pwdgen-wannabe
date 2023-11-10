//Name//
const userName = prompt('inser your name');
console.log (userName); 

//Surname//
const userSurname = prompt('inser your surname');
console.log (userSurname);

//Favorite Color//
const favoritColor = prompt('What is your favorite color?');
console.log (favoritColor);

//number 21//
const number = 21;

//concatenazione//
const sum = (userName + userSurname + favoritColor + number);
console.log (userName + userSurname + favoritColor + number);


document.getElementById('output').innerHTML = sum;