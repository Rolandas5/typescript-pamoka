function add(a: number, b: number) {
  return a + b;
}

console.log(add(2, 1));
console.log(add(2, 2));
console.log(add(3, 3));
console.log(add(4, 4));

// Paprasti tipai (Basic types)
const firstName: string = 'Rolandas';
const surName: string = 'Bendorius';
const age: number = 27;
const hobiai: string[] = ['sportas', 'keliones', 'programavimas'];
const isStudent: boolean = false;
const pazymiai: number[] = [7, 10, 8, 9];
// any  leidzia viska, taciau nereikia naudoti - NEREKOMENDUOJAMAS !
const balai: any[] = [7, 10, 8, 9];
// galima ipusint ti kta duomenu tipa kuri supranta
pazymiai.push(10);

// Union types (sujungti tipai)
let id: string | number;

id = 123;
id = '123';

function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log('Tavo id ilgis yra', id.length);
  } else if (typeof id === 'number') {
    console.log('Tavo id yra', id);
  }
}

printId('123');
printId(123);

// Object types (objektai)

interface Person {
  name: string;
  surname: string;
  age: number;
  email: string;
  // ? - opttional, nebutina tureti .... jis glai buti, gali nebuti
  hobbies?: string[];
}

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

interface Darbuotojas {
  role: 'darbuotojas';
  vardas: string;
  atlyginimas: number;
}

interface Vadovas {
  role: 'vadovas';
  vardas: string;
  skyrius: string;
}

// Interface .js faile neatsivaizduoja, nes jis naudojamas ir skirtas teisingam kodui parasyti

function showInfo(person: Vadovas | Darbuotojas) {
  if (person.role === 'darbuotojas') {
    console.log('Darbuotojas', person.role, person.atlyginimas, person.vardas);
  } else {
    console.log('Vadovas', person.skyrius);
  }
}

let vadovas: Vadovas = {
  role: 'vadovas',
  vardas: 'Jonas',
  skyrius: 'Pardavimai',
};

let darbuotojas: Darbuotojas = {
  role: 'darbuotojas',
  vardas: 'Petras',
  atlyginimas: 1000,
};

// Tuples - masyvas su fiksuotui kiekiu elelmentu ir isdestymu

let asmuo: [string, string, number, string] = [
  'Rolandas',
  'Bendorius',
  40,
  'Sportas',
];

console.log(asmuo[3].length);
