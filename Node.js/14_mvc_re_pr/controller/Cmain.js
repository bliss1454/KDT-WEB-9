const model = require('../model/Model');

exports.main = (req,res) => {
    res.render('index', {data: model});
    
};

exports.gestplus = (req,res) => {
    console.log(req.body)
    models.data.create({
        id:req.body.id,
        name:req.body.name,
        gender:req.body.gender,
        major: req.body.major
    }).then(result => {
        console.log(result);
        res.send({ id:req.body.id, name:req.body.name, gender:req.body.gender, major: req.body.major})
    })
};