import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import './styles/App.scss'
import { useState, useEffect } from 'react';
// import axios from 'axios';
const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

console.log(process.env.REACT_APP_DB_HOST);

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(process.env.REACT_APP_DB_HOST+'/api/todos');
      console.log(res);
      setTodoItems(res.data);
    };
    getTodos();
  }, []);

  const addItem = async (newItem) => {
    const res = await axios.post(process.env.REACT_APP_DB_HOST+'/api/todo', newItem);
    console.log(res.data);
    setTodoItems([...todoItems, res.data]);
  };

  const deleteItem = async (targetItem) => {
    await axios.delete(process.env.REACT_APP_DB_HOST+`/api/todo/${targetItem.id}`);
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  const updateItem = async (targetItem) => {
    console.log(targetItem);
    await axios.patch(
      process.env.REACT_APP_DB_HOST+`/api/todo/${targetItem.id}`,
      targetItem
    );
  };

  todoItems.sort(function(a, b) {
    return b.id - a.id;
});

  return (
    <div className="App">
      <div className="box">
        <div className="title">
          <h2>TodoList</h2>
        </div>
        <AddTodo addItem={addItem} />
        <div className="left-todos">{todoItems.length} 할일</div>
        {todoItems.length > 0 ? (
          todoItems.map((item) => {
            return (
              <Todo
                key={item.id}
                item={item}
                deleteItem={deleteItem}
                updateItem={updateItem}
              />
            );
          })
        ) : (
          <p className="empty-todos"> 할 일을 추가해주세요 </p>
        )}
      </div>
    </div>
  );
}

export default App;