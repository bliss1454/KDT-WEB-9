// import {useRef, useState, useEffect} from 'react';

// //로컬변수 - 랜더링되어도 값을 그대로 유지한다(리렌더링에 영향을 주지 않음)
// export default function RefSampleFunc2 () {
//     const [time, setTime] = useState (0);

//     const idRef = useRef(0);

//     const plusIdRef = () => {
//         setTime(0);
//         idRef.current += 1 //로컬 변수 값 변경
//         console.log(idRef.current);
//     };

//     useEffect(() => {
//         const interval = setInterval (() => {
//             setTime((prev) => prev +1)
//         },1000);

//         //setInterval에 설정된 반복을 취소하는 것.
//         return () => clearInterval(interval);
//     },[])

//     return(
//         <>
//             <h1>Ref Sample</h1>
//             <h2>{time}</h2>
//             {/* 1. useRef로 생성된 객체는 .current 프로퍼티를 가지고 있어 이를 통해 변수에 접근 가능. */}
//             {/* 2. useRef로 생성된 변수는 컴포넌트가 리렌더링되어도 그 값이 유지된다. */}
//             {/* 3. useRef의 값이 변경되어도 컴포넌트는 리랜더링되지 않음. */}
//             <h2>{idRef.current}</h2>
//             <button onClick={plusIdRef}>PLUS Ref</button>
//         </>
//     )
// }

import {useRef, useState, useEffect} from 'react';

//사용자가 웹사이트에서 회원가입시 버튼을 실수로 두번 클릭하는 것을 방지할 때 사용.

export default function RefSampleFunc2() {
    const lastTime = useRef(null)

    const handleSubmit = () => {
        const now = Date.now()

        if(lastTime.current && now - lastTime.current < 1000) {
            //마지막 클릭 후 1초 이내 다시 클릭되면 무시하는 것
            console.log('클릭 시간이 짧습니다');
            return false;

            lastTime.current = now;
            console.log('제출이 완료되었습니다')
        }
    }

    return (
        <>
            <button onClick={handleSubmit}>제출</button>
        </>
    )
}