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
      'Authorization': 'Bearer BQDtEFggjGjgPb0zWu5BuQT4Fjbhg5v-5qOkmD7A3mmqhB0EI_lky-jQWSv_og-zqaGh9p_MOf7mBiPsDvo'
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

  getArtistas(termino:string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                  .pipe(map( data => data['artists'].items))
  }

  getArtista(id:string){
    return this.getQuery(`artists/${ id }`);
                  //.pipe(map( data => data['artists'].items))
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                  .pipe(map(data => data['tracks']));
  }
}
