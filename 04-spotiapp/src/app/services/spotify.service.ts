import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("Spotify service ready.")
  }
  

  getQuery(query:string){

    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB-U99b6dc4KnVdrC7moUA_-spz469zZ6HkP3yVSODIf9z-dQdlWFjRqFR-xF5ZL7PRR9MNJFf5yFWqozk'
    })

    return this.http.get(url,{headers});
  }

  getNewReleases(){


    return this.getQuery('browse/new-releases')
                  .pipe(map(data=>data['albums'].items))

        // .subscribe(data => {
        //   console.log(data)
        // })
    
  }

  getArtista(termino:string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                  .pipe(map( data => data['artists'].items))

        // .subscribe(data => {
        //   console.log(data)
        // })
  }

}
