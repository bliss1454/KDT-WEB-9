//const model = require('../model/Model');
//models/index에서 index는 생략
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
    console.log('cookie', req.cookies)
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    //쿠키 생성 (서버가 클라이언트가 하는걸 응답(res)해 주는 거다.)
    //res.cookie(쿠키이름, 쿠키값, 옵션객체)
    res.cookie('testCookie', 'signup', cookieConfig );
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    if (req.session.userInfo) {
        res.redirect(`/profile/${req.session.userInfo.id}`)
    } else {
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    User.findOne({
        where: { id: req.params.number },
    }).then((result) => {
        res.render('profile', { data: result });
    });
};
const buy = (req, res) => {};

///////////////////////////////
//POST
//회원가입
const post_signup = (req, res) => {
    const { userid, name, pw } = req.body;
    const encPass = createHash(pw);
    //create 데이터 생성
    //실습과제 - 비밀번호 암호화하여 저장
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
            req.session.userInfo = {name:User.name, id: User.id}
            res.json({ result: true, data: result.dataValues });
        }
        else{
            res.json({ result: false });
        }
    }).catch((err)=>{
        console.log(err);
        res.json({ result: false });
    })
    //실습과제 - 로그인
    //step1 아이디를 찾아서 사용자 존재 유/무 체크
    //step2 입력된 비밀번호 암호화하여 기존 데이터와 비교
};
/////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    //update ( 수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력 )
    const { name, pw, id } = req.body;
    const encPass = createHash(pw);
    User.update({ name, pw:encPass }, { where: { id } }).then(() => {
        res.json({ result: true });
    });
};

/////////////////////////////////////
//DELETE
//회원탈퇴 destroy()

const delete_profile = (req, res)=>{
    const {id} = req.body;
    User.destroy({where:{id}}).then((result)=>{
        console.log(result);
        res.json({ result: true });
    });
}

module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
    delete_profile,
};


const createHash = (password)=>{
    return bcrypt.hashSync(password, 10);
};

const compareHash = (password, dbPassword)=> {
    return bcrypt.compareSync(password, dbPassword);
}};