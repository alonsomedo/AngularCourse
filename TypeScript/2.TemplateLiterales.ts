
let nombre2:string = "Juan"
let apellido:string = "Perez"

//let texto = "Hola, " + nombre + " " + apellido + "."

let texto = `Hola, ${nombre2} 
${apellido}`

function getNombre(){
    return "Fernando";
}

let texto2:string =  `${ getNombre()}`

console.log(texto);
console.log(texto2);