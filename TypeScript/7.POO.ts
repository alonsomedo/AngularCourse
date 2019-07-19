// Clase Basica

class Avenger {
    nombre:string;
    equipo:string;
    nombreReal:string;
    
    puedePelar:boolean;
    peleasGanadas:number;

    //Constructor basico

    constructor(nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

}

let antman:Avenger = new Avenger("Antman", "Cap", "Scott Lang");

console.log(antman)

