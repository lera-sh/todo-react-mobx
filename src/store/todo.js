import { makeObservable, observable, action } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

class Todo {
  id = null;
  userId = null;
  @observable name = '';
  @observable isCompleted = false;

  constructor(rootStore, data) {
    this.rootStore = rootStore
    this.name = data.name;
    this.id = data.id || uuidv4();
    this.isCompleted = data.isCompleted || false
    this.userId = data.userId
    makeObservable(this);
  }

  delete = () => {
    this.rootStore.todoStore.removeTodo(this.id)
  }

  @action
  complete = () => {
    this.isCompleted = !this.isCompleted
    this.rootStore.todoStore.updateTodo(this)
  }

  @action
  edit = (editedName) => {
    this.name = editedName
    this.rootStore.todoStore.updateTodo(this)
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      isCompleted: this.isCompleted,
      userId: this.userId
    }
  }

  @action
  fromJSON(data) {
    Object.keys(data).forEach(x => {
      this[x] = data[x]
    })
  }
}

export default Todo

