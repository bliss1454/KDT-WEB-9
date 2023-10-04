import { createContext, useState } from "react";

//context생성
//createContext() : Provider와 Consumet 두개의 리액트 컴포넌트를 반환한다.
const MyContext = createContext({
    languge: '',
    abc: 0,
    setLanguge: () => {}
});

export function LanguageProvider({children}) {
    const [languge, setLanguge] = useState('jp');

    return (
        <MyContext.Provider value={{languge, setLanguge}}>
        {children}
        </MyContext.Provider>
    )
};

export default MyContext;


