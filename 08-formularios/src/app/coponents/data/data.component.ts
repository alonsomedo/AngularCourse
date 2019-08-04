import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  usuario:Object ={
    nombreCompleto:{
      nombre:'Alonso',
      apellido:'Medina'
    },
    correo:'alonsomedo@ghotmail.com',
    pasatiempos: ["Correr","Dormir","Futbol","Natacion"]
  }

  constructor() {
    
    console.log(this.usuario)

    this.forma = new FormGroup({
      
      'nombreCompleto':new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        'apellido': new FormControl('', [
                                          Validators.required,
                                          this.noMedina
                                        ]),
      }),
      'correo': new FormControl('', [
                                      Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]),
      'pasatiempos':new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    })

    //this.forma.setValue(this.usuario)
   }

   agregarPasatiempo(){
     (<FormArray>this.forma.controls['pasatiempos']).push(
       new FormControl('Dormir', Validators.required)
     )
   }

   noMedina(control:FormControl):{[s:string]:boolean}{
      if(control.value == "herrera"){
        return {
          nomedina:true
        }
      }

      return null;
   }

   guardarCambios(){
     console.log(this.forma.value)
     console.log(this.forma)
     
    //  this.forma.reset(this.usuario)
    // this.forma.reset({
    //   nombreCompleto:{
    //     nombre:"",
    //     apellido:""
    //   },
    //   correo:""
    // })

   }

  ngOnInit() {
  }

}
