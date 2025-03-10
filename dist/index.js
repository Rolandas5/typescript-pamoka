"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 1));
console.log(add(2, 2));
console.log(add(3, 3));
console.log(add(4, 4));
// Paprasti tipai (Basic types)
const firstName = 'Rolandas';
const surName = 'Bendorius';
const age = 27;
const hobiai = ['sportas', 'keliones', 'programavimas'];
const isStudent = false;
const pazymiai = [7, 10, 8, 9];
// any  leidzia viska, taciau nereikia naudoti - NEREKOMENDUOJAMAS !
const balai = [7, 10, 8, 9];
// galima ipusint ti kta duomenu tipa kuri supranta
pazymiai.push(10);
// Union types (sujungti tipai)
let id;
id = 123;
id = '123';
function printId(id) {
    if (typeof id === 'string') {
        console.log('Tavo id ilgis yra', id.length);
    }
    else if (typeof id === 'number') {
        console.log('Tavo id yra', id);
    }
}
printId('123');
printId(123);
const person = {
    name: 'Rolandas',
    surname: 'Bendorius',
    age: 40,
    email: 'rolandas.bendorius@gmail.com',
    hobbies: ['sportas', 'keliones', 'programavimas'],
};
console.log(person.name);
console.log(person.email);
console.log(person.hobbies);
// Interface .js faile neatsivaizduoja, nes jis naudojamas ir skirtas teisingam kodui parasyti
function showInfo(person) {
    if (person.role === 'darbuotojas') {
        console.log('Darbuotojas', person.role, person.atlyginimas, person.vardas);
    }
    else {
        console.log('Vadovas', person.skyrius);
    }
}
let vadovas = {
    role: 'vadovas',
    vardas: 'Jonas',
    skyrius: 'Pardavimai',
};
let darbuotojas = {
    role: 'darbuotojas',
    vardas: 'Petras',
    atlyginimas: 1000,
};
// Tuples - masyvas su fiksuotui kiekiu elelmentu ir isdestymu
let asmuo = [
    'Rolandas',
    'Bendorius',
    40,
    'Sportas',
];
console.log(asmuo[3].length);
