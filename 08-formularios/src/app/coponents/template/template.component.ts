import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`.ng-invalid.ng-touched:not(form) {
    border:1px solid red;
  }`]
})
export class TemplateComponent implements OnInit {

  usuario:Object ={
    nombre:null,
    apellido: null,
    correo: null,
    pais:""
  }

  paises = [{
    codigo:"PE",
    nombre:"Perú"
  },
  {
    codigo:"ARG",
    nombre:"Argentina"
  },
  {
    codigo:"ES",
    nombre:"España"
  }
]

  constructor() { }


  ngOnInit() {
  }

  guardar(form:NgForm){
    console.log(form)
    console.log(form.value)
    console.log(this.usuario)
  }

}
