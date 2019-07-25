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
      'Authorization': 'Bearer BQBXWChRmiu9JY9kpM482XX3PDIVruJcCeube-Zj0XbSJT_sypp4rIyraF2ECDbpo-LLNypMpLIQ5kWMg2k'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
        // .subscribe(data => {
        //   console.log(data)
        // })
    
  }

  getArtista(termino:string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBXWChRmiu9JY9kpM482XX3PDIVruJcCeube-Zj0XbSJT_sypp4rIyraF2ECDbpo-LLNypMpLIQ5kWMg2k'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{ headers })
        // .subscribe(data => {
        //   console.log(data)
        // })


  }

}
