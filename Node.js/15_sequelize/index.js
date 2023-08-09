const express = require('express');
const app = express();
const PORT = 8000;
const mysql = require('mysql')

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());



//router
// const indexRouter = require('./routes');
// app.use('/',indexRouter);
const visitorRouter = require('./routes/visitor');
app.get('/',(req, res) => {
    res.render('index');
});
//localhost:8000/visitor로 시작하는 것들은 다 index로 들어간다.
app.use('/visitor',visitorRouter);

app.use('*', (req,res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});