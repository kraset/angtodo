import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';
import { TaskAction } from 'src/app/model/task-action.model';
import { TaskActionType } from 'src/app/model/task-action-type.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Todo;
  @Output() onTaskAction = new EventEmitter<TaskAction>();

  constructor() { }

  ngOnInit() {
  }

  getStyle(){
    return this.task.done ? 'line-through':'';
  }

  onDone(){
    this.task.done=!this.task.done;
  }

  onEdit(){
    this.onTaskAction.emit(new TaskAction(this.task.id, TaskActionType.Edit));
  }

  onDelete(){
    this.onTaskAction.emit(new TaskAction(this.task.id, TaskActionType.Delete));
  }

}
