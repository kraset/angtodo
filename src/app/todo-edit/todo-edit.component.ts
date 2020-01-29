import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  @Input() task: Todo;
  @Output() editDoneEvent = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onEditDone(name: string, description: string){
    console.log(name + " " + description);
    this.editDoneEvent.emit(new Todo(name, description));
  }
  
}
