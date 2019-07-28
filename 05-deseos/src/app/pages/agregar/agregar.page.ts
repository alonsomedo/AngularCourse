import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-items.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem:string='';

  constructor(private deseosService: DeseosService,
    private activatedRoute: ActivatedRoute) {

    const listaId = this.activatedRoute.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.obtenerLista(listaId);
  }

  ngOnInit() {
  }

  agregarItem(){
    if(this.nombreItem.length === 0){
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem); //Agregando Item, como ya hicimos el push a la lista, solo la guardamos con el método guardarStorage()
    this.nombreItem = '';
    this.deseosService.guardarStorage();

  }

  cambioCheck(item:ListaItem){

    const pendientes = this.lista.items.filter(filteredItem => filteredItem.completado == false)
                                        .length;
    
    if(pendientes === 0){
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    }else{
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseosService.guardarStorage();

    console.log(this.lista)

  }

}
