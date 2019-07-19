//Destructuracion de Objetos Sintaxis let { }

let avenger = {
    nombrecap: "Steve",
    clave: "Capitan America",
    poder: "Droga"
}


//Los nombres deben ser los mismos

let {nombrecap, clave, poder} = avenger;

// let nombrecap = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

console.log(nombrecap,clave,poder);


//Destructuracion de Arreglos
// En los arreglos la destructuracion es secuencial 

let avengers:String[] = ["Thor", "Spiderman", "Ironman"]

let [thor, capi, ironman2] = avengers;

console.log( thor,capi,ironman2);