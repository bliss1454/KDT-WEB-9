const model = require('../model/Model');

exports.main = (req,res) => {
    res.render('index', {data: model});  
};