//Parametros obligatoros, por defecto y opcionales (?)

function activar(   quien:string, 
                    objeto:string = "batiseñal",
                    momento?:string){
    let mensaje:string;

    if(momento){
        mensaje = `${quien} activo la ${objeto} en la ${momento}.`
    }else{
        mensaje = `${quien} activo la ${objeto}.`
    }
                    
    
    console.log(mensaje);
}

activar("Gordon");

activar("Gordon", "Computadora");

activar("Gordon", "Computadora", "mañana");


// Funciones de Flecha 

let miFuncion = function(a){
    return a;
}

// Recibe como argumento a y retorna a
let miFuncionF = a => a;

let miFuncion2 = function(a:number,b:number){
    return a+b;
}

let miFuncion2F = (a:number,b:number) => a+b;

let miFuncion3 = function (nombre3:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre
}

console.log(miFuncion("Hola Alonso."))
console.log(miFuncion("Hola Jose."))

console.log(miFuncion3("Jose."))
console.log(miFuncion3F("Jose."))


// Porque son buenas las funciones de flecha
// Cuando se ejecuta un timeout dentro de un objeto
// El timeout apunta al objeto global no a su scope.
let hulk = {
    nombre:"Hulk",
    smash(){
        setTimeout(function(){
            console.log(this.nombre + " smash!!")
        },1500);
    }
}

// Importancia de la flecha hace que trabaje sobre el scope.
// El this no es afectado.
let ironman = {
    nombre:"Ironman",
    smash(){
        setTimeout(() =>{
            console.log(this.nombre + " smash!!")
        },1500);
    }
}

hulk.smash();   
ironman.smash();