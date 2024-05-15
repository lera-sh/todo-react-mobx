import React, { useEffect, useCallback, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Button from '../components/Button';
import InputCheckbox from '../components/InputCheckbox';

const TodoItem = observer(({ todo }) => {
  const todoRef = useRef(null);
  const [editText, setEditText] = useState(todo.name);

  const handleNameChanging = useCallback((event) => setEditText(event.target.value), []);
  const handleEditTodo = useCallback(() => todo.edit(editText), [todo, editText]);

  useEffect(() => {
    const todo = todoRef.current;

    todo.addEventListener('blur', handleEditTodo);
    todo.addEventListener('focuseout', handleEditTodo);
    todo.addEventListener('keydown', (event) => {
      if (event.code === 'Enter') {
        event.preventDefault();
        event.target.blur();
      }
    });

    return () => {
      todo.removeEventListener('blur', handleEditTodo);
      todo.removeEventListener('focuseout', handleEditTodo);
      todo.removeEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
          event.preventDefault();
          event.target.blur();
        }
      });
    };
  });

  return (
    <ul className="bg-gray-600 flex justify-between my-3 p-2">
      <InputCheckbox
        ref={todoRef}
        checked={todo.isCompleted}
        onChange={todo.complete}
        onUpdate={handleNameChanging}
        text={editText}
      />
      <Button onClick={todo.delete} text="Delete" />
    </ul>
  );
});

export default TodoItem;
