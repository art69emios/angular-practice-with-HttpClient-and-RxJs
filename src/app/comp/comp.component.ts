import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  data: any 
  count:number | any
  counter:number | any
  constructor(private dataService:DataService){}

ngOnInit(): void {
  this.dataService.getData().subscribe(ar =>{
    this.data = ar
    console.log(ar);
  })
}

startCount(){
  if(!this.counter){
    this.count = interval(1000).subscribe(num =>{
      this.counter = num
    })
  }
 
}
stopCount(){
  this.count.unsubscribe()
  this.counter = 0
}

}
