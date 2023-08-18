const express = require ('express');
const crypto = require ('crypto');
const app = express();
const PORT = 8000;
// let pass = '';  //const pass를 전역권으로 설정해준 것 //이의 밑줄을 환경변수설정에 설정해줌 //밑의 내용을 이렇게 전역으로 설정을 해줌
// const salt = crypto.randomBytes(16).toString('hex');  
//salt값을 랜덤으로 만든 것 
//환경변수에 넣을 수 없어서 데이터베이스에 넣어줌 
//보안상으로 한 계정당 하나씩 솔트값을 주는 것이 좋음
//toString의 뜻은? "toString" 메서드는 객체가 가지고 있는 정보나 값들을 문자열로 만들어 리턴하는 메소드
//그리고 여기선 hex인데 밑에선 base64인데, 차이와 왜 다른지? : 위에와 아래가 다른것, 그냥 설정을 다르게 해준 차이.
// const leng = 1000; //반복횟수를 설정해 준 것
// const key = 64; //생성할 키의 길이를 설정해 준 것
// const algo = 'sha512'; //알고리즘을 설정해 준 것

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.post('/login', (req,res) => {
//     const {pw} = req.body;
    // createHash : 지정한 알고리즘을 이용하여 해시 생성
    // const pass = crypto.createHash("sha512").update(pw).digest('base64');
    // pdkdf2(sync) : sync가 붙으면 동기, 안붙으면 비동기를 뜻함 : 비밀번호 기반 키도출함수
//     pass = crypto.pbkdf2Sync(pw, salt, leng, key, algo).toString('base64');
//     res.send(pass); //이 값을 데이터베이스에 보내주는 것임
// });

// app.post('/verify', (req,res) => {
    // const {pw} = req.body;
    // const compare = crypto.pbkdf2Sync(pw, salt, leng, key, algo); 
    //비교할 값을 가져오는 것 : Buffer.from 
    //hex를 스트링으로 바꿔준다는 말이 뭐야?

    //기본적인 방법 -- 이렇게 사용할 거면 위의 내용과 똑같이 해줘야함. 따라서 toString('base64')를 뒤에 붙여줘야함.
    // if ( compare === pass ) {
    //     res.send(true)
    // } else {
    //     res.send(false)
    // };

    //timingSafeEqual : 두개의 버퍼를 상수시간으로 비교하는 함수 (해킹을 방지하기 위해서 동시에 비교한다는 뜻도 포함하고 있음)
    // const result = crypto.timingSafeEqual(compare, Buffer.from(pass, 'base64')); 
    //위의 두 함수를 비교를 한다는 뜻(buffer로) 
    //원본값도 똑같이가 무슨 뜻이야?(마지막 문장 pass와 hex부분)
//     res.send(result);
// });

//router
app.get('/',(req,res) => {
    res.render('index');
});
app.post('/hash', (req,res) => {
    const {pw} = req.body
    //const hash = createHashedPassword(pw) //리턴함수이기 때문에 밑의 코드에서 일을 하고나서 어떠한 값을 반환하는 것, 그 반환값을 여기서 받아온다.
    const hash = createPbkdf(pw);
    res.json({hash});
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

////////암호화///////////
//단방향
const crypto = require('crypto');
//해시함수
const createHashedPassword = (password) => {    //암호화할 값이 password다.
    //creatHash(알고리즘).update(암호화할값).digest(인코딩방식)
    return crypto.createHash('sha512').update(password).digest('base64');
};
//pbkdf2함수
const salt = crypto.randomBytes(16).toString('base64') //솔트생성
const iterations = 100 //반복횟수
const keylen = 64 //생성할 키의 길이
const digest = 'sha512' //해시 알고리즘

//단방향 암호화 생성
const createPbkdf = (password) => {
    //pbkdf2함수(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)으로 생성이 되고, 반복되는 값은 Buffer값이다.
    const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
    //console.log(hash);
    return hash.toString('base64');
}