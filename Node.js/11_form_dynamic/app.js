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
    const id= 'bliss'; 
    const pw = '1234';
    if (id === req.body.id && pw === req.body.pw) {
        res.send({ result: true, userInfo: req.body })
    } else {
        res.send({ result: false, userInfo: null });
    }
});

app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`)
})