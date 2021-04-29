import {v4 as uuidv4} from 'uuid';

class TodoItemModel{
    constructor(title){
        this.title = title;
        this.id = uuidv4();
        this.completed = false;        
    }
}
export default TodoItemModel;