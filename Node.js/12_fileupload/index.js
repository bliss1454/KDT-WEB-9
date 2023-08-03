const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

//view engine
app.set('view engine','ejs');
app.set('views','./views');

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json())

//정적파일설정
app.use('/uploads', express.static(__dirname + '/uploads'));

//multer
const upload = multer ({
    //dest : 업로드할 파일을 저장할 경로를 지정하는 것
    dest:'uploads/'
});
//multer의 세부 설정
const uploadDetail = multer ({
    //storage : 저장할 공간에 대한 정보이다.
    //diskStorage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공하는 것.
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');   //에러일때 null처리, 아닐때 파일uploads에 담기
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            console.log('ext', ext);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext );
        },
    }),
    limits : {fileSize : 5 * 1024 * 1024},
})

//router
app.get('/', (req,res) => {
    res.render('index');
});
//싱글 업로드 : single
app.post('/upload', uploadDetail.single('userfile'), (req,res) => {
    console.log(req.file);
    console.log(req.body);
})
//멀티(ver1) 업로드 : array
app.post('/upload/array', uploadDetail.array('userfiles'), (req,res) => {
    console.log(req.files);
    console.log(req.body);
});
//멀티(ver2) 업로드 : fields (배열[]을 만들어주고 그 안에 객체{key:객체의 이름}를 만들어준다)
app.post('/upload/fields', uploadDetail.fields([{name: 'userfile1'},{name: 'userfile2'}]), (req,res) => {
    console.log(req.files);
    console.log(req.body);
});
//동적 파일 업로드
app.post('/dynamicFile', uploadDetail.single('dynamic-file'),(req,res) => {
    console.log("first")
    console.log(req.file);
    res.send(req.file); //반환할 때는 send로 반환하기
});

//server
app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
})