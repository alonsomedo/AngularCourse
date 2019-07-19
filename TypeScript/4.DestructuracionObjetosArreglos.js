"use strict";
//Destructuracion de Objetos Sintaxis let { }
var avenger = {
    nombrecap: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
//Los nombres deben ser los mismos
var nombrecap = avenger.nombrecap, clave = avenger.clave, poder = avenger.poder;
// let nombrecap = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
console.log(nombrecap, clave, poder);
//Destructuracion de Arreglos
// En los arreglos la destructuracion es secuencial 
var avengers = ["Thor", "Spiderman", "Ironman"];
var thor = avengers[0], capi = avengers[1], ironman2 = avengers[2];
console.log(thor, capi, ironman2);
