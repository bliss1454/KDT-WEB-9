import {useState, useMemo} from 'react';

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [inputValue, serInputValue] = useState('');

    //count가 변경될때만 실행이 된다. input value가 변경되어도 컴포넌트는 리렌딩되지만, calc는 다시 계산되지 않는다.
    const calc = useMemo( () => {
        for(let i = 0; i < 1000000; i++) {
            // i = i *2
        }
        return count * 2;
    } ,[count]);

    return (
        <>
            <input value={inputValue} onChange={(e) => serInputValue(e.target.value)} />
            <button onClick={() => setCount(() => count + 1)}>PLUS</button>
            <p>count: {count}</p>
            <p>calc: {calc}</p>
        </>
    )
}