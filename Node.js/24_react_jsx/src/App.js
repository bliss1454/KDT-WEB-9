import logo from './logo.svg';
import './App.css';

function App() {
  const flag = false;
  let txt = ''
  if (flag) {
    txt = 'true 입니다'
  } else {
    txt = 'false 입니다'
  }

  const styles = {
    backgroundColor: 'red'
  }

  //Map 함수
  const lists = ['k', 'd', 't', 'w', 'e' ,'b'];
  //filter 함수
  const animals = ['dog', 'cat', 'rabbit'];
  const newAnimals = animals.filter( value => {
    return value.includes('a')
  })
  console.log(newAnimals);
  //단축평가-->&& ||
  //&&
  const result = true && "Hello";
  console.log(result)
  //||
  const defaultValue = 1000
  const price = 1500
  const dbPrice = price || defaultValue;
  console.log(dbPrice);

  //실습5
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true }
  ];
  const vipUsers = users. filter(value => value.vip === true) //filter로 구분 지어주고 이것을 vipUsers에 담아준다, 그리고 밑의 map함수를 통해서 필요한 값만 출력해준다.
  console.log(vipUsers)

  const isLogin = true; //isLogin의 값이 true이기에, 밑의 값들이 보일 수 있다. &&연산자는 앞의 값이 true이면 바로 해당 값을 꺼내준다. false이면 뒤의 값이 나온다.

  return ( 
    <>
      <h1 style={ {backgroundColor: 'black', color: 'white'} } >Hello React</h1>
      {isLogin && (
        <>
        <div style={styles}>리액트 시작</div>
        <input />
        <div>{flag ? <h1>true입니다</h1> : <h1>false입니다</h1>}</div>
        <div>{txt}</div>
          { lists.map((value, index) => {
            return (
              <div key={index}>
                <p>Hello {value}</p>
              </div>
            )
          })}
        {vipUsers.map ((value) => <div key={value.id}>{value.name}</div>)}
      </>
      )}
    </>
  );
}

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
//  function App () {
//   return (
//     <>
//       <div className='red'></div>
//       <div className='orange'></div>
//       <div className='yellow'></div>
//       <div className='green'></div>
//       <div className='blue'></div>
//       <div className='navy'></div>
//       <div className='purple'></div>
//     </>
//   );

export default App;
