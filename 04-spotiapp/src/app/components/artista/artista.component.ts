import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  loading:boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private spotify: SpotifyService) {

    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
    })

  }

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id)
      .subscribe(artista => {
        this.artista = artista;
        this.loading = false;
      })
  }

  ngOnInit() {
  }

}
