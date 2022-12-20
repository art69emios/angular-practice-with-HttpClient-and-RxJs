import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
   providedIn: 'root'
})

export class AlbumService {

   constructor(private http:HttpClient){}

   getAlbumData(){
      return this.http.get('https://jsonplaceholder.typicode.com/albums')
   }

}