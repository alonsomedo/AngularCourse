import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../servicios/heroes.services';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  constructor(private _heroesService:HeroesService) { 
    
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes()   
  }

}
