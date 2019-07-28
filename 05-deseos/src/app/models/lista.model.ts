import { ListaItem } from './lista-items.model';

export class Lista{
    id:number;
    titulo:string;
    creadaEn:Date;
    terminadaEn:Date;
    terminada:boolean;
    items: ListaItem[];

    constructor(titulo:string){
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.items = [];
        this.id = new Date().getTime();
        this.terminada = false;
    }
}