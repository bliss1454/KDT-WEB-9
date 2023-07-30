const express = require ('express');
//import express from 'express'와 같은 명령
//Express 모듈이 export 하는 최상위 함수로, express application을 만듦
const app = express();
//express() 함수를 호출함으로써 만들어진 express application
const PORT = 8000;

//ejs사용 (ejs템플릿 설정)
//app.set : 서버의 속성을 지정하는 것
app.set('view engine', 'ejs');
app.set('views','./views');  //views파일에 담겠다

//정적인 파일 불러오기 (미들웨어)
app.use('/public_',express.static('./public_'))


//req,res 순서
app.get('/',(req, res) => {
    //send() 클라이언트에 응답 데이터를 보낼 때 사용
    // res.send("Hello Express");
    res.send({result: true, code: 1000, message: '회원가입성공', data:{name: "martin"} });  //객체 형태로 보낼 수도 있음(객체 안에 객체도 가능(key{value}))
});
//get방식으로 통신을 나타냄
//'/'=url localhost(내 서버를 나타냄):8000/

//kdt9페이지로 이동 (그 페이지의 내용 설정)
app.get('/kdt9',(req, res) => {
    //render() 뷰 엔진을 렌더링 해줌 (send와는 다르게 속성까지도 보내줌)
    res.render('test',{name : 'bliss'});
    // res.send("Hello kdt9")
});

//listen : 서버를 열어줌
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
//라이브서버 연결 할때 port값 확인