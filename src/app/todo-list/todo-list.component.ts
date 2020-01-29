import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TaskAction } from '../model/task-action.model';
import { TaskActionType } from '../model/task-action-type.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() tasks: Todo[];
  @Output() taskActionEvent = new EventEmitter<TaskAction>();

  constructor() { }

  ngOnInit() {
  }

  onTaskAction(taskAction: TaskAction){
    console.log(taskAction);

    //If it's the delete action...
    if (taskAction.action === TaskActionType.Delete){
      //For all tasks, filter the ones that is not currently deleted
      this.tasks = this.tasks.filter( x => x.id != taskAction.id);      
    }
    else{
      this.taskActionEvent.emit(taskAction);
    }

  }

}
