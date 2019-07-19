//Interfaces
interface Xmen{
    nombre:string,
    poder:string
}

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
function enviarMision(xmen:Xmen){
    console.log("Enviando a: " + xmen.nombre)
}

function enviarCuartel(xmen:Xmen){
    console.log("Enviar al cuartel " + xmen.nombre)
}


let wolverine:Xmen = {
    nombre: "Wolverine",
    poder: "Regeneracion"
}

enviarMision(wolverine)
enviarCuartel(wolverine)