export class Todo{

    public static currentId = 1;
    public id: number;

    //Typescript will automatically add and assign the public members...
    constructor(public name: string, public description: string, public done: boolean=false){
        this.id = Todo.currentId++; //this component is responsible for assigning unique ids
    }

}
