import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminado = true;

  constructor(public deseosService: DeseosService,
    private router: Router) {

  }

  ngOnInit() { }

  listaSeleccionada(listaId: number) {
    if (this.terminado) {
      this.router.navigateByUrl(`tabs/tab2/agregar/${listaId}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/agregar/${listaId}`);
    }

  }


}
