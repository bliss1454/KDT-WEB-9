import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom'
import App from '../App';
import NotFound from './404';
import About from './About';
import Error from './Error';
import Comment from './Comment';
import Header from './Header'
import Home from './Home'
import Redirect from './Redirect'
import User from './User'
import UserDetail from './UserDetail'

/*
//ver1
export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/user' element={<User/>} />
                    <Route path='/user/:userId' element={<UserDetail/>} />
                    <Route path='/redirect' element={<Redirect/>} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
*/

//ver2
const Router = createBrowserRouter([
    {
        path: '/', //시작점
        element: <App />,
        children: [
            {
                path: '', // /하고 들어가는 것들
                element: <Home />,
                errorElement: <Error />
            },
            {
                path: 'about',  // /하고 about하고 들어가는 것들
                element: <About />,
            },
            {
                path: 'redirect',  // /하고 redirect하고 들어가는 것들
                element: <Redirect />
            }
        ],
        errorElement: <NotFound />,
    },
    {
        path: '/user',  //시작점
        element: <App />,
        children: [
            {
                path: '',
                element: <User />,
            },
            {
                path: ':userId',
                element: <UserDetail />,
                children: [
                    {
                        path: 'comment',
                        element: <Comment />
                    }
                ]
            }
        ]
    },
]);

export default Router;
