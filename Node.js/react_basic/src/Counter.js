import { Component } from "react";

class Counter extends Component {
    
    // constructor(props) {
    //     //부모 클래스인 component의 생성자 호출
    //     super(props) //생성자

    //     this.state = {  //클래스이기 때문에 this를 사용해준다
    //         number: 0,
    //     };
    //     this.handleIncrement = this.handleIncrement.bind(this) //바인딩 작업부분
    // }
    

    // handleIncrement() {  //일반형함수에는 바인딩이 필요하다 (위에서 바인딩을 해줬다)
    //     this.setState({number: this.state.number + 1}); //state를 직접적으로 바꿀 수 없으니 setstate를 사용해서 바꿔준다.
    //     console.log(this);
    // }

    state = {  //내가 바꾸고싶은 값을 state 이 자리에다가 써주면 된다.
        number: 0,
    };

    handleDecrement = () => { //화살표함수는 바인딩 작업이 불필요하다.
        //setState는 호출 직후의 상태가 바로 업데이트 되지 않는다.
        //리액트는 여러 setState를 일괄 처리한다.
        //2번의 setState가 1번의 setState의 결과를 기반으로 동작하지 않는다.
        // this.setState({number: this.state.number - 1}); // ---1번
        // this.setState({number: this.state.number - 1}); // ---2번

        this.setState( (prevState) => {  //setState는 이전상태를 기반으로 작동하기에, 이전상태를 담고 있는 prevState변수를 선언해줬다. 이 자체가 this.state이다. 즉, 이전 상태이다.
            return {number: prevState.number -1} //이 자체가 함수형이다. 함수형 형태로 하는 것을 선호한다.
        });
        this.setState( (prevState) => ({number: prevState.number -1})); //위와 같은 함수인데, return이 없는 형태이다.
        // console.log("감소함수",this);
    }

    render () {
        const {number} = this.state; //객체 구조분해할당으로 표현할 수 있다.

        return (
            <div>
                {/* <h1>{this.state.number}</h1> */}
                <h1>{number}</h1>
                <button onClick={this.handleIncrement}>증가</button>
                <button onClick={this.handleDecrement}>감소</button>
            </div>
            )
    }
}

export default Counter;