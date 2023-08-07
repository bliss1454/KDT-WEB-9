const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require('./routes');  //다른 페이지 이름이라면 뒤에 써줘야하지만('./routes/index.js'), index페이지는 기본적으로 찾는 거여서 안써줘도 된다.
app.use('/' , router);
//예시 : 
//const userRouter = require('./routes.user');
//app.use('/user', userRouter);  ('/user' : root가 되는 것이다.)

//*맨 마지막 선언 (*설정해준 페이지를 제외한 다른 모든 것)
app.use('*',(req,res) => {    //앞에 있는 것만 다르면 다 '/'로 사용가능. 그러나 use를 쓰면 그 하나만 읽히기 때문에, 오류 페이지만 use사용
    res.render('404');
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})