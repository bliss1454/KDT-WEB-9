import { useState, useEffect } from "react";

function Mycomponent(props) {
    const {number} = props;
    const [text, setText] = useState('');

    useEffect( () => {    //첫번째 인자는 함수이다.(컴포넌트가 열리고 나서 바로 실행된다)
        console.log('항상 실행됩니다')
    } );
    useEffect( () => {    //생성될때 실행되므로 이때 데이터를 받아오면 된다.
        console.log('컴포넌트가 생성될때 실행됩니다');

        return () => {
            console.log('제거될때 실행됩니다')
        }
    }, []);
    useEffect( () => {    //text가 변경될 때 실행된다
        console.log('state가 변경될때 실행됩니다')
    },[text])

    return (
        <>
            <div> My Component Func {number} </div>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
        </>
    );
};

export default function LifeCycleFunc() {

    const [ number, setNumber ] = useState(0);
    const [ visible, setVisible ] = useState(true);

    const changeNumberState = () => {
        setNumber(() => number + 1 );
    };
    const changeVisibleState = () => {
        setVisible(() => !visible)
    }

    return (
        <>
            <button onClick={changeNumberState}>PLUS</button>
            <button onClick={changeVisibleState}>ON/OFF</button>
            {visible && <Mycomponent number={number} /> }
        </>
    )
}