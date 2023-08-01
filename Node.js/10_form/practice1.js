const express = require('express')
const app = express();
const PORT = 8000

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views','./views');

//practice1이라는 사이트 (js작성하면서 페이지작성 후 결과페이지)
app.get('/',(req,res)=> {
    res.render('practice1',{title : 'GET으로 정보받기'});
});
//practice1result페이지를 열기위해
app.get('/getInfo', (req,res) => {
    res.render('practice1result', {
        title: "GET정보 결과 확인하기",
        userInfo: req.query
    })
});

// get.get('/postInfo',(req,res)=>{
//     res.render('practice2result')
// })
// app.post('/',(req,res) => {
//     res.render('practice2result', {
//         userInfo: req.query
//     })
// })

//서버오픈
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})