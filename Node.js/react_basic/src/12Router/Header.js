import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    
    //useNavigate()는 Link컴포넌트를 사용하지 않고 사용자를 어딘가로 이동시키는 기능이다.
    const navi = useNavigate();
    const onClick = () => {
        navi('redirect'); //이동하는 페이지명을 써준다.
    };

    //Link는 유저가 직접 클릭해서 이동하는 것이다.
    return <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
               <Link to='/about'>About</Link> 
            </li>
            <li>
                <Link to='/user'>User</Link>
            </li>
            <li>
                <button onClick={onClick}>Redirect</button>
            </li>
        </ul>
    </div>
};