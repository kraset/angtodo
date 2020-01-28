import { Component } from '@angular/core';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';

  tasks: Todo[] = [
    new Todo("Diska", "Diska upp i köket."),
    new Todo("Städa", "Dammsuga och våttorka."),
  ];
  
  constructor(){

  }


  onTaskAdded(task: Todo){
    this.tasks.push(task);
  }

}
