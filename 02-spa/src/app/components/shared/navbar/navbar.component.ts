import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/heroes.services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService:HeroesService,
              private router:Router) { 

  }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    this.router.navigate(['/buscar',termino])
  }


}
