import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { TodoContext } from '../components/context.js';
import TodoItem from './TodoItem';

const TodoList = observer(() => {
  const rootStore = useContext(TodoContext);

  useEffect(() => {
    rootStore.todoStore.init();
  }, [rootStore]);

  console.log(rootStore.todoStore.currentTodos)

  return (
    <div>
      {rootStore.todoStore.currentTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <p className="p-3">
        Completed tasks: {rootStore.todoStore.completedCount} of {rootStore.todoStore.todosAmount}
      </p>
    </div>
  );
});

export default TodoList;
