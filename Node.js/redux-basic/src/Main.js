import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, DELETE_TODO } from "./store/todo";

export default function Main() {

    const [text, setText] = useState('');

    //useSelector(): redux store를 조회하는 것
    //인자로 콜백함수, 콜백함수의 매개변수로 state를 받을 수 있음
    //자동으로 subscribe를 하고 있기 때문에 데이터가 변형되면 컴포넌트가 재실행됨.
    const todos = useSelector((state) => state);
    console.log(todos);
    //dispatch는 우리가 호출 할 수 있는 함수
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preaventDatalt();

        dispatch({type: ADD_TODO, text})
        setText('');
    }

    const onClick = (id) => {
        dispatch({type: DELETE_TODO, id})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>To Dos</h1>
                <input value={text} onChange={e => setText(e.target.value)}/>
                <button>ADD</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} id={todo.id}>
                        {todo.text}
                        <button onClick={() => onClick(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};