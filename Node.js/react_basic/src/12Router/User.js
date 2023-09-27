import { Link, useSearchParams } from "react-router-dom";

export const users = [  //외부에서도 쓰겠다는 의미
    {
        id: 1,
        name: '홍길동',
        comment: [
            {
                text: '안녕하세요'
            }
        ]
    },
    {
        id: 2,
        name: '둘리',
        comment: [
            {
                text: '요리보고'
            },
            {
                text: '죠리보고'
            }
        ]
    },
    {
        id: 3,
        name: '미니언즈',
        comment: [
            {
                text: '바나나'
            }
        ]
    }
]

export default function User() {
    // searchParms는 쿼리스트링 값을 가져오는 것.
    // setSearchParms는 쿼리스트링 값을 할당하는 것.
    const [searchParms, setSearchParms] = useSearchParams();
    console.log(searchParms.get('mode'));
    // setTimeout(() => {
    //     setSearchParms({mode: "Light"})
    // }, 5000);

    return <div>
        <ul>
            {users.map((value) => {
                return (
                    <li key={value.id}>
                        <Link to={`/user/${value.id}`}>{value.name}</Link>
                    </li>
                )
            })
            }
        </ul>
    </div>
};