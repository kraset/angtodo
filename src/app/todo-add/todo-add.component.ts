import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Output() addedTask = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(name: string, description: string){
    console.log(name + " " + description);
    this.addedTask.emit(new Todo(name, description));
  }
  
}
