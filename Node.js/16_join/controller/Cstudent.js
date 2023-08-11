const {Student, StudentProfile , Classes} = require('../models')

exports.main = (req,res) => {
    res.render('index');
};

exports.post_student = async (req,res) => {    //1:1일때 같이 들어갈 때 사용하는 방법
    try{
        const { userid, password, email, name, major } =req.body;
        const user = await Student.create({
            userid,
            password,
            email,
            studentProfile: {
                name,
                major
            }
        }, {
            include : StudentProfile,
            //[{model: StudentProfile}] 배열 안에 객체로 이렇게 오는걸 줄여 쓴 표현
            //이 테이블에 위의 객체들이 들어간다를 선언
        });
        
        console.log(user);
        res.send(user);
    } catch (error) {
        console.log(error)
    }
}

//로그인이 되었다는 가정 하에 설정
exports.post_class = async (req,res) => {   //1:다일때 사용하는 일반적인 방법
    try {
        const {name, room, code, teacher_name, studentId} = req.body;
        const classes = await Classes.create ({
            name,
            room,
            code,
            teacher_name,
            studentId
        });
        res.send(classes);
    } catch (error) {
        console.log(error)
    }
};

exports.get_student = async(req,res) => {
    try{
        //inclue : 쿼리를 실행할때 관련된 모델의 데이터도 함께 조회할 수 있도록 하는 옵션.
        const student = await Student.findAll({
            attributes : ['id','userid', 'email'],  //attribue : 원하는 값만 불러올 수 있음
            include: [{model: StudentProfile , attributes: ['major', 'name']}]
        });
        res.send(student);
    } catch(error) {
        console.log(error);
    }
}