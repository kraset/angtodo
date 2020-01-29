import { TaskActionType } from './task-action-type.model';

export class TaskAction{
    constructor(public id: number, public action: TaskActionType){}
}
