const express = require('express');
const multer = require('multer');
const { userInfo } = require('os');
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
            console.log('filename: ', req.body);
            const ext = path.extname(file.originalname);
            done(null, req.body.userId + ext);
        },
    }),
    limits : {fileSize : 5 * 1024 * 1024},
})

//router
app.get('/', (req,res) => {
    res.render('practice1');
});

app.post('/upload', uploadDetail.single('userfile'), (req,res) => {
    res.render('practice1result', {
        userInfo: req.body,
        userfile: req.file
    });
});

//server
app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
})