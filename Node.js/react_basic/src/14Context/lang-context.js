import { createContext } from "react";

//context생성
//createContext() : Provider와 Consumet 두개의 리액트 컴포넌트를 반환한다.
const MyContext = createContext({
    languge: '',
    abc: 0,
    setLanguge: () => {}
})
export default MyContext;


