var name = prompt("Nome");

var surname = prompt("Cognome");

var color = prompt("Colore preferito");

var password = name + surname + color;

document.getElementById('name').innerHTML = name;

document.getElementById('surname').innerHTML = surname;

document.getElementById('color').innerHTML = color;

document.getElementById('password').innerHTML = name + surname + color;
document.getElementById('password').innerHTML = password;
