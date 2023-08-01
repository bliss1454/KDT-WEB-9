const express = require('express')
const app = express();
const PORT = 8000

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//view engine
app.set('view engine', 'ejs');
app.set('views','./views');

//router
//받는건 get(req.query) 보내는건 post(req.body)
// app.post('/',(req,res) => {
//     console.log(req.body);
// })
app.get('/',(req,res)=> {
    res.render('index',{title : '폼 전송 실습'});
});
app.get('/getForm', (req,res) => {
    console.log(req.query);
    res.render('result', {
        title: "GET요청 폼 결과 확인하기",
        userInfo: req.query
    })
});

app.post('/postForm',(req,res) => {
    console.log(req.body);
    res.render('result',{    //result페이지 열림, title 및 값을 전달해줌
            title: 'POST요청 폼 결과 확인하기',
            userInfo: req.body,
        })
    });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})

