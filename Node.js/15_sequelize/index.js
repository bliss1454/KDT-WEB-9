const express = require('express');
const app = express();
const PORT = 8000;
<<<<<<< HEAD
const db = require('./models');   //index를 가져오는데 index는 생략가능
=======
const mysql = require('mysql')
>>>>>>> 3625214b296458adbb195ec80e8a34f634506a37

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
<<<<<<< HEAD
//localhost:8000/visitor로 시작하는 것들은 다 npm i index로 들어간다.
=======
//localhost:8000/visitor로 시작하는 것들은 다 index로 들어간다.
>>>>>>> 3625214b296458adbb195ec80e8a34f634506a37
app.use('/visitor',visitorRouter);

app.use('*', (req,res) => {
    res.render('404');
});

<<<<<<< HEAD
db.sequelize.sync({force: false}).then(() => {   
    //force:false => 테이블이 있으면 넘어가고, 없으면 테이블을 만들어줌.
    //force:true => 있어도 삭제하고 다시 만들어줌.
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
=======
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
>>>>>>> 3625214b296458adbb195ec80e8a34f634506a37
