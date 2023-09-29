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

function App() {
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
        <Header />
        <Outlet />
    </> );
}

export default App;