const { User } = require('../models');
//가져온 모듈에서 User라는 변수를 추출합니다. JavaScript의 객체 분해 문법을 사용하여 모듈에서 내보낸 User 객체를 변수로 가져옵니다.
//그리고 모듈은 컨트롤러 폴더를 나가고 있는 models라는 폴더에 있다.
const bcrypt = require('bcrypt');
//암호화 하기 위한 코드
//Node.js 애플리케이션에서 사용자 비밀번호의 해싱(hashing) 및 비교(compare)를 위해 bcrypt 라이브러리를 가져오는 코드입니다. 


exports.index = (req, res) => {
    res.render('index');
};
//exports(수출한다)는 모듈 시스템을 통해 함수를 다른 파일에서 사용할 수 있도록 내보내기 위한 Node.js의 기능입니다.
//res.render('index'); 이 부분은 Express.js의 res.render 메서드를 사용하여 "index"라는 뷰를 클라이언트에게 보내기 위한 코드입니다.
exports.get_signup = (req, res) => {
    res.render('signup');
};
exports.get_signin = (req, res) => {
    res.render('signin');
};

//회원가입 post부분
exports.signup = async (req, res) => {
    try {
        const { userid, pw, name } = req.body;    
        //객체구조분해할당으로 간단하게 필요한 내용들을 const로 선언해준다. 
        //안그러면 userid: req.body.userid 이런식으로 계속 각 데이터마다 써줘야하기 때문.
        const hashPw = bcryptPassword(pw); 
        //암호화 비밀번호를 받아줄 hashPw선언.
        //암호화하기 위한 암호화 함수를 밑에 생성해줘야한다.
        //암호화 함수 선언 후 해당 함수 불러오기. 그럼 즉, password값은 "const 이름" 의 이름이다.
        const result = await User.create({ 
            //async에 필요한 함수들을 선언하고, 그 다음 일들을 await이 받아서 처리하는 형식으로 코드 작성.
            userid,
            name,
            pw: hashPw,
            //password값은 위의 const에 선언된 함수 이름, "const 이름" 의 이름이다.
        });
        if (result) {
            res.json({ result: true });
        }
    } catch (error) {
        console.log(error);
    }
};

//로그인 post부분
exports.signin = async (req, res) => {
    //이 코드는 클라이언트(login.ejs)에서 전송한 로그인 요청에서 사용자 아이디와 비밀번호를 req.body에서 추출하고, 그런 다음 데이터베이스에서 해당 사용자를 검색합니다. 이것은 사용자의 로그인 인증을 처리하는 일반적인 컨트롤러의 일부분입니다.
    const { userid, pw } = req.body; 
    //해당 내용이 있는지 찾는거 먼저 그래서, 기존 내용들을 먼저 가져온다.
    //req (요청 객체)는 클라이언트가 서버로 보내는 HTTP 요청에 관한 정보를 포함하고 있습니다.
    //req.body는 POST 요청으로 전송된 데이터를 나타냅니다. 주로 HTML 폼에서 사용자가 입력한 데이터가 여기에 포함됩니다.
    //따라서 이 부분은 클라이언트에서 전달한 사용자 아이디와 비밀번호를 userid와 pw 변수에 저장합니다.
    const result = await User.findOne({
        //user테이블(db)에서 그 아이디의 사람이 있는지 찾는다. findOne이용.
        where: { userid },
        //where로 userid의 부분에 해당 아이디가 있는지 찾기.
        //where: { userid }는 데이터베이스에서 userid 필드가 userid 변수와 일치하는 사용자를 찾으라는 조건입니다.
    });
    if (!result) {
        res.json({ result: false, message: '사용자가 존재하지 않습니다' });
    } //!은 아니라면이라는 뜻임, 즉 결과 값이 false이면 해당 메세지를 띄워줘라
    const compare = comparePassword(pw, result.pw);
    //패스워드가 맞는지 확인한다. 일치하는지 확인하려면 함수를 하나 더 만들어준다. (암호화하면 콘솔창의 datavalues에 암호화된 패스워드 값이 담긴다.
    if (compare) {
        res.json({ result: true });
    } else {
        res.json({ result: false, message: '비밀번호가 일치하지 않습니다' });
    }
};

//비밀번호 암호화
//bcrypt 단방향
//단방향이기때문에, 복호화 작업이 없다.
const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}; //비밀번호를 받아와서 암호화 돌린다.
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
}; //그리고 데이터베이스에 있는 값들과 일치하는지 비교한다.
