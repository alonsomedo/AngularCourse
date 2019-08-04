import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  constructor(private heroesService:HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes()
      .subscribe(resp => this.heroes = resp)
  }

  borrarHeroe(heroe: HeroeModel, index: number) {

    Swal.fire({
      title: 'Advertencia!',
      text: `Esta seguro que desea eliminar a ${heroe.nombre}`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(
      resp => {
        if (resp.value) {
          this.heroes.splice(index, 1);
          this.heroesService.borrarHeroe(heroe.id).subscribe();
        }
      }
    )

  }

}
