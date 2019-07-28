import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {
  
  alerta = "alert-danger"
  propiedad:Object = {
    danger:true
  }
  loading:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading = true;
    setTimeout(() => this.loading = false,3000)
  }

}
