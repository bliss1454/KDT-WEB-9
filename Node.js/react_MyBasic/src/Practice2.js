import { useState } from "react";

//0921 실습1
// export default function Practice2() {
    
//     const [state, setStatus] = useState ({
//         color: 'black',
//         Text: '검정색'
//     })

//     const handleRed = () => {
//         setStatus({
//             color: 'red',
//             Text: '빨간색'
//         });
//     };

//     const handleBlue = () => {
//         setStatus({
//             color: 'blue',
//             Text: '파란색'
//         });
//     }

//   const { color, Text } = state;
    
//         return (
//             <>
//                 <div>
//                 <span style={{ color }}>{Text}</span> <sapn>글씨</sapn></div>
//                 <button onClick={handleRed}>빨간색</button>
//                 <button onClick={handleBlue}>파란색</button>
//             </>
//         );
// }

//0921 실습2
// export default function Practice2() {

//     const [state, setStatus] =useState ({
//         Text: '보여라'
//     });

//     const handleText = () => {
//         if (state.Text === '보여라') {
//             setStatus({
//                 Text: '사라져라',
//                 innerHTML: '안녕하세요'
//             });
//         } else {
//             setStatus({
//                 Text: '보여라',
//                 innerHTML: ''
//             });
//         }
//     };

//     const {Text, innerHTML} = state;

//     return (
//         <>
//             <button onClick={handleText}>{Text}</button>
//             <h1>{innerHTML}</h1>
//         </>
//     )
// }

//0921 실습3,4
// export default function Practice2() {

//     const [writer, setWriter] = useState ("");
//     const [title, setTitle] = useState ("");
//     const [comments, setComments] = useState([]);
//     const [inputSearch, setInputSearch]= useState("");
//     const [searchType, setSearchType]= useState('title');
//     const [results, setResult]= useState([]);

//     const onChange = (event) => {
//         setWriter(() => event.target.value);
//     };

//     const addComment = () => {
//         const newComment = {
//             writer: writer,
//             title: title
//         };
//         setComments([ ...comments,newComment], {writer: writer}, {title: title} );
//         setWriter('');
//         setTitle('')
//     }
    
//     const searchComment = () => {
//         const searchResult = comments.filter(value => {
//             if( !value[searchType].includes(inputSearch)){
//                 return false;
//             }
//             return value;
//         });
//         setResult(searchResult)
//     }

//     return (
//         <>
//             <form>
//                 <label htmlFor="writer">작성자:</label>
//                 <input 
//                     id="writer" 
//                     type="text" 
//                     value={writer} 
//                     onChange={(e) => onChange(e)} />
//                 <label htmlFor="title">제목:</label>
//                 <input
//                     id="title"
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle (e.target.value )}
//                 />
//                 <button type="button" onClick={addComment}>
//                     작성
//                 </button>
//             </form>
//             <form>
//                 <select value={searchType} onChange={(e) =>setSearchType(e.target.value )}>
//                     <option value="writer">작성자</option>
//                     <option value="title">제목</option>
//                 </select>
//                 <input
//                     type="text"
//                     placeholder="검색어"
//                     value={inputSearch}
//                     onChange={(e) => setInputSearch(e.target.value)}
//                 />
//                 <button type="button" onClick={searchComment}>
//                     검색
//                 </button>
//             </form>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>번호</th>
//                         <th>제목</th>
//                         <th>작성자</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {comments.map((value, index) => {
//                         return (
//                             <tr key={index}>
//                                 <td>{index + 1}</td>
//                                 <td>{value.title}</td>
//                                 <td>{value.writer}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//                 <h4></h4>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>번호</th>
//                             <th>제목</th>
//                             <th>작성자</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {results.map((value, index) => {
//                             return (
//                                 <tr key={index}>
//                                     <td>{index + 1}</td>
//                                     <td>{value.title}</td>
//                                     <td>{value.writer}</td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             </table>
//         </>
//     )
// }

// 0921 실습5 //화살표 함수 형식으로도 나타낼 수 있다
export default function Practice2() {
    
    const [ todos, setTodos ] = useState([]) //할일목록
    const [ inputTodo, setInputTodo ] = useState('') //input에 입력할 값
    
    const addTodo = () => {
        if(todos.length > 10) {
            alert('할 일이 너무 많아요!');
        }

        if( inputTodo !== '' ) {
            const newTodo = {
                id: Date.now(),
                text: inputTodo,
                checked: false,
            };
            setTodos([...todos, newTodo]);
            setInputTodo('');
        }
    }

    const toggleTodo = (id) => {
        console.log(id);
        setTodos ( 
            todos.map( (todo) => {
            console.log(todo);
            return todo.id === id ? {...todo, checked: !todo.checked} : todo
            })
        ) 
    }

    const RemoveTodo = () => {
        const result = todos.filter(value => value.checked === false)
        setTodos(result);
    }

    return (
        <>
            <input type="text" 
            value={inputTodo} 
            onChange={e => setInputTodo(e.target.value)} 
            placeholder="할 일 입력..."/>
            <button onClick={addTodo}>추가</button>
            <ul>
                {todos.map((todo) => {
                    return (<li key={todo.id}>
                        <input type="checkbox" checked= {todo.checked} onChange={()=> toggleTodo(todo.id) }/>
                        {todo.text}
                        </li>)
                })}
            </ul>
            <button onClick={RemoveTodo}>완료된 할 일 삭제</button>
        </>
    );
};