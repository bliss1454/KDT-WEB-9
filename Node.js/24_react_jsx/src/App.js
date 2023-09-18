import logo from './logo.svg';
import './App.css';

// function App() {

//   const flag = true;
//   let txt = ''

//   if (flag) {
//     txt = 'true 입니다'
//   } else {
//     txt = 'false 입니다'
//   }

//   const styles = {
//     backgroundColor: 'red'
//   }

//   return (
//     <>
//       <h1 style={ {backgroundColor: 'black', color: 'white'} } >Hello React</h1>
//       <div style={styles}>리액트 시작</div>
//       <input />
//       <div>{flag ? <h1>true입니다</h1> : <h1>false입니다</h1>}</div>
//       <div>{txt}</div>
//     </>
//   );
// }

/*실습1*/ 
// function App () {
//   return (
//     <>
//       <div>이것은 div입니다
//         <h3>이것은 div안에 있는 h3태그입니다</h3>
//       </div>
//       <div> {3+5 == 8 ? <p>정답입니다</p> : <p>틀렸습니다</p>} </div>
//     </>
//   );
// }

/*실습2*/ 
// const name = '군밤이'
// const animal = '토이푸들'
// const styles = {
//   textDecoration: 'underline',
// };

// function App () {
//   return (
//     <>
//       <h2>제 반려 동물의 이름은 <span style={styles}>{name}</span>입니다. </h2>
//       <h2><span style={styles}>{name}</span>은 <span style={styles}>{animal}</span>입니다. </h2>
//     </>
//   )
// }

/*실습3*/ 
// const title = '안녕하세요';

// function App () {
//   return (
//     <>
//       <div className="test">{title}</div>
        //  <div className='input'>
        //     아이디: <input />
        //     <br />
        //     <br />
        //     비밀번호: <input />
        //  </div>
//       <div className='input1'> 아이디: <input type='text' className="input" /> </div>
//       <div className='input1'> 비밀번호: <input type='password' className="input" /> </div>
//     </>
//   )
// }

/*실습4*/
 function App () {
  return (
    <>
      <div className='red'></div>
      <div className='orange'></div>
      <div className='yellow'></div>
      <div className='green'></div>
      <div className='blue'></div>
      <div className='navy'></div>
      <div className='purple'></div>
    </>
  )
 }

export default App;
