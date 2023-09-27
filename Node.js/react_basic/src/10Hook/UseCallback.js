import {useState, useCallback} from 'react';

function ChildComponent({onClick}) {
    console.log('Child Component');
    return (
        <>
            <button onClick={onClick}>PLUS</button>
        </>
    )
}

export default function UseCallback() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('')

    //useCallback 미사용
    const plusCount = () => {
        console.log('plusCount', count)
        setCount(() => count + 1);
    };

    //useCallback 사용 : 렌더링을 다시 하지 않는다.
    //반복해서 생성되는 이벤트 랜들러 함수를 useCallback으로 감싸줘서 함수를 memoization(반복해야할 때, 동일한 계산을 제거하여 실행속도를 높이는 기술).
    const plusCountCallback = useCallback(() => {
        console.log('plusCountCallback', count)
        setCount(() => count + 1);
    } , [])

    const onChange = (e) => {
      setInputValue(e.target.value);
      plusCountCallback();
    }

    return (
        <>
            {/* <input value={inputValue} onChange={ (e) => onChange(e.target.value)} />
            <ChildComponent onClick= {plusCountCallback} /> */}
            <button onClick={plusCountCallback}>PLUS</button>
            <p>{count}</p>
        </>
    )
}