import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario:Object ={
    nombre:"Alonso",
    apellido: "Medina",
    correo: "alonsomedo@hotmail.com"
  }

  constructor() { }


  ngOnInit() {
  }

  guardar(form:NgForm){
    console.log(form)
    console.log(form.value)
    console.log(this.usuario)
  }

}
