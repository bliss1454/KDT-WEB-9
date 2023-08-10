// const Visitor = require('../model/Visitor');
const models = require('../models');

exports.main = (req,res) => {
    res.render('index');
};

//전체 방명록 조회
exports.getVisitors =(req,res) => {
    //slect * from visitor과 같은 의미.
    models.Visitor.findAll().then(result => {
        console.log('fingAll',result);
        //res.render('visitor', {data : result});  //view를 rendering하는 것. 그리고 ejs의 데이터를 가져오는 것.
        res.send({data: result});  //send는 데이터만 보내는 것.
    })
};

//하나만 조회
exports.getVisitor = (req,res) => {
    models.Visitor.findOne({
        where: {id: req.query.id },
    }).then(result => {
        console.log('result',result);
        res.render('visitor', {data : [result]});   //findOne은 객체 하나이므로 []로 배열에 싸서 내보내준다. 반면에, findAll은 배열이여서 위처럼 {}바로 보내줄 수 있다.
    })
};

//하나 추가
exports.postVisitor = (req,res) => {
    console.log(req.body)
    models.Visitor.create({
        name:req.body.name,
        comment: req.body.comment
    }).then(result => {
        console.log(result);
        res.send({ id: result.dataValues.id, name:req.body.name, comment: req.body.comment})
    })
};

//하나 수정
exports.patchVisitor = (req,res)=> {
    models.Visitor.update( {
        name: req.body.name,
        comment: req.body.comment,
    }, 
    {where: {id: req.body.id }}
    ).then(() => {
        res.send({result:true});
    })
};

//하나 삭제
exports.deleteVisitor = (req,res) => {
    models.Visitor.destroy({
        where: {id: req.body.id},
    }).then(()=> {
        res.send({result:true});
    })
};