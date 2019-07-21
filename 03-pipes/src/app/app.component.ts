import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Alonso";
  nombre2 = "jOSe aLONSo MediNa DonAYRe"
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 2499.99

  hero = {
    nombre:"Alonso",
    edad:23,
    nacionalidad:"peruana",
    sexo:"masculino",
    direccion:{
      distrito: "La Molina",
      calle: "Jiron Lurin 123"
    }
  }

  valorDePromesa = new Promise( (resolve,reject)=>{
    setTimeout(()=>resolve("LLego la data"),3500);
  });

  fecha = '1995-11-22';
  video = "77W1lUVR4DE";

  activar:boolean = true;

}
