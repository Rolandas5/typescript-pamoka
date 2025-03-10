"use strict";
// Uzduoys:
// Parasykite TypeScript koda, kuris deklaruoja kintamaji name ir priskiria jam string reiksme.
// Taip pat deklaruokite kintamaji amzius ir priskirkite jam skaiciu. Atspausdinkite vardo ir amziaus reiksmes.
let vardas = 'Jonas';
let amzius = 30;
console.log('vardas:', vardas);
console.log('amzius:', amzius);
// parasykite TypeScript koda, kuris deklaruoja konkretaus duomenu masyva. Parasykite iprastas masyvo operacijas,
// tokias kaip elementu pridejimas ar pasalinimas is masyvo, taip pat masyvo elementu pateikimas konsoleje.
let skaiciai = [1, 2, 3, 4, 5];
skaiciai.push(6);
// pasalinanmas pirmas elementas
// Kai naudojame splice(0, 1), tai reiškia:
// 0 – indeksas, nuo kurio pradedame pašalinimą (šiuo atveju pirmas masyvo elementas).
// 1 – kiek elementų pašalinti (vieną elementą).
skaiciai.splice(0, 1);
console.log(skaiciai);
