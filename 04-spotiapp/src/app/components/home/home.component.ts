import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private _spotifyServeice: SpotifyService) {
    this.loading = true;

    this._spotifyServeice.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      })

  }
  ngOnInit() { }

}
