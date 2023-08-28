const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('client');
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});

//node.js에서는 app.listen으로 포트를 열어주면 끝이 난다. 그러나 함수같은 것들은 그 밑에 작성해줘도 되는데, socket또한 밑에 써줘도 괜찮다.
//그리고 소켓으로 열어줘야하니, server에 port를 담아주고, socket 서버에 해당 변수명을 표시해준다.
//웹소켓 서버 접속
const wss = new ws.Server({ server });

//접속한 브라우저들을 담아주는 역할을 함(즉, 클라이언트들을 담을 배열변수이다.)
//배열을 socket event에 담는 방법 : push
const sockets = [];

//(콜백함수 안에 써준 변수명에 따른다) 즉 'socket'이라는 이름의 변수는 접속한 브라우저이다.
wss.on('connection', (socket) => {
    //console.log(socket);
    console.log('클라이언트가 연결되었습니다.');  //socket이라는 브라우저가 연결되는 순간, 콘솔창에 해당 메세지가 나올 것 이다.
    //sockets배열에 브라우저 정보 추가하기
    sockets.push(socket);

    //이벤트는 'on'이다
    //메세지 이벤트
    socket.on('message', (readmessage) => { //클라이언트에서 보낸 내용을 여기서 받는거다
        console.log(wss.clients);
        console.log('클라이언트가 연결되었습니다');
        //클라이언트 상태확인
        //ws.CONNECTIONG : 0 웹소켓이 연결 시도 중
        //ws.OPEN : 1 웹소켓이 열린 상태
        //ws.CLOSING : 2 웹소켓이 닫히는 중
        //ws.CLOSED : 3 웹소켓이 닫힌 상태
        //socket.readyState : 웹소켓의 클라이언트 상태를 나타내는 속성
        console.log(ws.OPEN);
        sockets.forEach(elem => {
            console.log(elem.readyState);
            elem.send(`${readmessage}`); 
            //소켓을 통해 클라이언트와 서버간의 데이터를 주고 받을 대는 일반적으로 문자열 또는 버퍼형태로 전달됨
            //서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 일련의 바이트로 변환하는 직렬화과정이 필요하다, 이것이 곧 버퍼를 쓴 이유이다, 왜냐면 buffer는 이런 직렬화된 데이터를 읽기 쉬운 것이기 때문이다
            //buffer처리를 백틱(``)안으로 할 수 있다
            console.log(readmessage)
        });
    });
    // socket.on('message', (message) => {
    //     console.log(`클라이언트로부터 받은 메세지 : ${message}`);
    //     //socket.send(`서버메세지: ${message}`); //콘솔창에 받은 message를 받아서 send로 클라이언트에 보내준다. 그리고 html에 해당 메세지가 담기며 브라우저에서도 볼 수 있게된다.
    //     sockets.forEach( elem => {
    //         elem.send(`서버메세지: ${message}`) //forEach문으로 접속한 브라우저들에게 해당 내용을 보내줄 수 있다.(socket에 있는 것을 반복문을 돌리며 하나하나씩 배열 안의 브라우저에 보내는 것)
    //     });
    // }); //socket이라는 브라우저의 이벤트를 작성하는 것이다 (즉, 접속한 브라우저에 출력된다). message라는 이벤트를 작성하는 것이다.

    //오류 이벤트
    socket.on('error', (err) => {
        console.log('에러가 발생하였습니다', err);
    });

    //접속 종료 이벤트
    socket.on('close', () => {
        console.log('클라이언트와 연결이 종료되었습니다');
    });
});