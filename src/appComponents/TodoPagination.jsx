import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { TodoContext } from '../components/context';
import Button from '../components/Button';

const TodoPagination = observer(() => {
  const rootStore = useContext(TodoContext);

  return (
    <div className="flex justify-center">
      <Button
        disabled={rootStore.todoStore.currentPage === 1}
        onClick={rootStore.todoStore.prevPage}
        text="prev"
      />
      <p className="p-2">
        Page: {rootStore.todoStore.currentPage} of {rootStore.todoStore.totalPages}
      </p>
      <Button
        disabled={rootStore.todoStore.currentPage === rootStore.todoStore.totalPages}
        onClick={rootStore.todoStore.nextPage}
        text="next"
      />
    </div>
  );
});

export default TodoPagination;
