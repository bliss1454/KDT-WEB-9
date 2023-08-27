//const model = require('../model/Model');
//models/index에서 index는 생략
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'abcdefg';

//쿠키 설정
const cookieConfig = {
    httpOnly: true,
    maxAge: 60 * 1000, //1분
};

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    //쿠키사용
    // console.log('cookie', req.cookies);
    console.log(req.cookies.isLogin);
    if (req.cookies.isLogin) {
        //쿠키가 존재한다면 로그인 되어있는상태
        res.render('index', { cookie: true });
    } else {
        //쿠키가 없으면 비로그인 => alert창 띄우기 (창의 내용은 view에 index.ejs에 적어놓는다.)
        res.render('index', { cookie: false });
    }
};
//회원가입페이지
const signup = (req, res) => {
    //쿠키생성
    //res.cookie(쿠키이름, 쿠키값, 옵션객체)
    // res.cookie('testCookie', 'signup', cookieConfig);
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    // console.log(req.session.userInfo, req.sessionID);
    // if (req.session.userInfo) {
    //     res.redirect(`/profile/${req.session.userInfo.id}`);
    // } else {
    //     res.render('signin');
    // }
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });
    //findOne은 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체반환
    //where: 는 객체형태로 찾을 정보를 입력
    User.findOne({
        where: { id: req.params.number },
    }).then((result) => {
        res.render('profile', { data: result });
    });
};
const buy = (req, res) => {};
//전체회원조회
const members = (req, res) => {
    if (req.session.userInfo) { 
        //이 부분은 Express.js의 세션 (session)을 사용하여 사용자 정보를 확인하는 조건문이다. 
        //세션은 사용자의 브라우저 세션을 추적하고 정보를 저장하기 위한 메커니즘을 제공한다. 
        //req.session.userInfo가 존재하면 사용자가 로그인되어 있는 것으로 간주한다.
        User.findAll().then((result) => {
            res.render('members', { name: req.session.userInfo.name, result });
        });
    } else {
        res.redirect('/signin');
    }
};

///////////////////////////////
//POST
//회원가입
const post_signup = async (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });
    const { userid, name, pw } = req.body;
    //create 데이터 생성
    //실습과제 - 비밀번호 암호화하여 저장
    const hash = await bcryptPassword(pw);
    User.create({ userid, name, pw: hash }).then(() => {
        res.json({ result: true });
    });
};
//로그인
const post_signin = async (req, res) => {
    // model.db_signin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.json({ result: true, data: result[0] });
    //     } else {
    //         res.json({ result: false });
    //     }
    // });
    //실습과제 - 로그인
    //step1 아이디를 찾아서 사용자 존재 유/무 체크
    const { userid, pw } = req.body;
    const user = await User.findOne({
        where: { userid },
    });
    if (user) {
        //step2 입력된 비밀번호 암호화하여 기존 데이터와 비교
        //사용자가 존재함
        const result = await compareFunc(pw, user.pw);
        console.log('result', result);
        if (result) {
            // //세션 생성
            // req.session.userInfo = {name: user.name, id: user.id };
            //JWT 생성
            const token = jwt.sign({ name: user.name, id: user.id }, SECRET);
            //JWT에는 사용자의 이름(name)과 ID(id) 정보가 포함된다. 이 정보는 클라이언트 측에서 로그인 상태를 나타내는 데 사용될 수 있다.
            res.cookie('isLogin', true);
            //isLogin이라는 쿠키를 생성하고 클라이언트에게 전달한다. 이 쿠키는 클라이언트에게 현재 로그인 상태를 나타내는 데 사용된다. true 값은 로그인이 성공했음을 나타낸다.
            res.cookie('aToken', token);
            //aToken이라는 쿠키를 생성하고 클라이언트에게 전달한다. 이 쿠키에는 JWT 토큰이 포함된다. 
            res.json({ result: true, data: user, token });
            //이 부분은 로그인이 성공했을 때 클라이언트에게 응답을 보낸다. 
            //응답은 result: true (로그인 성공), 사용자 정보(data: user), 그리고 JWT 토큰(token)을 포함한다. 
            //클라이언트는 이 정보를 사용하여 로그인 상태를 유지하고, 필요한 경우 서버에 인증 헤더로 JWT 토큰을 전송하여 보안 접근을 얻을 수 있다.
        } else {
            res.json({ result: false, message: '비밀번호가 틀렸습니다.' });
        }
    } else {
        //사용자가 존재하지 않음
        res.json({ result: false, message: '존재하는 사용자가 없습니다' });
    }
};
/////////////////////////////////////////
//PATCH
const edit_profile = async (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    const { name, pw, id } = req.body;
    //headers의 요청은 req.headers안에 있음.
    console.log(req.headers);
    //split() ()안의 문자를 기준으로 문자열을 잘라내기한 후 배열을 반환
    const [bearer, token] = req.headers.authorization.split(' ');
    //HTTP 요청 헤더에서 Authorization 헤더를 가져와서 Bearer 토큰과 실제 JWT 토큰을 추출한다. 
    if (bearer === 'Bearer') {
        //이 부분은 Authorization 헤더가 Bearer 형식인지 확인한다. Bearer 형식은 JWT 토큰을 포함하는 표준 방식이다.
        try {
            //JWT 토큰의 유효성을 검사한다. jwt.verify() 함수를 사용하여 토큰을 검사하고, 유효한 토큰인 경우에만 편집 작업을 수행한다.
            const result = jwt.verify(token, SECRET);
            console.log(result);
            const returnValue = await User.findOne({ where: { id: result.id } });
            //새로운 암호를 암호화 하는 작업.
            if (returnValue) {
                const hash = await bcryptPassword(pw);
                //update ( 수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력 )
                User.update({ name, pw: hash }, { where: { id } }).then(() => {
                    res.json({ result: true });
                });
            }
        } catch (error) {
            //인증에 실패했을때
            console.log(error);
            res.json({ result: false, message: '인증에 실패하였습니다' });
        }
    } else {
        res.json({ result: false, message: '잘못된 인증방식입니다' });
    }
};

/////////////////////////////////////
//DELETE
//회원탈퇴 destroy()
const destroy = (req, res) => {
    const { id } = req.body;
    User.destroy({
        where: { id },
    }).then(() => {
        //쿠키삭제
        //res.clearCookie(쿠키이름)
        res.clearCookie('isLogin');
        // //세션삭제
        // req.session.destroy();
        res.json({ result: true });
    });
};

module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    members,
    post_signup,
    post_signin,
    edit_profile,
    destroy,
};

/////function
//암호화
const bcryptPassword = (password) => bcrypt.hash(password, 11);
//비교
const compareFunc = (password, dbpass) => bcrypt.compare(password, dbpass);
