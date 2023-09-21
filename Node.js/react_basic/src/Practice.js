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

        //초기화
        this.state = {
            inputWriter: '', //작성자
            inputTitle: '', //제목
            comments: [], //입력한 내용
            inputSearch: '', //검색내용
            searchType: 'title', //검색타입
            results: [], //검색결과
        };

        this.onChange = this.onChange.bind(this);
        this.addComment = this.addComment.bind(this);
        this.searchComment = this.searchComment.bind(this);
    }

    onChange(event) {
        this.setState({ inputWriter: event.target.value });
    }

    addComment() {
        const newComment = {
            writer: this.state.inputWriter,
            title: this.state.inputTitle,
        };
        this.setState(() => ({ comments: [...this.state.comments, newComment], inputTitle: '', inputWriter: '' }));
    }

    searchComment() {
        const searchResult = this.state.comments.filter((value) => {
            // console.log(value);
            console.log(value[this.state.searchType]);
            const type = value[this.state.searchType];
            const include = type.includes(this.state.inputSearch);
            if (!include) {
                return false;
            }
            return true;
        });
        this.setState({ results: searchResult });
    }

    render() {
        const { inputWriter, inputTitle, comments, searchType, inputSearch, results } = this.state;
        return (
            <>
                <form>
                    <label htmlFor="writer">작성자:</label>
                    <input id="writer" type="text" value={inputWriter} onChange={(e) => this.onChange(e)} />
                    <label htmlFor="title">제목:</label>
                    <input
                        id="title"
                        type="text"
                        value={inputTitle}
                        onChange={(e) => this.setState({ inputTitle: e.target.value })}
                    />
                    <button type="button" onClick={this.addComment}>
                        작성
                    </button>
                </form>
                <form>
                    {/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
                    <select value={searchType} onChange={(e) => this.setState({ searchType: e.target.value })}>
                        <option value="writer">작성자</option>
                        <option value="title">제목</option>
                    </select>
                    <input
                        type="text"
                        placeholder="검색어"
                        value={inputSearch}
                        onChange={(e) => this.setState({ inputSearch: e.target.value })}
                    />
                    <button type="button" onClick={this.searchComment}>
                        검색
                    </button>
                </form>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.title}</td>
                                    <td>{value.writer}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <h4>검색결과</h4>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{value.title}</td>
                                    <td>{value.writer}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Practice;