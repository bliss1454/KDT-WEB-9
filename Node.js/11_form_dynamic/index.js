const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//view engine
app.set('view engine','ejs');
app.set('views','./views')

//router
app.get('/',(req,res) => {
    res.render('index')
});
//ajax방식
app.get('/ajax',(req,res) => {
    console.log('back',req.query)  //잘왔는지 확인
    res.send(req.query); //잘왔는지 확인하기 위해 다시 보내보기
    //res.send({result:true, userInfo: req.query.name}); //바로 윗줄과 같은 뜻
});
app.post('/ajax', (req,res) => {
    console.log('back',req.body);
    res.send(req.body);
});
//axios방식
app.get('/axios', (req,res) => {
    console.log('back',req.query)
    res.send(req.query);
});
app.post('/axios', (req,res) => {
    console.log('back',req.body)
    res.send(req.body);
});
//fetch방식
app.get('/fetch',(req,res) => {
    console.log('back',req.query);
    res.send(req.query);
});
app.post('/fetch', (req,res) => {
    console.log('back',req.body)
    res.send(req.body);
});

//server start
app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`)
})