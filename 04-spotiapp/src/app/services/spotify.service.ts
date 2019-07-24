import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("Spotify service ready.")
  }
  
  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBQHRvLC3IhBljf2GwAk6HWFh2Ul-HiXNYdPbiQwHmvE1witDCNSVwi-wBGc0GCCR4pmHpA30Ln8XhJOgg'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
        // .subscribe(data => {
        //   console.log(data)
        // })
    
  }

}
