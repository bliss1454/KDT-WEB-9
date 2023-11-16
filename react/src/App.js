import axios from 'axios';
import { useEffect } from 'react';

export default function App() {
    const getTest = async () => {
        const result = await axios({
            url: 'http://localhost:8080',
            method: 'GET',
        });

        console.log('result', result);
    };
    const postTest = async () => {
        const result = await axios({
            url: 'http://localhost:8080',
            method: 'POST',
            data: {
                name: '이름',
                age: 10,
            },
        });

        console.log('result', result);
    };
    return (
        <>
            <h1>테스트</h1>
            <button onClick={getTest}>getTest</button>
            <button onClick={postTest}>postTest</button>
        </>
    );
}
