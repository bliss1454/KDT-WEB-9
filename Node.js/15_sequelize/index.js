const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');   //index를 가져오는데 index는 생략가능

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
//localhost:8000/visitor로 시작하는 것들은 다 npm i index로 들어간다.
app.use('/visitor',visitorRouter);

app.use('*', (req,res) => {
    res.render('404');
});

db.sequelize.sync({force: false}).then(() => {   
    //force:false => 테이블이 있으면 넘어가고, 없으면 테이블을 만들어줌.
    //force:true => 있어도 삭제하고 다시 만들어줌.
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
