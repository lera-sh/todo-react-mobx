import React from 'react';
import { observer } from 'mobx-react-lite';
import { RootStore } from '../store/rootStore';
import { TodoContext } from '../components/context';
import TodoForm from './TodoForm';
import TodoSorting from './TodoSorting';
import TodoList from './TodoList';
import TodoPagination from './TodoPagination';
import SignoutButton from '../authorisation/SignoutButton';

function TodoSection() {
  return (
    <TodoContext.Provider value={new RootStore()}>
      <SignoutButton />
      <h1 className="leading-4 pb-5 text-4xl">Todo-list</h1>
      <TodoForm />
      <TodoSorting />
      <TodoList />
      <TodoPagination />
    </TodoContext.Provider>
  );
}

export default observer(TodoSection);
