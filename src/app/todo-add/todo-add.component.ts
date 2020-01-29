import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Output() addedTask = new EventEmitter<Todo>();
  
  name: string;
  description: string;

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    //console.log(name + " " + description);
    this.addedTask.emit(new Todo(this.name, this.description));
    this.onClear();
  }

  onClear(){
    this.name ="";
    this.description = "";
  }
  
}
