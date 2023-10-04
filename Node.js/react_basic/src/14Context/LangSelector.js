import MyContext from "./lang-context";
import { useContext } from 'react';

export default function LangugeSelector() {
    //두번째 방법
    const value= useContext(MyContext);

    return (
        <div>
            <h2>현재 선택된 언어: {value.languge}</h2>
            <select value={value.languge} onChange={(e) => value.setLanguge(e.target.value)}>
                <option value="ko">한국어</option>
                <option value="en">영어</option>
                <option value="jp">일본어</option>
            </select>
        </div>
    )

    //첫번째 방법
    // return (
    //     <MyContext.Consumer>
    //         {(value) => {
    //             return (
    //             <div>
    //                 <h2>현재 선택된 언어: {value.languge}</h2>
    //                 <select value={value.languge} onChange={(e) => value.setLanguge(e.target.value)}>
    //                     <option value="ko">한국어</option>
    //                     <option value="en">영어</option>
    //                     <option value="jp">일본어</option>
    //                 </select>
    //             </div>
    //             )
    //         }}
    //     </MyContext.Consumer>
    // )
}