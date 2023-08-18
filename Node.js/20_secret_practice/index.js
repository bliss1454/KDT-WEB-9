const express = require('express');
const crypto = require ('crypto');
const app = express();
const PORT = 8000;
const db = require('./models');

let hash = '';

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router : router부터 생성하기
const userRouter = require('./routes/user');
app.use('/', userRouter);

//router
app.get('/',(req,res) => {
    res.render('index');
});
app.post('/hash', (req,res) => {
    const {pw} = req.body
    //const hash = createHashedPassword(pw) //리턴함수이기 때문에 밑의 코드에서 일을 하고나서 어떠한 값을 반환하는 것, 그 반환값을 여기서 받아온다.
    //hash = createPbkdf(pw); //hash를 이 지역에 사용하고 있으면 이 밑의 지역에서는 사용하지 못한다. 밑의 지역에서도 사용하게 하기 위해, const를 없애고 위에 전역설정을 해주었다.
    hash = bcryptPassword(pw); //위와 같이 전역에 설정을 해줬기 때문에, const를 붙이지 않았다.
    res.json({hash});
});
app.post('/varify', (req,res) => {
    const {pw} = req.body;
    //const cpmpare = verifyPassword(pw, salt, hash);
    const compare = comparePassword(pw, hash); //compare에 밑의 함수 comparePassword(pw, hash)의 내용들을 담아주고,
    res.json({compare}); //res.json으로 compare값을 가져왔다.
});
app.post('/cipher', (req,res) => {  //post에서 확인하는 것이다. /사이트주소 그리고 그 내용을 확인작업
    const {data} = req.body;  //data에 내용을 담아옴
    const encrypt = cipherEncrypt(data); //encrypt라는 변수에 밑의 cipherEncrypt(data)함수의 데이터값이 들어갈 것이다.
    console.log('encrypt', encrypt); //내용을 콘솔로그로 확인하기
    const decrypt = decipher(encrypt); //콘솔로그로 확인하고 바로 다시 복호화작업으로 들어가는 것.
    res.json({decrypt}); //넣은 데이터값이 암호화 작업을 거치고 그다음 복호화 작업을 거쳐서 해독된 내용이 json창에 뜬다.
})

//404
app.use('*', (req, res) => {
    res.render('404');
});

//server open
db.sequelize.sync({ force: true }).then(() => {   //데이터값이 계속 사라짐(true).
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});

//단방향 암호화 생성
const createPbkdf = (password) => {
    //pbkdf2함수(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)으로 생성이 되고, 반복되는 값은 Buffer값이다.
    const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
    //console.log(hash);
    return hash.toString('base64');
};
//암호비교
const verifyPassword = (password, salt, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iteretions, keylen, digest).toString('base64');
    if (compare === dbPassword) {
        return true;
    } else {
        return false;
    }
};