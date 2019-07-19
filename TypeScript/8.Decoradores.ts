
//Decorador : es una funcion, cuando le pasamos la clase siempre se envia el constructor

function consola (construtor:Function){
    console.log(constructor);
}


@consola
class Villano{
    constructor(public nombre:string){

    }
}