const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine','ejs');
app.set('views','./views')

app.get('/',(req,res) => {
    res.render('app')
});

app.post('/login', (req,res) => {
    console.log('back',req.body)
    const id= 'bliss', pw = '1234'
    if (id == req.body.id && pw == req.body.pw) {
        console.log('로그인 성공');
        
    } else {
        console.log('로그인 실패');
    }
    res.send(req.body);
    
});

app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`)
})