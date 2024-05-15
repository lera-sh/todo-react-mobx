import { makeObservable, action, computed, observable, flow } from 'mobx';
import { firestore } from '../firebaseConfig';
import { collection, doc, setDoc, getDocs, query, where, updateDoc, deleteDoc } from "firebase/firestore"
import Todo from './todo';

const sortFns = {
  isCompleted: (a, b) => a - b,
  name: (a, b) => a.localeCompare(b)
}

class TodoStore {
  todosPerPage = 5
  @observable.shallow data = new Map();

  @observable sortBy = 'name'
  @observable sortDir = 1
  @observable currentPage = 1
  @observable isLoading = false

  constructor(rootStore) {
    makeObservable(this)

    this.rootStore = rootStore
  }

  @computed
  get todos() {
    return [...this.data.values()]
  }

  @flow.bound
  *init() {
    this.rootStore.userStore.init()
    const ref = query(collection(firestore, 'todos'), where('userId', '==', this.rootStore.userStore.currentUserId))

    const data = yield getDocs(ref)

    data.forEach((doc) => {
      const todo = new Todo(this.rootStore, doc.data())
      this.data.set(todo.id, todo);
    })
  }

  @action
  async addTodo(name) {
    const data = {name: name, userId: this.rootStore.userStore.currentUserId}
    const todo = new Todo(this.rootStore, data)
    this.data.set(todo.id, todo);

    const ref = collection(firestore, 'todos')
    await setDoc(doc(ref, todo.id), todo.toJSON())
  }

  @action
  async removeTodo(id) {
    this.data.delete(id);
    await deleteDoc(doc(firestore, "todos", id))
  }

  @action
  async updateTodo(todo) {
    const ref = doc(firestore, "todos", todo.id)
    await updateDoc(ref, todo.toJSON())
  }

  @action
  changingSortByValue(name) {
    this.sortBy = name
  }

  @action
  changingSortDirValue = () => {
    this.sortDir *= -1
  }

  @action
  nextPage = () => {
    this.currentPage++
  }

  @action
  prevPage = () => {
    this.currentPage--
  }

  @computed
  get sortedTodos() {
    const sortFn = sortFns[this.sortBy]
    return this.todos.slice().sort((a, b) => sortFn(a[this.sortBy], b[this.sortBy]) * this.sortDir);
  }

  @computed 
  get todosAmount() {
    return this.todos.length
  }

  @computed 
  get completedCount() {
    return this.todos.filter((todo) => todo.isCompleted).length;
  }

  @computed 
  get totalPages() {
    return Math.ceil(this.todosAmount / this.todosPerPage) > 0 ? Math.ceil(this.todosAmount / this.todosPerPage) : 1;
  }

  @computed 
  get currentTodos() {
    const startIndex = (this.currentPage - 1) * this.todosPerPage;
    const endIndex = startIndex + this.todosPerPage;
    return this.sortedTodos.slice(startIndex, endIndex);
  }
}

export default TodoStore;
