const express = require ('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

//세션 옵션 객체
//httpOnly : 값을 true로 하면 사용자가 자바스크립트를 통해서 세션을 사용할 수 없도록 강제하는 것.
//secure: 값을 true로 하면 https에서만 세션을 주고받음.
//secret: 안전하게 쿠키를 전송하기 위한 쿠키 서명 값.
//(세션을 발급할때 사용되는 키)
//resave: 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할 것인지에 대한 값. 세션을 항상 저장할 것인지 지정하는 값. (보통 false로 지정함. 즉, 권장사항임)
//saveUninitialized : 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정하는 것.
app.use(session({
    secret: 'mySessionSecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 60 * 1000,
    }
  })
);

app.get('/', (req,res) => {
    //세션성정 req.session.key
    req.session.name = '홍길동'
    res.send('세션 설정 완료')
});
app.get('/name', (req,res) => {
    console.log(req.session.name)
    res.send({id: req.session.ID, name: req.session.name })
});
app.get('/destory',(req,res) => {
    req.session.destroy(() => {
        if (err) {
            console.log(error);
            return;
        }
        res.redirect('/name');
    })
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})