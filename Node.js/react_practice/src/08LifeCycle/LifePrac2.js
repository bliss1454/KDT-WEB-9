import { useState, useEffect } from "react";
import axios from 'axios';

export default function LifePrac2() {
    const [ users, setUsers] = useState ([]);
    const [loading, setLoading] = useState(false); //loading을 나타내는 것

    useEffect( () => {
        //useEffect는 비동기함수를 직접적으로 지원하지 않음. 그래서 axios를 여기서 사용하지 못한다.
        //비동기함수를 사용하려면 내부에 비동기함수를 정의하고 바로 호출해야함.
        const axiosUser = async () => {
            const result = await axios({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users'
            });
            setUsers(result.data);  //axios에는 항상 data가 들어가기 때문.
            setLoading(true); //loading되다가 데이터를 전달 받고 나면 true가 되서 데이터 값이 나온다.
        };
        axiosUser(); //작성 후 실행시켜준다.

        return () => { //문제의 3번 하는 것
            console.log('연결 해제 완료')
        }

    }, []);

    useEffect( () => {  //문제의 2번 하는 것 
        //useEffect는 무조건 한번 실행된다 그래서 초기 length는 0, 그리고 나서 데이터가 10이므로 10이 된다.
        //천천히 로딩하고 싶으면 개발자창에서 네트워크에서 3g로 설정해주면 된다.
        console.log('유저 정보 업데이트', users.length)
    }, [users]);

    

    return (
        <div>
            {loading ?  
            (<ul>
                {users.map( (user) => {
                    return (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    )
                })}
            </ul>
            ) :
            ( <div>Loading...</div>
            )}
        </div>     
    )
};