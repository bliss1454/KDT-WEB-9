//const model = require('../model/Model');
const { User } = require('../models');
const bcrypt = require("bcrypt");

//쿠키 설정
const cookieConfig = {
    httpOnly: true, //자바스크립트말고 웹서버에서만 사용하겠다.
    maxAge: 60 * 1000, //1분.
};

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    //쿠키 사용
    //요청(req)받는 거이기 때문에, req이다.
   //console.log('cookie', req.cookies)
   console.log(req.cookies.islogin)
   if(req.cookie.islogin) {
    //쿠키가 존재한다면 로그인 되어있는 상태이다.
    res.render('index', {cookie: true})
   } else {
    //쿠키가 없으면 비로그인 상태 => alret창 띄우기
    res.render('index', {cookie: false});
}
};
//회원가입페이지
const signup = (req, res) => {
    //쿠키 생성 (서버가 클라이언트가 하는걸 응답(res)해 주는 거다.)
    //res.cookie(쿠키이름, 쿠키값, 옵션객체)
    //res.cookie('testCookie', 'signup', cookieConfig );
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    if (req.session.userInfo) {
        res.redirect('/profile')
    } else {
    res.render('signin');
}};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    User.findOne({
        where: { id: req.params.number },
    }).then((result) => {
        res.render('profile', { data: result });
    });
};

///////////////////////////////
//POST
//회원가입
const post_signup = (req, res) => {
    const { userid, name, pw } = req.body;
    const encPass = createHash(pw);
    User.create({ userid, name, pw:encPass }).then(() => {
        res.json({ result: true });
      });
};
//로그인
const post_signin = (req, res) => {
    const {userid, pw} = req.body;
    User.findOne({where:{userid}}).then((result)=>{
        const isVerify = compareHash(pw, result.pw);
        if(isVerify){
            //세션 생성
            req.session.userInfo = {name:result.name, id: result.id}
            res.json({ result: true, data: result.dataValues });
        }
        else{
            res.json({ result: false });
        }
    }).catch((err)=>{
        console.log(err);
        res.json({ result: false, message: '회원정보가 없습니다.' });
    })
};

const members = (req,res) => {
    if( req.session.result.name) { 
        result.findAll().then( (result) => {
        res.render('members', {name: res.session.result.name , result})
    });
    } else {
        res.redirect('/signin')
    }
}

module.exports = {
    main,
    signup,
    signin,
    members,
    profile,
    post_signup,
    post_signin,
};

const createHash = (password)=>{
    return bcrypt.hashSync(password, 10);
};

const compareHash = (password, dbPassword)=> {
    return bcrypt.compareSync(password, dbPassword);
};