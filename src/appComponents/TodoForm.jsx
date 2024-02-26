import React, { useCallback, useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { TodoContext } from '../components/context';
import Button from '../components/Button';
import InputText from '../components/InputText';

const TodoForm = observer(() => {
  const rootStore = useContext(TodoContext);
  const [todo, setTodo] = useState('');

  const handleEnterTodo = useCallback((event) => setTodo(event.target.value), []);

  const handleAddTodo = useCallback(() => {
    rootStore.todoStore.addTodo(todo);
    setTodo('');
  }, [rootStore, todo]);

  return (
    <div className="flex justify-center py-4">
      <InputText onChange={handleEnterTodo} placeholder="Enter what todo" value={todo} />
      <Button disabled={!todo} onClick={handleAddTodo} text="Create" />
    </div>
  );
});

export default TodoForm;
