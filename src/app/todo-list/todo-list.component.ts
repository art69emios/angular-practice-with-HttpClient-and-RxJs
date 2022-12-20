import { Component, OnInit } from '@angular/core';
import { ToDoLogik } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  list: string[] | any = []
  constructor(private toDoServ: ToDoLogik){}

  get(){
    this.toDoServ.getItem().subscribe(todo =>{
      this.list = todo
      console.log(todo);
    } )

  }

  ngOnInit(): void {
    this.get()
  }

}


