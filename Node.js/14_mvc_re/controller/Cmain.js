const model = require('../model/Model');

const main = (req,res) => {
    res.render('index')
};
const comments=  (req,res) => {
    res.render('comments', { lists: model });
};
const comment = (req,res) => {
    console.log(req.params) //params에 /comment/:name 값이 온다
    //{name: '50} 이런식으로 온다. : name 콜론 뒤에 붙은 변수가 key, 입력한 값이 value이다.
    res.render('comment',{data: model [Number(req.params.name) -1]});  
}

module.exports = {
    main: main,  //key: value 형태인데, 값이 같으면 생략이 가능하다.
    comm: comments,
    comment : comment,
}

//모듈 사용 방법
//방법1
//module.exports.main = "함수, 변수, 문자열, 숫자"
//exports.main = null  //위의 것의 축약형이다.(위와 같은 말) //하나씩 내보내는 방식.
//방법2
//const test = () => {}
//module.exports = text //함수에 있는 모든 내용을 보낼 때 사용.