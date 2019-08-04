import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


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
    password2:'',
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
      ]),
      'username': new FormControl('',Validators.required, this.existeUsuario ),
      'password1': new FormControl('',Validators.required),
      'password2': new FormControl('')
    })

    this.forma.controls['password2'].setValidators([Validators.required,this.noIgual.bind(this)])
    //this.forma.setValue(this.usuario)
   }

   agregarPasatiempo(){
     (<FormArray>this.forma.controls['pasatiempos']).push(
       new FormControl('Dormir', Validators.required)
     )
   }

   noMedina(control:FormControl):{[s:string]:boolean}{
      if(control.value == "medina"){
        return {
          nomedina:true
        }
      }

      return null;
   }

   noIgual(control:FormControl):{[s:string]:boolean}{
    
    //let forma: any = this;

    if(control.value !== this.forma.controls['password1'].value){
      return {
        noiguales:true
      }
    }

    return null;
 }

 existeUsuario (control: FormControl): Promise<any>|Observable<any> {
   let promesa = new Promise(
    (resolve, reject) => {
      setTimeout(()=>{
        if(control.value === "strider"){
          resolve({existe:true})
        }else{
          resolve(null)
        }
      },3000)
    } 
   )

   return promesa;
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
