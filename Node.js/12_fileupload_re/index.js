const express = require('express');
const multer = require('multer'); 
const path = require('path'); //폴더와 파일의 경로를 쉽게 조작하도록 제공함.
const app = express();
const PORT = 8000;

//view engine ejs
app.set('view engine', 'ejs'); 
//app.set('views','./views') : views라는 설정을 다른 폴더로 바꿀 때 쓰는 옵션. 
//views라는 폴더를 기본으로 사용할 때는 생략 가능.
//body-parser : multer form전송에 사용되는 거여서 지금 파일업로드에는 필요없지만, 설명을 위해 작성함.
//req.body 즉, POST 전송일 때 사용.
app.use(express.urlencoded({ extended: true }));
//extended : 중첩된 객체표현을 허용할지 말지 정함.
//application/x-www-form-urlencoded에서 사용함.
app.use(express.json());
//application/json타입에 사용하는 것.

//정적파일 설정.
//아래 코드에 따르면 서버 실행 시 http://localhost:8000/uplpads/파일명 이런 형태로 경로가 나온다.
app.use('/uploads', express.static(__dirname + '/uploads'));
//이 부분은 정적 파일을 서비스할 URL 경로를 지정한다. 즉, 클라이언트가 /uploads 경로로 들어오는 요청에 대해 정적 파일을 제공하겠다는 의미이다.
console.log(__dirname);
//__dirname은 현재 실행 중인 스크립트 파일의 디렉토리 경로를 나타내는 Node.js의 특수한 전역 변수이다. 이 변수는 스크립트 파일이 위치한 디렉토리 경로를 나타낸다.
//따라서 __dirname + '/uploads'는 현재 스크립트 파일의 디렉토리 경로와 '/uploads'를 결합하여 정적 파일이 위치한 디렉토리 경로를 나타낸다.

//multer setting
//diskStorage : 파일 저장 관련 설정 객체
const storage = multer.diskStorage({
    //1. destination : 저장될 경로를 지정(요청객체, 업로드될 파일객체, 콜백함수)
    destination: (req,file, cb) => {
        cb(null, 'uploads/')
    },
    //2. filename : 파일이름 결정(요청객체, 업로드된 파일객체, 콜백함수)
    filename: (req, file, cb) => {
        //아래 코드로 파일명이 한글일때 업로드되서 이름이 깨지는 현상을 막아준다.
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
        //extname : 확장자만 추출하는 것.
        const ext = path.extname(file.originalname);
        //basename : 파일이름만 추출하는 것(파일이름, 확장자) => 확장자를 제외해서 파일이름이 추출됨.
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        cb(null, newName);
        //만약 오류이면 null로 처리, 아니면 newName으로 콜백하여 파일명에 넣어준다.
    }
});
//파일 크기 제한
const limit = {
    fileSize: 5 * 1024 * 1024 //=5mb
};
//key value에서 key값과 value의 변수가 동일하면 합칠 수 있음.
const upload = multer({storage, limit});

//싱글 : single() 한번에 하나 업로드
//위에 upload에 multer를 담아놨기 때문에, multer대신 upload를 써준다. 그리고 업로드될 파일명이 ejs파일에 userfile로 되어있기에, 그 이름을 써준다.
app.post('/upload', upload.single('userfile'), (req,res) => {
    console.log(req.file);
    res.send(req.body);
});
//멀티(ver1) : array() 한번에 여러개 업로드
app.post('/upload/array', upload.array('userfiles',2), (req,res) => {
    console.log(req.files)
    res.send(req.body)
});
//멀티(ver2) : fields() 여러개의 요청
//maxcount로 파일의 개수를 제한할 수 있음.
app.post('/upload/fields', upload.fields([{name:"userfile1", maxCount: 2}, {name:"userfile2"}]),(req,res) => {
    if (req.files.length >2) {
        console.log(error);
        res.status(404).send('파일 개수가 초과되었습니다.');
    }
    res.send(req.body);
});
//동적(비동기)
app.post('/dynamic', upload.single('dynamic'), (req,res) => {
    console.log(req.file);
    res.send(req.file);
})

//router
app.get('/', (req, res) => {
    res.render('index');
});
//페이지를 지정할때는 미들웨어 use를 사용한다.
//use는 http전송방식을 이해하지 못한다. 따라서, 같은 url로 get,post를 만들 수 있지만, use로는 접근이 힘들다.
//예를 들어, get방식의 '/login'과 post방식의 '/login'은 다른 페이지이지만, use는 동일한 페이지로 인식함.
//use는 404 error페이지일 때 사용한다.
app.use('*', (req,res) => {
    res.render('404');
});

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
