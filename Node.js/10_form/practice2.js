const express = require('express')
const app = express();
const PORT = 8000

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/', (req,res) => {
    res.render('practice2')
});

app.post('/postInfo', (req,res) => {
    res.render('practice2result', {
        title: "POST정보 결과 확인하기",
        userInfo: req.body
    })
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})