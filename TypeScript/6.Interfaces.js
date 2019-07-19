"use strict";
// Antes
// function enviarMision(xmen:any){
//     console.log("Enviando a: " + xmen.nombre)
// }
// function enviarMision(xmen:{nombre:string}){
//     console.log("Enviando a: " + xmen.nombre)
// }
// function enviarCuartel(xmen:{nombre:string}){
//     console.log("Enviar al cuartel " + xmen.nombre)
// }
//Despues con la interfaz
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviar al cuartel " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
