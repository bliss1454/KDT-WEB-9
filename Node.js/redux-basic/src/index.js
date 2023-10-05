import { createStore } from 'redux';

const write = document.querySelector("#write");
const add = document.querySelector("#add");
const todos = document.querySelector("#todos");

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        todos: [...state.todos, { id: Date.now(), text: write.value }],
      };
    case "DEL":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

const todoStore = createStore(todoReducer);

const renderTodos = () => {
  todos.innerHTML = "";
  todoStore.getState().todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DEL";
    deleteButton.addEventListener("click", () => {
      todoStore.dispatch({ type: "DEL", id: todo.id });
    });

    listItem.appendChild(deleteButton);
    todos.appendChild(listItem);
  });
};

todoStore.subscribe(renderTodos);

add.addEventListener("click", () => {
  todoStore.dispatch({ type: "ADD" });
  write.value = "";
});

////리더스를 이용한 숫자증가, 감소 코드
// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

// const ADD = 'ADD';
// const MINUS = 'MINUS';

//reducer
// const countReducer = (state = 0, action) => {
//   console.log(state,action);
//   switch (action.type) {
//     case ADD:
//       return state +1;
//     case MINUS:
//       return state -1;
//     default:
//       return state;
//   }
// };

//store는 데이터를 넣는 곳
//createStore: store생성, 리듀서 함수가 필수다
// const countStore = createStore(countReducer);
// console.log(countStore);

//subscribe는 데이터와 저장소가 변경될 때마다 콜백함수를 실행한다.
// countStore.subscribe(() => {
  //getState는 저장소에서 최신상태의 값을 반환할때 쓰는 메소드
//   num.textContent = countStore.getState()
// });
// add.addEventListener("click", () => {
//   countStore.dispatch({ type: "ADD" });
// });
// minus.addEventListener("click", () => {
//   countStore.dispatch({ type: "MINUS" });
// });

// countStore.dispatch({ type: "ADD" });

// console.log(countStore.getState())

////자바스크립트를 이용한 숫자증가, 감소 코드
// let count = 0;

// add.addEventListener("click", ()=> {
//   count = count + 1;
//   num.textContent = count;
// });

// minus.addEventListener("click", ()=> {
//   count = count - 1;
//   num.textContent = count;
// });