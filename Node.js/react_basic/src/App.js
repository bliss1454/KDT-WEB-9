// import Practice2 from "./08Lifecycle/Practice2";
import { Outlet } from "react-router-dom";
import RefSampleClass1 from "./09Ref/RefSampleClass1";
import RefSampleClass2 from "./09Ref/RefSampleClass2"
import RefSampleFunc1 from "./09Ref/RefSampleFunc1";
import RefSampleFunc2 from "./09Ref/RefSampleFunc2";
import UseCallback from "./10Hook/UseCallback";
import UseMemo from "./10Hook/UseMemo";
import Counter from "./10Hook/UseReducer";
import SassComponent from "./11Style/SassComponent";
import Style from "./11Style/Style";
import StyledComponent from './11Style/StyledComponent'
// import Router from "./12Router/Router";
import Header from "./12Router/Header";
import Form from "./13Form/Form";
import MyContext from '../../react_basic/src/14Context/lang-context';
import { useState } from 'react';
import LangugeSelector from "./14Context/LangSelector";

function App() {
    const [languge, setLanguge] = useState()
    return ( 
    <>
        {/* <RefSampleClass1 />
        <RefSampleClass2 />
        <RefSampleFunc1 />
        <RefSampleFunc2 /> */}
        {/* <UseMemo /> */}
        {/* <UseCallback /> */}
        {/* <Counter /> */}
        {/* <Style /> */}
        {/* <SassComponent /> */}
        {/* <StyledComponent /> */}
        {/* <Router /> */}
        {/* <Header />
        <Outlet /> */}
        {/* <Form /> */}
        <MyContext.Provider value={{languge, setLanguge}}>
                {/* <MyContext.Consumer>
                    {(value) => {
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
                    }}
                </MyContext.Consumer> */}
                <LangugeSelector />
         </MyContext.Provider>
    </> );
}

export default App;
