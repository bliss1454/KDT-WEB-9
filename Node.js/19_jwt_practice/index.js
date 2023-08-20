const express = require('express');
const jwt = require('jsonwebtoken');  //jwt를 불러옴
const app = express();
const PORT = 8000;
const SECRET = 'y5c1n79bQ9LxMoiaIn4vb9u2WkomhviT'; //랜덤으로 생성해주는 키를 가져온 것

const userInfo = { id: 'kdt9', pw: '1234', name: '홍길동' };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/token', (req, res) => {
    if (req.headers.authorization) {
        //bearer token값--> token[0]에 들어감 그 후의 사용자의 토큰값은 token[1]로 들어옴. 이 밖의 다른 사용자의 경우는, 아이디값이 다르기에 똑같이 token[1]임.
        const token = req.headers.authorization.split(' '); //split은 문자열을 끊어주는((' '):띄어쓰기를 기준으로 끊어라) 역할을 함.
        try {
            const result = jwt.verify(token[1], SECRET);
            if (result.id === userInfo.id) {
                res.json({ result: true, name: userInfo.name });
            }
        } catch (error) {
            console.log(error);
            res.json({ result: false, message: '인증된 회원이 아닙니다' });
        }
    } else {
        res.redirect('/login');
    }
});
app.post('/login', (req, res) => {
    try {
        const { id, pw } = req.body;
        const { id: uId, pw: uPw } = userInfo;
        if (id === uId && pw === uPw) {
            const token = jwt.sign({ id }, SECRET); //토큰이랑 같이 보내고싶은 값을 작성해줌
            res.json({ result: true, token });
        } else {
            res.status(404).json({ result: false, message: '로그인 정보가 올바르지 않습니다' });
        }
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});