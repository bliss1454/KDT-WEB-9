import '../styles/Todo.scss';
import React from 'react';
import { useState } from 'react';
const Todo = ({ item, deleteItem, updateItem }) => {
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };

  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  const EnterKeyEventHandle = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
      updateItem(todoItem);
    }
  };

  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    const updatedItem = {
      done: e.target.checked,
      ...rest,
    };

    setTodoItem(updatedItem);
    updateItem(updatedItem);
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done}
        onChange={checkboxEventHandler}
      />
      <label htmlFor={`todo${item.id}`}></label>
      <input
        type="text"
        value={todoItem.title}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        style={{ textDecoration: todoItem.done ? 'line-through' : 'none', textDecorationColor: todoItem.done ? 'red' : 'black'}}
      />

      <button
        onClick={onDeleteButtonClick}
      ></button>
    </div>
  );
};
export default Todo;