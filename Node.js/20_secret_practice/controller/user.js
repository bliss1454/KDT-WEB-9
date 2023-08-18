const { User } = require('../models');

exports.index = (req, res) => {
    res.render('index');
};

exports.signup = (req, res) => {
    res.render('signup');
};
exports.signin = (req, res) => {
    res.render('signin');
};

exports.post_signup = (req, res) => {
    //객체구조분해할당으로 간단하게 필요한 내용들 const로 선언하기.
    //const란?
    User.create({    
        //pw을 암호화하기 위한 암호화 함수를 밑에 생성해준다.(pakage.json에 필요한 메소드들 다운로드 되어있는지 확인하기)
        //암호화 함수 선언 후 해당 함수 불러오기. 그럼 즉, password값은 "const 이름" 의 이름이다.
        //인터넷창으로 안가고, post man을 이용해서 데이터값을 보내줄 수 있다.
        userid: req.body.userid,
        name: req.body.name,
        pw: req.body.pw,
    }).then((result) => {  //then이 있기때문에, async await이 필요없다.
        console.log('result', result);
        res.send({ result: true }); //res.send가 아닌, res.json으로 보낸다. 그 차이는?
    });
};
exports.post_signin = (req, res) => {  
    const { userid, pw } = req.body;  //해당 내용이 있는지 찾는거 먼저 그래서, 기존 내용들을 먼저 가져온다.
    User.findOne({  //그 아이디의 사람이 있는지 찾는다. findOne이용.
        //where: { userid: req.body.userid, pw: req.body.pw },
        where: { userid, pw}, //where로 찾기. //위는 좀 더 자세하게 데이터값의 경로도 알려주는 거다. 즉, 위와 같은 내용인거다.
    }).then((result) => {  //패스워드가 맞는지 확인한다. 일치하는지 확인하려면 함수를 하나 더 만들어준다. (암호화하면 콘솔창의 datavalues에 암호화된 패스워드 값이 담긴다.)
        console.log('result', data);
        res.send({ result: true, data });
    });
};
