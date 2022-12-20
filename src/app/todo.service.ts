import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
   providedIn: 'root'
})

export class ToDoLogik{

   constructor(private http: HttpClient){}

   getItem(){
    return  this.http.get('api/todos')
   }

}