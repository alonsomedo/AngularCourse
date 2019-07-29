import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:UsuarioModel;

  constructor() { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();

    this.usuario.email = "alonso2295@hotmail.com";
  }

  onSubmit(form:NgForm){
    console.log(form)
    console.log(this.usuario)
    if(form.invalid){return}
    

  }

}
