const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine','ejs');
app.set('views','./views')

app.get('/',(req,res) => {
    res.render('practice1')
});

app.get('/signUp', (req,res) => {
    console.log('back',req.query)
    res.send(req.query);
});

app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`)
})