import TodoStore from './TodoStore';
import UserStore from './userStore';

export class RootStore {
  constructor() {
    this.todoStore = new TodoStore(this);
    this.userStore = new UserStore(this);
  }
}
