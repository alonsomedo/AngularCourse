import { Injectable } from '@angular/core';
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "ee0901cf564306e39b0c0f7b0ad43f7b";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(private jsonp: HttpClientJsonpModule,
    private http: HttpClient) { }

    getPopulares(){
      let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
      return this.http.jsonp(url, 'callback');
    }

    buscarPelicula(movieName: string){
      let url = `${ this.urlMoviedb }/search/movie?query=${ movieName }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback');
    }


}
