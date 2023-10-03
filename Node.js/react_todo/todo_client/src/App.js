// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//     const [todos, setTodos] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const todoData = async () => {
//             const res = await axios({
//                 method: "GET",
//                 url: "http://localhost:8000/todos",
//             });
//             console.log(res.data.data);
//             setTodos(res.data.data);
//             setLoading(false);
//         };
//         todoData();
//     }, []);

//     return (
//         <div>
//             {loading ? (
//                 <div>Loading...</div>
//             ) : (
//                 <ul>
//                     {todos.map((value) => {
//                         return <li key={value.id}>{value.title}</li>;
//                     })}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default App;

import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import './styles/App.scss';
import { useState, useEffect } from 'react';
// import axios from 'axios';
const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:8080', // 서버 주소
  withCredentials: true, // 인증 정보 (예: 쿠키)를 전달할 경우 true
});

// 나머지 Axios 요청 설정...



// import {process.env.REACT_APP_DB_HOST} from './app-config';
// console.log(process.env.REACT_APP_DB_HOST);
console.log(process.env.REACT_APP_DB_HOST);

function App() {
  // todo마다 내용이 달라야함. 임시 상태 관리
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    // console.log('mount 완료');
    const getTodos = async () => {
      const res = await axios.get(process.env.REACT_APP_DB_HOST+'/api/todos');
      console.log(res);
      setTodoItems(res.data);
    };
    getTodos();
  }, []);

  // Todo 추가 함수
  const addItem = async (newItem) => {
    // newItem => {title:'xxx'}
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;
    // // newItem => {title:'xxx', id:n, done: false}

    // setTodoItems([...todoItems, newItem]);

    // axios 요청 날리기
    const res = await axios.post(process.env.REACT_APP_DB_HOST+'/api/todo', newItem);
    console.log(res.data);
    // ...todoItems: 기존 아이템
    // Res.data : 새로운 아이템 {id: n, title:'xx' , done:false}
    setTodoItems([...todoItems, res.data]);
  };

  // Todo 삭제하는 함수
  const deleteItem = async (targetItem) => {
    // targetItem => { title: 'xxx', id: n, done: false}
    // 1. filter() targetItem의 id 와 todoItems 의 id가 같지 않은 애들을 새로운 애들로 반환
    // const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    // 2. state 변경
    // setTodoItems(newTodoItems);
    await axios.delete(process.env.REACT_APP_DB_HOST+`/api/todo/${targetItem.id}`);
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  // todo 수정하는 함수
  // (1) 서버 API를 이용해 디비 데이터 업데이트
  // (2) 변경된 내용을 화면에 다시 출력
  const updateItem = async (targetItem) => {
    console.log(targetItem);
    await axios.patch(
      process.env.REACT_APP_DB_HOST+`/api/todo/${targetItem.id}`,
      targetItem
    );
  };

  todoItems.sort(function(a, b) { // 내림차순
    return b.id - a.id;
});

  document.title='게으른 J의 Todo List';

  return (
    <div className="App">
      <div className="box">
        <div className="title">
          <h2>TodoList</h2>
        </div>
        {/* todo 추가 input */}
        <AddTodo addItem={addItem} />
        {/* 현재 투두 목록 개수 보이기 */}
        <div className="left-todos">📝 {todoItems.length} Todos</div>
        {/* todo 목록 보이는 부분 */}
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
          <p className="empty-todos">할 일을 추가해주세요 </p>
        )}
      </div>
    </div>
  );
}

export default App;