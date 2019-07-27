import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  lista: Lista[] = []

  constructor() {
    const LISTA1 = new Lista("Recolectar piedras del infinito.");
    const LISTA2 = new Lista("Heroes a desaparecer.");
    this.lista.push(LISTA1, LISTA2);

  }

  getListas() {

  }
}
