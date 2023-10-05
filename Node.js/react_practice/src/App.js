// import PropsPrac1 from "./04Props/PropsPrac1";
// import PropsPrac2 from "./04Props/PropsPrac2";
// import Message from "./05Event/Message";
// import StatePrac1 from "./06State/StatePrac1";
// import StatePrac2 from "./06State/StatePrac2";
// import StatePrac3 from "./06State/StatePrac3";
// import StatePrac4 from "./06State/StatePrac4";
// import UseStatePrac1 from "./07UseState/UseStatePrac1";
// import UseStatePrac2 from "./07UseState/UseStatePrac2";
// import UseStatePrac3 from "./07UseState/UseStatePrac3";
// import UseStatePrac4 from "./07UseState/UseStatePrac4";
// import UseStatePrac5 from "./07UseState/UseStatePrac5";
// import LifePrac1 from "./08LifeCycle/LifePrac1";
// import LifePrac2 from "./08LifeCycle/LifePrac2";
// import { useState, useEffect } from "react";
// import RefPrac2 from "./09Ref/RefPrac2";
// import SignupForm from './10Hook/UseReducerPrac'
// import Practice1 from "./11Style/Practice1";
// import Practice2 from "./11Style/Practice2";
// import StyledPrac1 from "./11Style/StyledPrac1";
// import StyledPrac2 from "./11Style/StyledPrac2";
// import React from 'react';
// import RouterPrac1 from "./12Router/Router";
// import Form from './13Form/Form';
// import LanguageSelector from "./14Context/LangSelector";
// import ThemeSelector from "./14Context/ThemeSelector";
// import { SettingProvider } from "./14Context/store/setting-context";
// import './App.css'
import Cart from "./14Context/Cart";
import ProductList from "./14Context/ProductList";
import { CartProvider } from "./14Context/store/cart-context";

function App() {
    // const [status, setStatus] = useState (true); //문제의 3번 하는 것
    // const removeComponent = () => {  //문제의 3번 하는 것 (연결해제를 만들어줘야한다.)
    //     setStatus(!status);
    // }

    return (
        <>
            {/* Prop 실습
            <PropsPrac1 food="치킨" />
            <PropsPrac1 />
            <PropsPrac2
                title={"나의하루는 4시40분에 시작된다"}
                author={"김유진"}
                price={"13,600원"}
                type={"자기개발서"}
            />
            이벤트 핸들링 실습
            <Message message={"Hello React"} />
            state 실습
            <StatePrac1 />
            <StatePrac2 /> 
            <StatePrac3 />
            <StatePrac4 />
            useState 실습
            <UseStatePrac1 />
            <UseStatePrac2 />
            <UseStatePrac3 />
            <UseStatePrac4 />
            <UseStatePrac5 />
            <LifePrac1 />
            <button onClick={removeComponent}>연결해제</button>
            {status && <LifePrac2 />}
            <RefPrac2 />
            <SignupForm /> */}
            {/* <Practice1 /> */}
            {/* <Practice2 /> */}
            {/* <StyledPrac1 /> */}
            {/* <StyledPrac2 /> */}
            {/* <RouterPrac1 /> */}
            {/* <SettingProvider>
                <ThemeSelector/>
                <LanguageSelector />
            </SettingProvider> */}
            <CartProvider>
                <ProductList />
                <Cart />
            </CartProvider>
        </>
    );
}

export default App;
