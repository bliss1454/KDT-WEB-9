import { useState } from 'react';
import '../styles/AddTodo.scss';

const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const OnButtonClick = (e) => {
    console.log(todoItem.title.length);
    if (!todoItem.title.length) {
      return;
    }

    addItem(todoItem);
    setTodoItem({ title: '' });
  };

  const onEnterKeyDown = (e) => {
    if (e.key == 'Enter') {
      OnButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="그냥 해 임마"
        onChange={(e) => {
          setTodoItem({ title: e.target.value });
        }}
      />
      <button onClick={OnButtonClick}></button>
    </div>
  );
};

export default AddTodo;