const express = require('express');
const app = express();
const PORT = 8000;
const mysql = require('mysql')

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//router
const userRouter = require('./routes/user');
app.use('/user',userRouter);

//error페이지
app.use('*', (req,res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});