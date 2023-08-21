const express = require('express'); //express모듈 가져오기
const jwt = require('jsonwebtoken');  //jwt모듈 가져오기
const app = express(); 
//위에서 express 모듈을 가져온 후, 이를 사용하여 Express 애플리케이션을 생성한다. 
//express() 함수를 호출하면 새로운 Express 애플리케이션 객체가 반환된다. 이 객체를 app 상수에 할당한다.
//Express.js를 사용하면 웹 애플리케이션을 쉽게 구축할 수 있고, app 객체는 그 중심 역할을 한다.
//app 객체를 사용하여 라우팅, 미들웨어 추가, 서버 구성 등을 수행할 수 있다. 
//예를 들어, app 객체를 사용하여 웹 서버를 시작하고 특정 URL 경로에 대한 라우팅을 정의하거나, 미들웨어를 추가하여 요청과 응답을 처리할 수 있다. Express.js를 사용하면 웹 애플리케이션을 쉽게 구축할 수 있고, app 객체는 그 중심 역할을 한다.
const PORT = 8000; //8000번 포트로 서버 열겠다. 포트 번호 설정.
const SECRET = 'y5c1n79bQ9LxMoiaIn4vb9u2WkomhviT'; //랜덤으로 생성해준 키를 가져온 것

const userInfo = { id: 'kdt9', pw: '1234', name: '홍길동' };
//데이터베이스에 있는 내용을 이렇게 임시로 설정해준 것.

app.set('view engine', 'ejs'); 
//뷰엔진을 ejs로 설정(app.set)해주는 것, 이를 통해 동적데이터를 주고받을 수 있음.
app.use(express.urlencoded({ extended: true })); 
//미들웨어를 설정해주는 것(웹 양식(form)에서 전송된 데이터를 받아서 사용하려면 이 미들웨어를 사용해야하는 것), 해당 미들웨어는 HTTP POST 요청의 본문(body)에서 오는 데이터를 해석하고 파싱하는데 사용된다.
//특히, extended: true로 설정되어 있으면, 복잡한 객체나 배열을 차싱할 수 있도록 허용하는 것이다.
//즉, URL-encoded 데이터를 해석하고 JavaScript 객체로 변환한다.
//이를 통해, 'req.body' 객체에 파싱된 데이터가 저장되어 나중에 라우트 핸들렁에서 이 데이터를 사용할 수 있다.
app.use(express.json());
//미들웨어 사용은 app.use로 나타낸다.
//이 코드 또한 또 다른 Express.js에 내장된 미들웨어인 express.json()을 사용하는 것을 나타낸다.
//이 미들웨어는 HTTP POST 요청의 본문(body)에서 JSON 형식의 데이터를 파싱(분석)합니다. JSON 데이터를 받는 경우 이 미들웨어를 사용하여 요청 데이터를 JavaScript 객체로 변환한다.
//클라이언트에서 JSON형식으로 데이터를 전송하고 이 데이터를 서버에서 처리하려면 이 미들웨어가 필요하다. 파싱된 JSON 데이터는 'req.body'객체에 저장되며, 라우트 핸들러에서 이 데이터를 사용할 수 있다.

//JavaScript 와 JSON
// : JavaScript 객체는 다양한 데이터 유형(문자열, 숫자, 불리언, 함수, 등)을 속성(key)과 값(value)으로 가질 수 있다. key1:"value".
// : JSON은 문자열 형식이며, JavaScript 객체와 매우 유사한 구조를 가지고 있다. JSON은 속성(key)과 값(value)을 더블 쿼트(")로 둘러싸고, 객체는 중괄호({})로 배열은 대괄호([])로 감싸서 표현된다. "key1":"value".

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/token', (req, res) => { //token이라는 페이지가 없잖아? /token의 주소값으로 해당 내용이 들어가는건가? ->indes.ejs에 해당 내용을 /token으로 보내준다고 설정해놓음. 즉, 해당 주소로 해당값을 보내줌.
    if (req.headers.authorization) {
        //Authorization 헤더는 인증 토큰(JWT든, Bearer 토큰이든)을 서버로 보낼 때 사용하는 헤더입니다. API 요청같은 것을 할 때 토큰이 없으면 거절당하기 때문에 이 때, Authorization을 사용하면 됩니다.
        //bearer token값(기본값)--> token[0]에 들어감 그 후의 사용자의 토큰값은 token[1]로 들어옴. 이 밖의 다른 사용자의 경우는, 아이디값이 다르기에 똑같이 token[1]임.
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
//위의 코드에서 /token 경로로 들어오는 GET 요청을 처리하는 로직은 다음과 같다:
//1. 요청 헤더에 authorization 헤더가 있는지 확인한다. (토큰값이 헤더에 담겨져 나오기 때문에, 헤더를 설정해줘야한다.)
//2. authorization 헤더가 있을 경우, 헤더 값을 공백(' ')을 기준으로 분할(split)하여 토큰을 얻습니다.
//3. 얻은 토큰을 jwt.verify() 함수를 사용하여 검증합니다.
//4. 검증이 성공하면, result.id와 userInfo.id를 비교하여 일치하면 JSON 응답을 보내고, 일치하지 않으면 "인증된 회원이 아닙니다"라는 메시지를 보냅니다.
//5. authorization 헤더가 없을 경우, /login 페이지로 리다이렉트합니다. (리다이렉트 : 서버에서 클라이언트에서 요청한 url에 대한 응답에서 다른 url로 재접속하라고 명령을 보내는 것)
//따라서 이 코드는 주어진 토큰을 검증하고, 검증 결과에 따라 다른 응답을 보내거나 리다이렉트를 수행하는 역할을 합니다.

app.post('/login', (req, res) => {
    try {
        const { id, pw } = req.body;
        const { id: uId, pw: uPw } = userInfo;
        if (id === uId && pw === uPw) {
            const token = jwt.sign({ id }, SECRET); 
            //만약 로그인이 성공하면, JSON Web Token(JWT)을 생성한다. 이 토큰은 사용자의 로그인 상태를 나타내는데 사용된다. id 값을 토큰에 포함시키고, SECRET이라는 비밀 키로 토큰을 서명한다.
            //토큰이랑 같이 보내고싶은 값을 작성해줌
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