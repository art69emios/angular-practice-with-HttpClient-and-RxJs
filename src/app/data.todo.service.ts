import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";


@Injectable({
   providedIn: 'root'
})

export class BackData implements InMemoryDbService{
   constructor(){}

   createDb(){

      let todos = [
      {id:1,name:'buy a bread'},
      {id:1,name:'buy a car'},
      {id:1,name:'take over the world'},
      ]
      return todos

   }
}