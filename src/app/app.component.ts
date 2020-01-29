import { Component, Output } from '@angular/core';
import { Todo } from './model/todo.model';
import { AppState } from './model/state.model';
import { TaskAction } from './model/task-action.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';
  @Output() state: AppState = AppState.AddTask;

  selectedTask: Todo;

  tasks: Todo[] = [
    new Todo("Diska", "Diska upp i köket."),
    new Todo("Städa", "Dammsuga och våttorka."),
  ];
  
  constructor(){

  }

  isAddVisible(){
    return this.state === AppState.AddTask;
  }

  onTaskAdded(task: Todo){
    this.tasks.push(task);
  }
  
  onTaskAction(action: TaskAction){
    this.state = AppState.EditTask;
    this.selectedTask = this.tasks.find(t => t.id == action.id);
  }

  onEditDoneEvent(){
    this.state = AppState.AddTask;
  }

}
