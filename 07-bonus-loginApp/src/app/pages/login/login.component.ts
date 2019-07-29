import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario: UsuarioModel
  recordarme: boolean = false;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email')
      this.recordarme = true;
    }
  }



  longin(form: NgForm) {

    if (form.invalid) { return }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();


    this.auth.logIn(this.usuario)
      .subscribe(rep => {
        console.log(rep)
        Swal.close();
        if (this.recordarme) { 
          localStorage.setItem('email', this.usuario.email) 
        }else{
          localStorage.setItem('email', '') 
        }
        this.router.navigateByUrl('/home')
      }, (errorResponse) => {
        console.log(errorResponse.error.error.message)
        Swal.fire({
          type: 'error',
          title: 'Error al autenticar.',
          text: errorResponse.error.error.message,

        })
      })

  }
}
