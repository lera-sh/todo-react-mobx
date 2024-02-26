import React, { useCallback, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { TodoContext } from '../components/context';
import Button from '../components/Button';
import arrowDown from '../assets/arrow-down.svg';
import arrowUp from '../assets/arrow-up.svg';

const TodoSorting = observer(() => {
  const rootStore = useContext(TodoContext);

  const handleSortingBy = useCallback(
    (event) => {
      rootStore.todoStore.changingSortByValue(event.target.value);
    },
    [rootStore]
  );

  return (
    <div className="flex justify-center text-xs">
      <select onChange={handleSortingBy} value={rootStore.todoStore.sortBy}>
        <option value="name">By name</option>
        <option value="isCompleted">By completed</option>
      </select>
      <Button
        img={rootStore.todoStore.sortDir > 0 ? arrowDown : arrowUp}
        onClick={rootStore.todoStore.changingSortDirValue}
      />
    </div>
  );
});

export default TodoSorting;
