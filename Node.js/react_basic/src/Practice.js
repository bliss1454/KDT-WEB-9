import { Component } from "react";

//0920 실습1
// class Practice extends Component {
//     state = {
//         color: 'black',
//         Text: '검정색'
//     }

//     handleRed = () => {
//         this.setState({
//             color: 'red',
//             Text: '빨간색'
//         });
//     };

//     handleBlue = () => {
//         this.setState({
//             color: 'blue',
//             Text: '파란색'
//         });
//     }


//     render() {
//         const { color, Text } = this.state;
    
//         return (
//             <>
//                 <div>
//                 <span style={{ color }}>{Text}</span> <sapn>글씨</sapn></div>
//                 <button onClick={this.handleRed}>빨간색</button>
//                 <button onClick={this.handleBlue}>파란색</button>
//             </>
//         );
//     }
    
// };

//0920 실습2
// class Practice extends Component {

//     state = {
//         Text: '보여라'
//     };

//     handleText = () => {
//         if (this.state.Text === '보여라') {
//             this.setState({
//                 Text: '사라져라',
//                 innerHTML: '안녕하세요'
//             });
//         } else {
//             this.setState({
//                 Text: '보여라',
//                 innerHTML: ''
//             });
//         }
//     };

//     render () {
//         const {Text, innerHTML} = this.state;

//         return (
//             <>
//                 <button onClick={this.handleText}>{Text}</button>
//                 <h1>{innerHTML}</h1>
//             </>
//         )
//     }
// }

//0920 실습3
class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datavalue: '', 
      title: '',    
      comments: []  
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { datavalue, title, comments } = this.state;
    if (datavalue.trim() !== '' && title.trim() !== '') {
      const newComment = { datavalue, title };
      this.setState({
        comments: [...comments, newComment], //spread연산자
        datavalue: '', 
        title: '', 
      });
    }
  };

  render() {
    const { datavalue, title, comments } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            작성자: <input
              type="text"
              name="datavalue"
              value={datavalue}
              onChange={this.handleChange}
              placeholder="작성자"
            />
            제목: <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              placeholder="제목"
            />
            <button type="submit">작성</button>
          </fieldset>
        </form>

        <select> 
            <option>작성자</option>
            {comments.map((comment, index) => (
                <option key={index}>{comment.datavalue}</option>
            ))}
        </select>

        <input/>
        <button>검색</button>

        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{comment.title}</td>
                <td>{comment.datavalue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Practice;